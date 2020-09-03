import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';

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