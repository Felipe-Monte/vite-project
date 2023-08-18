import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { Container, Form, Avatar } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
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

        <Input icon={FiUser} placeholder='nome' type='text' />
        <Input icon={FiMail} placeholder='email' type='email' />

        <Input icon={FiLock} placeholder='senha' type='password' />
        <Input icon={FiLock} placeholder='senha' type='password' />

        <Button title='Salvar' />
      </Form>
    </Container>
  )
}