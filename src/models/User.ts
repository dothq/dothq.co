import * as mongoose from "mongoose";

import { log } from "../tools/log";

import { api } from "..";
import { API_DATABASE_URI } from "../config";

mongoose.connect(API_DATABASE_URI, (err: any) => {
  if (err) {
    log("error", err.message)
  } else {
    log("success", api.locales.applyContext("en-US", "api_db_connected"))
  }
});

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

export const UserSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;