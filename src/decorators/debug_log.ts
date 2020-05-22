import { beforeMethodOnClass } from 'yk-aspect';
import toolkit from '../util/toolkit';

/**
 * 调试日志，给class打上此标签后，会记录方法的调用以及入参
 * @param pattern 筛选方法的正则表达式
 */
export default function debugLog(pattern?: any) {
    return beforeMethodOnClass({
        pattern,
        handle: (meta) => {
            if (meta.target.context && meta.target.context.debugOn) {
                console.debug(`[${meta.className}.${meta.methodName}] CALLED`);
                const argsStrs = toolkit.getArgumentsDisplayInfo(meta.args);
                if (argsStrs) {
                    argsStrs.forEach((argsStr) => {
                        console.debug(`>>> parameter ===> ${argsStr}`);
                    });
                }
            }
        },
    });
}
