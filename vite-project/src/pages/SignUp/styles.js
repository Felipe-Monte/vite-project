import styled from 'styled-components'

import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 48px;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
    font-weight: 400;
  }

  > h2 {
    margin: 48px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 500;
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`

