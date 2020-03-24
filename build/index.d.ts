import { IBimOperation } from './interface';
export { IBimOperation } from './interface';
export declare const ProviderType: {
    BIMFACE: string;
};
export default function getProvider(provider: String): IBimOperation;
