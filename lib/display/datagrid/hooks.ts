import {DataGridRecord, DataGridRecordInfo, DataGridSearchParams} from "./data.type"
import {useState} from "react";
import {usePending} from "../../global/react.hooks";
import {DataGridProps} from "./component.type";

/**
 * 获取本地数据
 * @param data
 * @param query
 */
const buildDataFromData = (data: DataGridRecord[], query: DataGridSearchParams) => {
    const {pagination, page, pageSize} = query;
    if (pagination) {
        return {
            data: data.slice((page - 1) * pageSize, page * pageSize),
            total: data.length,
            page: page,
            pageSize: pageSize
        }
    } else {
        return {
            data: data,
            total: data.length,
            page: 1,
            pageSize: data.length
        }
    }
}

/**
 * 获取远程的数据
 */
const buildDataFromLoader = async (loader: () => Promise<DataGridRecordInfo>, query: DataGridSearchParams) => {
    // const {pagination, page, pageSize} = query;
    console.log(query)
    return await loader();
}

/**
 * 处理props的数据加载逻辑，隔离data与loader的差异性，并且默认在组件挂载的时候加载数据
 */
export const useDataGriData = (props: DataGridProps) => {
    const {isPending, withPending} = usePending();
    // result 为undefined表示数据还未加载
    const [result, setResult] = useState<DataGridRecordInfo | undefined>(undefined);
    const loadResult = withPending(async (query: DataGridSearchParams) => {
        if (props.data) {
            setResult(buildDataFromData(props.data, query));
        } else if (props.loader) {
            setResult(await buildDataFromLoader(props.loader, query));
        }
    })
    /**
     * 当data或者loader变化的时候，重新加载数据
     */
    return {result, loadResult, isPending}
}
