import styled from 'styled-components/native';

export const IconArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
`;
