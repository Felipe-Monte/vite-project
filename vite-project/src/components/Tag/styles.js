import styled from 'styled-components'

export const Container = styled.span`
  margin-right: 6px;
  border-radius: 5px;
  
  padding: 5px 14px;

  font-size: 12px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

`