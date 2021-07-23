import styled from "@emotion/styled";
import { darken } from "polished";
import { THEME } from "../../../constants/theme";

export const ContentContainer = styled.div`
    padding:10px 0;
    background:${THEME.colors.white[100]};
    border-radius:2px;
    box-shadow:${THEME.boxShadow.card};
`

export const Tab = styled.nav`
    padding:14px;
    font-size:${THEME.fontSize.headline};
    border-bottom:${THEME.border.divider};
`

export const TabItem = styled.a`
    margin: 0 15px;
    color:currentColor;
    text-decoration:none;
    &[aria-current=page] {
        color:${THEME.colors.primary};
        font-weight:bold;
    }
`

export const ContentItem = styled.div`
    padding:20px;
    border-bottom:${THEME.border.divider};
    &:nth-last-of-type(1){
        border-bottom:none;
    }
`

export const ContentTitle = styled.h3`
    margin-bottom:13px;
    font-size:${THEME.fontSize.title};
    cursor:pointer;
    &:hover{
        color:${darken(.2,THEME.colors.primary)};
    }
`

export const ContentText = styled.p`
    font-size:${THEME.fontSize.body};
`
