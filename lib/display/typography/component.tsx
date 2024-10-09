import styled from "@emotion/styled";

const header_font_weight = 500;

const header_base_font_size = 1.5;

const buildHeader = (size: number) => {
    return [
        styled.div`
            font-size: ${size * header_base_font_size}rem;
            font-weight: ${header_font_weight};
        `, styled.div`
            font-size: ${size * header_base_font_size}rem;
            font-weight: ${header_font_weight};
            display: inline;
        `
    ]
}

export const [TypoH1, TypoH1Inline] = buildHeader(6)

export const [TypoH2, TypoH2Inline] = buildHeader(5)

export const [TypoH3, TypoH3Inline] = buildHeader(4)

export const [TypoH4, TypoH4Inline] = buildHeader(3)

export const [TypoH5, TypoH5Inline] = buildHeader(2)

export const [TypoH6, TypoH6Inline] = buildHeader(1)