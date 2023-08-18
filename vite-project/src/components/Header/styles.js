import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header; /* Fixando cabecalho */

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;

  width: 100%;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Logout = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`