import { Model, DataTypes } from "sequelize";

import { sequelize } from "../";

import { makeId } from "../tools/id";

export interface User extends Model {
  id: string;
  username: string;
  email: string;
  password: string;
  permissions: string[];
  active_token?: string;
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
  },
  active_token: {
    type: DataTypes.STRING,
    defaultValue: ""
  }
});

sequelize.sync()