import { IBimOperator, IContext } from './interface';
export * from './interface';
export * from './enums';
export * from './model';
export declare const ProviderType: {
    BIMFACE: string;
};
export default function getProvider(provider: String, customContext: IContext): IBimOperator;
