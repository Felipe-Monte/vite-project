import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  margin-bottom: 16px;
  padding: 22px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  border: none;

  > h1 {
    flex: 1; /* Ocupa o máximo de espaço que tem pra ele */
    text-align: left;
    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;

    display: flex;
    margin-top: 24px;
  }
` 