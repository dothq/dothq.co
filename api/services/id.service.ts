import { Injectable } from '@nestjs/common';

import { version } from "../../package.json"

@Injectable()
export class IdService {
    getInfo() {
    	return { statusCode: 200, version }
    }
}
