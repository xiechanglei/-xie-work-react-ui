import {FC} from "react";
import {DataGridProps} from "./component.type";
import {DataGridClassName, DataGridWrapper} from "./style";
import {omitProperties, withDefault} from "../../global/object";
import {useTheme} from "../../theme";
import {useDataGriData} from "./hooks";
import {DataGridFooter} from "./DataGridFooter";
import {DataGridContent} from "./DataGridContent";
import {DataGridHeader} from "./DataGridHeader";
import {RH} from "../../global/components";

/**
 * 表格组件
 * @param props
 * @constructor
 */
export const DataGrid: FC<DataGridProps & RH<HTMLDivElement>> = (props) => {
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

    const tableElementProps = omitProperties(props, "fields", "loader", "pagination", "data", "refs")
    return <DataGridWrapper {...tableElementProps} className={DataGridClassName} theme={theme} ref={props.refs}>
        <table>
            <DataGridHeader fields={props.fields}/>
            <DataGridContent fields={props.fields} result={result}/>
        </table>
        <DataGridFooter result={result} pagination={pagination} onPageChange={onPageChange}/>
    </DataGridWrapper>
}