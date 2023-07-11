import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameform() {
  return (
    <Form as="form">
      <TextInput 
        size="sm" 
        prefix="Gr_call.com/" 
        placeholder="seu-usuário" 
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
