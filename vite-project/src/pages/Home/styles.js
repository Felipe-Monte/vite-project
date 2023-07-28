import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content"
  ;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  padding-top: 64px;

  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Search = styled.div`
  grid-area: search;
  
`

export const Content = styled.div`
  grid-area: content;
  
`

export const NewNote = styled.button`
  grid-area: newnote;
  background-color: yellow;
`