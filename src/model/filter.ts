/**
 * 构件数据（可用于查询条件的构建）
 */
export interface ComponentFilter {
    /**
     * 构件类型
     */
    categoryId: String;
    /**
     * 楼层名字
     */
    levelName: String;
    /**
     * 专业名称
     */
    specialty: String;
    /**
     * 族名称
     */
    family: String;
    /**
     * 族类型
     */
    familyType: String;
}
