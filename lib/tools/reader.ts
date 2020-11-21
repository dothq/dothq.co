import * as yaml from 'js-yaml';
import { readFileSync, writeFileSync } from 'fs';

export const readYaml = (location: string) => {
    let data = "";

    try {
        data = yaml.safeLoad(readFileSync(location, 'utf8'));

        return data;
    } catch(e) {
        console.error(e);
        return process.exit(0)
    }
}

export const makeYaml = (data: any) => {
    return yaml.dump(data)
}

export const writeYaml = (data: any, location: string) => {
    writeFileSync(location, data, 'utf-8')

    return true;
}