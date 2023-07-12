'use client'
import { Heading, Text, MultiStep, TextInput, Button } from '@ignite-ui/react'
import { Container, Form, Header } from "./styles";
import { ArrowRight } from 'phosphor-react';

export default function Register() {
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

      <Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput prefix="Gr_call.com" placeholder="seu-usuario" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="seu nome" />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}