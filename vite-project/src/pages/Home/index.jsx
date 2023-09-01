import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'

import { api } from '../../../../estudos node/src/services/api'

export function Home() {
  const [tags, setTags] = useState([])



  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>Rocketsnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title='Todos'
            $isactive
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
              />
            </li>
          ))
        }
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

      <NewNote to='/new'>
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}