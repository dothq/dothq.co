import { Sequelize, Model, DataTypes } from "sequelize";

import * as credentials from '../../credentials.json';
import { log } from "../tools/log";
import { api } from "..";
import { makeId } from "../tools/id";

const sequelize = new Sequelize(credentials.POSTGRES_URI, { logging: false })

sequelize
  .authenticate()
  .then(() => {
    log("info", api.locales["en-US"]["api_db_connected"])
  })
  .catch((err) => {
    throw new Error(err);
  });

export interface User extends Model {
  id: string;
  username: string;
  email: string;
  password: string;
  permissions: string[];
}

export default sequelize.define<User>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: () => {
      return makeId();
    }
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  permissions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: () => {
      return ["read.self.account", "write.self.account"]
    }
  }
});

sequelize.sync()