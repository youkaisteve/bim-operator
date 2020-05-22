import BimfaceOperator from './providers/bimface_operator';
import { IBimOperator, IContext } from './interface';
import context from './context';

export * from './interface';
export * from './enums';
export * from './model';

console.debug = function (argument) {
    console.log.call(this, `%c [BIM-Operator]%c ${argument}`, 'font-weight:bold;color:#f99;', 'color:#00f;');
};
/**
 * Bim供应商
 */
export const ProviderType = {
    BIMFACE: 'bimface',
};

/**
 * 获取供应商操作类
 * @param provider 提供方名字，@see {@link ProviderType}
 * @param context 选项 @see {@link IContext}
 */
export default function getProvider(provider: string, customContext: IContext): IBimOperator {
    const combineContext = { ...context, ...customContext };
    console.debug(`CustomContext set : ${JSON.stringify(combineContext)}`);
    switch (provider) {
        case ProviderType.BIMFACE:
            return new BimfaceOperator(combineContext);
        default:
            throw new Error(`provider [${provider}] not found`);
    }
}
