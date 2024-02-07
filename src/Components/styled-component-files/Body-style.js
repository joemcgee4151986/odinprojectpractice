import styled from "styled-components";
import cheesepizza from '../../../src/assets/cheesepizza.JPG';

export const Paragraphcolumn = styled.p `
column-count: 2;
`
export const Pizza = styled('img') `
background-image: url(${cheesepizza});
max-width: 100px;
max-height: 100px;
`