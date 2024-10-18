import {Button, Aside, DataGrid, DataGridFieldInfo, DataGridRecord} from "../../lib";
import {useState} from "react";
import {randomArrayElement, randomNumber, randomNumberString, randomPhone} from "../utils/random";
import {randomEnglishName} from "../utils/random.name";
import {randomAddress} from "../utils/random.address";


const fields: DataGridFieldInfo[] = [
    {
        label: "ID",
        key: "id",
    }, {
        label: "Username",
        key: "name",
    }, {
        label: "Age",
        key: "age",
    }, {
        label: "Sex",
        key: "sex"
    }, {
        label: "Address",
        key: "address"
    }, {
        label: "Telephone",
        key: "phone"
    }
];

const data: DataGridRecord[] = [];
const max = 200;

for (let i = 0; i < max; i++) {
    data.push({
        id: randomNumberString(5),
        name: randomEnglishName(),
        age: randomNumber(10, 50),
        address: randomAddress(),
        phone: randomPhone(),
        sex: randomArrayElement("Male", "Female")
    })
}
const loader = async () => {
    return {
        data,
        total: data.length,
        page: 1,
        pageSize: 10
    }
}

export const DataGridTest = () => {
    const [count, setCount] = useState(10)
    const addCount = () => {
        setCount(count + 1)
    }
    return <Aside block>
        <div>
            <Button onClick={addCount}>click me,{count}</Button>
        </div>
        <DataGrid fields={fields} data={data} loader={loader}/>
    </Aside>
}