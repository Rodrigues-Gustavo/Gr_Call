import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type claimusernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameform() {
  const { register, handleSubmit } = useForm<claimusernameFormData>()

  async function handleClaimUsername(data: claimusernameFormData) {
    console.log(data.username)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput 
        size="sm" 
        prefix="Gr_call.com/" 
        placeholder="seu-usuário"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
