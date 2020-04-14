import { beforeMethodOnClass } from 'yk-aspect';
import toolkit from '../util/toolkit';

export default function debugLog(pattern?: any) {
    return beforeMethodOnClass({
        pattern: pattern,
        handle: (meta) => {
            console.debug(`[${meta.className}.${meta.methodName}] CALLED`);
            const argsStrs = toolkit.getArgumentsDisplayInfo(meta.args);
            if (argsStrs) {
                argsStrs.forEach((argsStr) => {
                    console.debug(`>>> parameter ===> ${argsStr}`);
                });
            }
        },
    });
}
