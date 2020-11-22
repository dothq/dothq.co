import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

import { version } from "../../package.json"

@Injectable()
export class AppService {
    constructor(private sequelize: Sequelize) {}

    getInfo() {
    	return { statusCode: 200, version }
    }
}
