import { useState } from 'react'
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'

import { useAuth } from '../../hooks/auth'

import { api } from '../../../../estudos node/src/services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

  }

  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id='avatar'
              type='file'
              onChange={handleChangeAvatar}
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

        <Button title='Salvar' onClick={handleUpdate} />
      </Form>
    </Container>
  )
}