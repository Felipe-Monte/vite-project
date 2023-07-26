import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;

  margin-top: 16px;
  padding: 0 16px;

  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 10px;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`