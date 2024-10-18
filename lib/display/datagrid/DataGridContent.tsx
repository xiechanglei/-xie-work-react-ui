import {DataGridContentProps} from "./component.type";
import {FC, ReactNode} from "react";

/**
 * 表格数据组件
 */
export const DataGridContent: FC<DataGridContentProps> = ({result, fields}) => {
    return <tbody>
    {result && result.data.map((row, index) => <tr key={index}>
        {fields.map(field => <td key={field.key + index}>{row[field.key] as ReactNode}</td>)}
    </tr>)}
    </tbody>
}
