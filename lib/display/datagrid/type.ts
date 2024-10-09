/**
 * 表格组件属性
 */
export type DataGridProps = {
    /**
     * 表格字段信息列表
     */
    fields: DataGridFieldInfo[]

    /**
     * 是否分页，默认为true
     */
    pagination?: boolean

    /**
     * 加载数据
     */
    loader: () => Promise<DataGridRecordInfo>
}
/**
 * 表格数据
 */
export type DataGridRecordInfo = {
    data: unknown[]
}

/**
 * 表格字段信息
 */
export type DataGridFieldInfo = {
    /**
     * 字段名称，对应数据中的字段名称
     */
    name: string;

    /**
     * 字段名称显示名称
     */
    label: string;
    /**
     * 字段类型,默认为string
     */
    type?: "string" | "number" | "date";
    /**
     * 是否显示,默认为true
     */
    visible?: boolean;

    /**
     * 是否可编辑,默认为false，主要用于表格中的编辑功能
     */
    editable?: boolean;
    /**
     * 是否可排序,默认为false，对应表格中的排序功能
     */
    sortable?: boolean;
    /**
     * 是否可过滤,默认为false，对应表格中的过滤功能，一般用于下拉过滤
     */
    filterable?: boolean;
    filterOptions?: DataGridFieldFilterOption[]
    /**
     * 是否可搜索,默认为false，对应表格中的搜索功能
     */
    searchable?: boolean;
}

/**
 * 表格字段过滤选项
 */
export type DataGridFieldFilterOption = {
    label: string;
    value: string;
}