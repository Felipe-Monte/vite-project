import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
        </a>
      </header>

      <Avatar>

      </Avatar>

      <Form>
        <Input icon={FiUser} placeholder='nome' type='text' />
        <Input icon={FiMail} placeholder='email' type='email' />

        <Input icon={FiLock} placeholder='senha' type='password' />
        <Input icon={FiLock} placeholder='senha' type='password' />

        <Button title='Salvar' />
      </Form>
    </Container>
  )
}