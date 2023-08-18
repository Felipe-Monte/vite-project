
import { Container } from "./styles";

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}

/* CODIGO COM ERRO ESTUDAR O MOTIVO - ONCLICK NÃO FUNCIONAVA NO CONSOLE */
// import { Container } from './styles'

// export function Button({ title, loading }) {
//   return (
//     <Container
//       type='button'
//       disabled={loading}
//     >

//       {loading ? 'Carregando...' : title}
//     </Container>
//   )
// }