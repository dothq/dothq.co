import { readdirSync, statSync } from 'fs';
import { resolve } from 'path';

export const goForAWalk = (dir, ls = []) => {
    readdirSync(dir).forEach(file => {
        ls = statSync(resolve(dir, file)).isDirectory()
            ? goForAWalk(resolve(dir, file), ls)
            : ls.concat(resolve(dir, file));
    
    });

    return ls;
}