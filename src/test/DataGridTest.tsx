import {ContentAside, DataGrid, DataGridFieldInfo} from "../../lib";


const fields: DataGridFieldInfo[] = [
    {
        label: "编号",
        name: "id",
    }
];

const loader = async () => {
    return {
        data: [{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }]
    }
}
export const DataGridTest = () => {
    return <ContentAside>
        <DataGrid fields={fields} loader={loader}/>
    </ContentAside>
}