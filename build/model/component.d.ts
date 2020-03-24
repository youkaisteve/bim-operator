import ModelBase from './base';
export default interface Component extends ModelBase {
    componentId: String | Number;
    componentName: String;
}
