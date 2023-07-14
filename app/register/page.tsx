// 'use client'

import { Heading, Text, MultiStep, TextInput, Button } from '@ignite-ui/react'
import { Container, Form, FormError, Header } from "./styles"
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.'
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' })
})

type RegisterformData = z.infer<typeof registerFormSchema>

export default function Register() {
  const { 
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting } 
  } = useForm<RegisterformData>({
    resolver: zodResolver(registerFormSchema)
  })

  const router = useRouter()
  // const pathname = usePathname()
  // const searchParams = useSearchParams()

  console.log(router)
  // console.log(pathname)
  // console.log(searchParams)
 

  // useEffect(() => {
  //   if (router.query.username) {
  //     setValue('username', String(router.query.username))
  //   }
  // }, [router.query?.username, setValue])

  // useEffect(() => {
  //   if (pathname.) {
  //     setValue('username', String(pathname))
  //   }
  // })

  async function handleRegister(data: RegisterformData) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-Vindo ao Gr Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você
          pode editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            prefix="Gr_call.com"
            placeholder="seu-usuario"
            {...register('username')}
          />

          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput
            placeholder="seu nome"
            {...register('name')}
          />

          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}