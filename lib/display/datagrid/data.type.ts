/**
 * 表格数据
 */
export type DataGridRecordInfo = {
    /**
     * 数据记录
     */
    data: DataGridRecord[],

    /**
     * 总记录数,当处于分页模式时，需要设置total属性
     */
    total: number

    /**
     * 当前页码,当处于分页模式时，需要设置page属性，page从1开始，表示第一页
     */
    page: number

    /**
     * 每页记录数,当处于分页模式时，需要设置pageSize属性
     */
    pageSize: number

}

/**
 * 查询信息
 */
export type DataGridSearchParams = {
    /**
     * 是否分页
     */
    pagination: boolean,

    /**
     * 当前页码
     */
    page: number,

    /**
     * 每页记录数
     */
    pageSize: number,

}


/**
 * 表格字段信息
 */
export type DataGridFieldInfo = {
    /**
     * 字段名称，对应数据中的字段名称
     */
    key: string;

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


/**
 * 数据记录
 */
export type DataGridRecord = {
    [key: string]: unknown
}