import {uiClassName} from "../../global/components";
import styled from "@emotion/styled";
import {ThemeConfig} from "../../theme";

export const DataGridClassName = uiClassName("data-grid")

export const DataGridWrapper = styled.div<{ theme: ThemeConfig }>`
    width: 100%;
    font-size: 1.4rem;
    color: ${props => props.theme.text};


    table {
        table-layout: auto;
        border-collapse: collapse;
        border-spacing: 0;

        border-radius: ${props => props.theme.borderRadius};
        overflow: hidden;
    }

    table, thead, tbody, tr, .data-grid-foot {
        width: 100%;
    }


    th, td {
        padding: 0.8em;
        text-align: left;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    tr {
        transition: background-color 0.3s;
    }

    thead tr {
        background-color: ${props => props.theme.primary + "44"} !important;
    }


    tr:nth-of-type(2n) {
        background-color: ${props => props.theme.primary + "11"};
    }

    tr:nth-of-type(2n+1) {
        background-color: ${props => props.theme.primary + "00"};
    }

    tbody tr:hover {
        background-color: ${props => props.theme.primary + "33"};
    }


    .data-grid-foot {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        padding: 0.4em;
        box-sizing: border-box;
    }

    .data-grid-page-buttons button:not(:last-child) {
        margin-right: 0.3em;
    }

    .data-grid-foot-statics {
        color: ${props => props.theme.subText};
        margin-right: 0.3em;
    }
`