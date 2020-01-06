import Bimface from './providers/bimface';
import { IBimOperation } from './interface';

export { IBimOperation, Floor, Component } from './interface';
/**
 * Bim供应商
 */
export const ProviderType = {
  BIMFACE: 'bimface'
};

/**
 * 获取供应商操作类
 * @param provider 提供方名字，@see {@link ProviderType}
 */
export default function getProvider(provider: String): IBimOperation {
  switch (provider) {
    case ProviderType.BIMFACE:
      return new Bimface();
    default:
      throw new Error(`provider [${provider}] not found`);
  }
}
