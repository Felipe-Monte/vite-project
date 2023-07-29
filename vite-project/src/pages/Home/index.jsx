import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketsnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title='Todos' $isactive /></li>
        <li><ButtonText title='Frontend' /></li>
        <li><ButtonText title='Node' /></li>
        <li><ButtonText title='React' /></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo titulo' icon={FiSearch} />
      </Search>

      <Content>
        <Section title='Minhas notas'>
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'Nodejs' },
              { id: '2', name: 'React' }
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}