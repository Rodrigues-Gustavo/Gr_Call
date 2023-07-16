import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotation } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.'
    })
    .transform((username) => username.toLowerCase()),
})

type claimusernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameform() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<claimusernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  const router = useRouter()

  // async function handleClaimUsername(data: claimusernameFormData) {
  //   const { username } = data

  //   await router.push(`/register?username=${username}`)
  // }


  async function handleClaimUsername(data: claimusernameFormData) {
    const { username } = data
    console.log(username)

    // await router.push(`/register?${username}`)
    await router.push(`/register?username=${username}`)

    // console.log(router.push(`/register?${username}`))
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="Gr_call.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Digite o nome do usuário desejado.'}
        </Text>
      </FormAnnotation>
    </>
  )
}
