import {DataGridFieldInfo, DataGridRecord, DataGridRecordInfo} from "./data.type";

/**
 * 表格组件属性
 */
export type DataGridProps = {
    /**
     * 表格字段信息列表,todo 可以不设置，不设置直接使用数据的字段信息进行渲染
     */
    fields: DataGridFieldInfo[]

    /**
     * 是否分页，默认为false
     */
    pagination?: boolean

    /**
     * 加载数据的函数，如果loader变化的话，会重新加载数据
     * 所以要么loader是一个稳定的函数（顶级变量），要么loader是一个useCallback返回的函数，
     * 如果loader是 函数组件内部的函数，那么每次组件更新，loader都会变化，导致重新加载数据，据说再最新的react版本中已经优化了这个问题，拭目以待
     */
    loader?: () => Promise<DataGridRecordInfo>

    /**
     * 静态数据,当静态数据存在时，loader属性无效
     */
    data?: DataGridRecord[]
}

/**
 * 表格头部属性
 */
export type DataGridHeaderProps = {
    /**
     * 表格字段信息列表
     */
    fields: DataGridFieldInfo[]
}

/**
 * 表格内容属性
 */
export type DataGridContentProps = {
    /**
     * 数据记录
     */
    result?: DataGridRecordInfo,
    /**
     * 表格字段信息列表
     */
    fields: DataGridFieldInfo[]
}


/**
 * 表格底部组件属性
 */
export type DataGridFooterProps = {
    /**
     * 数据记录
     */
    result?: DataGridRecordInfo
    /**
     * 是否分页，由父组件传递过来
     */
    pagination: boolean

    /**
     * onPageChange
     */
    onPageChange: (page: number, pageSize: number) => void
}