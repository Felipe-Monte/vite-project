import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  margin-bottom: 8px;

  padding-right: 16px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;

  > input {
    height: 50px;
    width: 100%;
    padding: 12px;
    border: none;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    border: none;
    background: none;
  }

  .on-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .on-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`