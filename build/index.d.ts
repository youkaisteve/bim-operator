import { IBimOperator } from './interface';
export * from './interface';
export * from './enums';
export * from './model';
export declare const ProviderType: {
    BIMFACE: string;
};
export default function getProvider(provider: String): IBimOperator;
