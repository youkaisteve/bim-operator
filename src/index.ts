import BimfaceOperator from './providers/bimface_operator';
import { IBimOperator } from './interface';

export * from './interface';
export * from './enums';
export * from './model';

/**
 * Bim供应商
 */
export const ProviderType = {
    BIMFACE: 'bimface',
};

/**
 * 获取供应商操作类
 * @param provider 提供方名字，@see {@link ProviderType}
 */
export default function getProvider(provider: String): IBimOperator {
    switch (provider) {
        case ProviderType.BIMFACE:
            return new BimfaceOperator();
        default:
            throw new Error(`provider [${provider}] not found`);
    }
}
