import React, {forwardRef, ForwardRefRenderFunction} from "react";
import {DataGridProps} from "./component.type";
import {DataGridClassName, DataGridWrapper} from "./style";
import {omitProperties, withDefault} from "../../global/object";
import {useTheme} from "../../theme";
import {useDataGriData} from "./hooks";
import {DataGridFooter} from "./DataGridFooter";
import {DataGridContent} from "./DataGridContent";
import {DataGridHeader} from "./DataGridHeader";

/**
 * 表格组件
 * @param props
 * @constructor
 */
const DataGrid_: ForwardRefRenderFunction<HTMLDivElement, DataGridProps & React.HTMLAttributes<HTMLDivElement>> = (props, ref) => {
    const {result, loadResult} = useDataGriData(props)
    const theme = useTheme()
    const pagination = withDefault(props.pagination, true)

    /**
     * 分页变化的时候加载数据
     * @param page
     * @param pageSize
     */
    const onPageChange = (page: number, pageSize: number) => {
        loadResult({pagination, page, pageSize})
    }

    const tableElementProps = omitProperties(props, "fields", "loader", "pagination", "data")
    return <DataGridWrapper {...tableElementProps} className={DataGridClassName} theme={theme} ref={ref}>
        <table>
            <DataGridHeader fields={props.fields}/>
            <DataGridContent fields={props.fields} result={result}/>
        </table>
        <DataGridFooter result={result} pagination={pagination} onPageChange={onPageChange}/>
    </DataGridWrapper>
}

export const DataGrid = forwardRef<HTMLDivElement, DataGridProps & React.HTMLAttributes<HTMLDivElement>>(DataGrid_)