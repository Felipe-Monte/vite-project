import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;


  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 0 124px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 0px auto;

  > div:nth-child(3) {
    margin-bottom: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  
  margin: -90px auto 32px;

  border-radius: 50%;

  > img {
    width: 100%;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: 7px;
    bottom: 7px;

    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px; 
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`