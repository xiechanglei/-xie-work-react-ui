import React, {FC, useEffect, useState} from "react";
import {DataGridFooterProps} from "./component.type";
import {Button, Input} from "../../input";

/**
 * 表格底部组件
 */
export const DataGridFooter: FC<DataGridFooterProps> = ({result, pagination, onPageChange}) => {
    const [pageSize, setPageSize] = useState<number>(13);

    const changePageSize = (newPageSize: number) => {
        setPageSize(newPageSize);
    }


    useEffect(() => onPageChange(1, pageSize), [pageSize]);
    return <div className={"data-grid-foot"}>
        {result &&
            <DataGridFooterPageStatics total={result.total} pagination={pagination} page={result.page}
                                       pageSize={result.pageSize}/>}


        {pagination && <DataGridFooterPageSize pageSize={pageSize} changePageSize={changePageSize}/>}

        {result && pagination &&
            <DataGridFooterPageButtons page={result.page} total={result.total} pageSize={result.pageSize}
                                       onChange={(page) => onPageChange(page, pageSize)}/>}

    </div>
}

const defaultPageSize = 20;
const DataGridFooterPageSize: FC<{ pageSize: number, changePageSize: (p: number) => void }> = (props) => {
    const [pageSize, setPageSize] = useState<string | number>(props.pageSize);
    const changePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        const format = parseInt(event.currentTarget.value);
        if (isNaN(format)) {
            setPageSize("")
        } else {
            setPageSize(format);
        }
    }

    const submitPageSize = () => {
        let format = parseInt(pageSize as string);
        if (isNaN(format) || format <= 0) {
            format = defaultPageSize;
        }
        props.changePageSize(format);
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.currentTarget.blur();
        }
    }
    return <div className={"data-grid-foot-statics"}>每页<Input value={pageSize} onChange={changePageSize}
                                                                onBlur={submitPageSize} onKeyDown={onKeyDown}/>条</div>
}

/**
 * 当前页码信息
 * @param props
 * @constructor
 */
const DataGridFooterPageStatics: FC<{
    page: number,
    total: number
    pageSize: number,
    pagination: boolean
}> = (props) => {
    const {page, pageSize, total, pagination} = props;
    if (!pagination) {
        return <div className={"data-grid-foot-statics"}>总共{total}条</div>
    } else {
        const start = page * pageSize - pageSize + 1;
        const end = page * pageSize;
        return <div className={"data-grid-foot-statics"}>第{start}-{end}条 / 总共{total}条</div>
    }

}

/**
 * 分页按钮
 * @param props
 * @constructor
 */
const DataGridFooterPageButtons: FC<{
    page: number,
    pageSize: number,
    total: number,
    onChange: (page: number) => void
}> = (props) => {

    const {page, pageSize, total, onChange} = props;
    const totalPage = Math.ceil(total / pageSize);
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }

    const changePage = (p: number) => {
        if (p > 0 && p <= totalPage && p !== page) {
            onChange(p);
        }
    }
    return <div className={"data-grid-page-buttons"}>
        {pages.map((p) => <Button mode={page === p ? "filled" : "soft"} key={p}
                                  style={{fontWeight: "bold"}}
                                  onClick={() => changePage(p)}>{p}</Button>)}
    </div>
}