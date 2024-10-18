import {
    Container,
    Aside
} from "../lib";

import {TreeMenuTest} from "./test/TreeMenuTest.tsx";
import {MainHeaderTest} from "./test/MainHeaderTest.tsx";
import {DataGridTest} from "./test/DataGridTest.tsx";
import {useEffect, useRef} from "react";


export const App = () => {
    const asideRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (asideRef.current) {
            console.log(asideRef.current)
        }
    }, []);
    return (
        <Container flex={"column"} spacing={5}>
            <MainHeaderTest/>
            <Aside layout refs={asideRef}>
                <TreeMenuTest/>
                <DataGridTest/>
            </Aside>
        </Container>
    )
}