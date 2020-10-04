import {
    BlobServiceClient,
    StorageSharedKeyCredential
} from "@azure/storage-blob";

import * as sharp from 'sharp';

import * as multer from 'multer';

import { Req, Res } from "../../../types";
import { api } from "../..";
import { makeId } from '../../tools/id';

import axios from 'axios';

import User from '../../models/User';
import { ALLOWED_AVATAR_TYPES } from "../../config";

import * as credentials from '../../../credentials.json';

const blob = new BlobServiceClient(
    `https://dothq.blob.core.windows.net`,
    new StorageSharedKeyCredential("dothq", credentials.CDN_KEY)
);

const containerClient = blob.getContainerClient("avatars");

export default {
    route: '/id/avatar',
    accepts: ['GET', 'POST', 'OPTIONS'],
    flags: {
        requireAuthorization: true
    },
    middleware: [
        multer({ storage: multer.memoryStorage() }).single('avatar')
    ],
    handlers: {
        GET: async (req: Req, res: Res) => {
            if(!res.authorizedUser) return;

            res.redirect(`https://cdn.dothq.co/avatars/${res.authorizedUser.avatarId}.png`);
        },
        POST: async (req: Req, res: Res, next) => {
            if(!res.authorizedUser || !req.file) return;

            if(!ALLOWED_AVATAR_TYPES.includes(req.file.mimetype.split("/")[1])) return api.errors.stop(4021, res, [ALLOWED_AVATAR_TYPES]);

            const blobId = makeId(8);

            const user = await User.findOne({ where: { id: res.authorizedUser.id } });

            if(user.avatarId) {
                const url = `https://dothq.blob.core.windows.net/avatars/${user.avatarId}.png`;

                const status = await axios.get(url).then(r => { return r.status }).catch(r => { return r.response.status });

                if(status == 200) await containerClient.deleteBlob(`${user.avatarId}.png`)
            }

            const buffer = await sharp(req.file.buffer)
                            .resize(256, 256, { fit: "fill", background: { r: 255, g: 255, b: 255, alpha: 1 } })
                            .toFormat('png')
                            .toBuffer();

            containerClient.getBlockBlobClient(`${blobId}.png`).upload(buffer, buffer.length, { 
                blobHTTPHeaders: { blobContentType: "image/png" }
            }).then(async (_) => {
                api.errors.stop(200, res, [], { upload: { id: blobId, mime: "image/png", size: req.file.size } });

                user.avatarId = blobId;
                await user.save({ fields: ["avatarId"] });
            }).catch(err => {
                api.errors.stop(4020, res);

                console.log(err);
            })
        },
        OPTIONS: (req: Req, res: Res) => api.errors.stop(200, res),
    }
}