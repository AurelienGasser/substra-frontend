import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {spacingNormal} from '../../../../../../../assets/css/variables/spacing';

export const section = css`
    margin: ${spacingNormal};
`;

const Section = styled('div')`
    ${section};
`;

export default Section;
