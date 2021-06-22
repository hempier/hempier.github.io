import styled from 'styled-components';

export const StyledNavigation = styled.div`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
`