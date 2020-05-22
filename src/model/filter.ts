/**
 * 构件数据（可用于查询条件的构建）
 */
export interface ComponentFilter {
    /**
     * 构件类型
     */
    categoryId: string;
    /**
     * 楼层名字
     */
    levelName: string;
    /**
     * 专业名称
     */
    specialty: string;
    /**
     * 族名称
     */
    family: string;
    /**
     * 族类型
     */
    familyType: string;
}
