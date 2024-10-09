import {
    Container,
    LayoutAside
} from "../lib";

import {TreeMenuTest} from "./test/TreeMenuTest.tsx";
import {MainHeaderTest} from "./test/MainHeaderTest.tsx";
// import {DataGridTest} from "./test/DataGridTest.tsx";
import {ButtonTest} from "./test/ButtonTest.tsx";


export const App = () => {
    return (
        <Container flex={"column"} spacing={3}>
            <MainHeaderTest/>
            <LayoutAside flex={"row"}>
                <TreeMenuTest/>
                <ButtonTest />
                {/*<DataGridTest/>*/}
            </LayoutAside>
        </Container>
    )
}