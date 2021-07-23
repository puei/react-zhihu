import styled from "@emotion/styled";
import { THEME } from "../../constants/theme";
import { boxShadow } from "../../utils/cssHelper";

export const ContentContainer = styled.div`
    background:${THEME.colors.white[100]};
    border-radius:2px;
    box-shadow:${boxShadow.card}
`