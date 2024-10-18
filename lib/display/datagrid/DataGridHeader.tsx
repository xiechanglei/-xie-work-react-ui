import {DataGridHeaderProps} from "./component.type";
import {FC} from "react";

/**
 * 表格头部组件
 * @constructor
 */
export const DataGridHeader: FC<DataGridHeaderProps> = ({fields}) => {
    return <thead>
    <tr>
        {fields.map(field => <th key={field.key}>{field.label}</th>)}
    </tr>
    </thead>
}

