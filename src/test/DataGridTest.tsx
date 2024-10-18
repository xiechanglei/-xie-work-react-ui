import {Button, Aside, DataGrid, DataGridFieldInfo, DataGridRecord, Input, Flex} from "../../lib";
import {randomArrayElement, randomNumber, randomNumberString, randomPhone} from "../utils/random";
import {randomEnglishName} from "../utils/random.name";
import {randomAddress} from "../utils/random.address";
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EditIcon from '@mui/icons-material/Edit';

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
    return <Aside block>
        <Flex spacing={10}>
            <Button mode={"soft"} kind="success" icon={<ChromeReaderModeIcon/>}></Button>
            <Button mode={"soft"} kind="secondary" icon={<EditIcon/>}></Button>
            <Button mode={"soft"} kind="secondary" icon={<LocalOfferIcon/>}></Button>
            <Input kind={"success"} mode={"outline"} placeholder={"input some word"} />
        </Flex>
        <DataGrid fields={fields} data={data} loader={loader}/>
    </Aside>
}