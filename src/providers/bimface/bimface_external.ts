import debugLog from '../../decorators/debug_log';
import { IExternal } from '../../interface';
import { RotateOption, OffsetOption, ScaleOption, TranslateOption } from '../../model';

/**
 * bimface外部构件
 */
@debugLog()
export default class BimfaceExternal implements IExternal {
    externalMgr: any;
    loader: any;
    viewer3D: any;
    constructor(viewer3D: any) {
        this.viewer3D = viewer3D;
        this.externalMgr = new window.Glodon.Bimface.Viewer.ExternalObjectManager(viewer3D);
        this.loader = new window.THREE.TDSLoader();
    }
    async add(name: string, url: string): Promise<string> {
        return new Promise((resolve) => {
            this.loader.load(url, (object) => {
                this.externalMgr.addObject(name, object);
                this.viewer3D.render();
                resolve(this.externalMgr.getObjectIdByName(name));
            });
        });
    }
    removeById(objectId: string) {
        this.externalMgr.removeById(objectId);
    }
    clear(): void {
        this.externalMgr.clear();
    }
    rotate(objectId: string, option: RotateOption): void {
        switch (option.axis.toLowerCase()) {
            case 'x':
                this.externalMgr.rotateX(objectId, option.radian);
                break;
            case 'y':
                this.externalMgr.rotateY(objectId, option.radian);
                break;
            case 'z':
                this.externalMgr.rotateZ(objectId, option.radian);
                break;
        }
    }
    offset(objectId: string, option: OffsetOption): void {
        this.externalMgr.offset(objectId, option);
    }
    scale(objectId: string, option: ScaleOption): void {
        if (option.x === 0 || option.y === 0 || option.z === 0) {
            throw new Error('x,y,z的值不能为0');
        }
        this.externalMgr.scale(objectId, option);
    }
    setPosition(objectId: string, position: Position) {
        this.externalMgr.setPosition(objectId, position);
    }
    translate(objectId: string, option: TranslateOption) {
        this.externalMgr.setPosition(objectId, option);
        this.viewer3D.render();
    }
}
