import { useState } from 'react'
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'

import { useAuth } from '../../hooks/auth' 

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  return (
    <Container> 
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Felipe-Monte.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id='avatar'
              type='file'
            />

          </label>
        </Avatar>

        <Input
          icon={FiUser}
          placeholder='nome'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          placeholder='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder='senha atual'
          type='password'
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder='nova  senha'
          type='password'
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title='Salvar' />
      </Form>
    </Container>
  )
}