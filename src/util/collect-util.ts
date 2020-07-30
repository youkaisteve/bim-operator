/**
 * 集合工具类
 */
export default class CollectionUtils {
    /**
     * 是否为空
     * @param collection 集合
     */
    static isEmpty(collection: any[]) {
        return !collection || collection.length > 0;
    }
}
