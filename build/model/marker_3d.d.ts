export default interface Marker3D {
    id: string;
    worldPosition: Position;
    src: string;
    size?: number;
    tooltip?: string;
    tooltipStyle?: Object;
    onClick?: Function;
    onHover?: Function;
}
