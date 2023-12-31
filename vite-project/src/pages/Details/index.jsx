import { useState, useEffect } from 'react'
import { Container, Links, Content } from './styles'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { useNavigate } from 'react-router-dom'

import { api } from '../../../../estudos node/src/services/api'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNotes()
  }, [])

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente deletar ?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }


  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText
              title='Excluir nota'
              onClick={handleRemove}
            />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title='Links úteis'>
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target='_blank'>
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title='Marcadores'>
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }

            <Button
              title='Voltar'
              onClick={handleBack}
            />
          </Content>
        </main>
      }
    </Container>
  )
}