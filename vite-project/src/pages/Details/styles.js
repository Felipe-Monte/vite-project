import styled from 'styled-components'

export const Container = styled.div`
  display: grid; /* Usando formato grid no layout */
  grid-template-rows: 105px auto; /* Definindo 2 linhas no grid 105px e auto*/
  grid-template-areas: 
    "header"
    "content"
  ; /* Nomeando as duas linhas (header e o layout)*/ 


  width: 100%;
  height: 100vh;
`

