import styled from 'styled-components';

export const StyledNavigation = styled.div`
    display: ${({ open }) => open ? 'flex' : 'none'};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
`