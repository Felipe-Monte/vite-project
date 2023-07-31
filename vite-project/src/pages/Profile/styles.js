import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;


  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    padding: 64px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


    svg {
      font-size: 28px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 100px auto;
`

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  margin: -80px auto;

  border: 1px solid blue;
  border-radius: 50%;
`