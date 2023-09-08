'use client'

import { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import emailjs from '@emailjs/browser'

const sendEmailFormSchema = z.object({
  firstName: z.string().nonempty('Campo obrigatório'),
  lastName: z.string().nonempty('Campo obrigatório'),
  email: z
    .string()
    .nonempty('O email é obrigatório!')
    .email('Formato de e-mail inválido!'),
  phoneNumber: z
    .string()
    .nonempty('Campo obrigatório')
    .length(11, 'O número deve conter 11 dígitos'),
  message: z.string().nonempty('Campo obrigatório'),
})

type SendEmailFormData = z.infer<typeof sendEmailFormSchema>

export function EmailForm() {
  const {
    register,
    formState: { errors },
  } = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  function handleSendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_gqb6qdn',
        'template_d1ybjn8',
        event.currentTarget,
        '0N6q_1dhAyJ54gq2u',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )

    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
    setMessage('')
  }

  return (
    <div className="w-card h-info flex flex-col px-2 gap-4 bg-gradient-to-b from-green-350 rounded">
      <h1 className="text-center font-sans text-lg">Mais Informações</h1>

      <p className="text-base">
        Para qualquer informação, dúvida ou comentário, por favor ligue ou mande
        uma mensagem via whatsapp para o número: (84) 9 9908-9824. Ou preencha o
        fomulário:
      </p>

      <form onSubmit={handleSendEmail} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="firstName"
            className="text-start font-sans italic text-base"
          >
            Nome
          </label>
          <input
            type="text"
            {...register('firstName')}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            value={firstName}
            placeholder="Insira seu nome"
            className="block resize-none w-full h-7 rounded bg-green-info border border-green-info text-black px-2 focus:outline-none focus:border-sky-500"
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="lastName"
            className="text-start font-sans italic text-base"
          >
            Sobrenome
          </label>
          <input
            type="text"
            {...register('lastName')}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Insira seu sobrenome"
            className="block resize-none w-full h-7 rounded bg-green-info border border-green-info text-black px-2 focus:outline-none focus:border-sky-500"
          />
          {errors.lastName && (
            <span className="text-red-500 text-xs">
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-start font-sans italic text-base"
          >
            E-mail
          </label>
          <input
            type="email"
            {...register('email')}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Insira seu e-mail"
            className="block resize-none w-full h-7 rounded bg-green-info border border-green-info text-black px-2 peer focus:outline-none focus:border-sky-500"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phoneNumber"
            className="text-start font-sans italic text-base"
          >
            Telefone
          </label>
          <input
            type="tel"
            {...register('phoneNumber')}
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="Insira seu telefone"
            className="block resize-none w-full h-7 rounded bg-green-info border border-green-info text-black px-2 focus:outline-none focus:border-sky-500"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-xs">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-sans italic text-base">
            Deixe-nos uma mensagem
          </label>
          <textarea
            {...register('message')}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Insira uma mensagem"
            className="block resize-none w-full h-44 rounded bg-green-info border border-green-info text-black px-2 focus:outline-none focus:border-sky-500"
          />
          {/* {errors.message && (
            <span className="text-red-500 text-xs">
              {errors.message.message}
            </span>
          )} */}
        </div>

        <button
          type="submit"
          className="bg-green-info w-32 hover:pointer self-center rounded hover:bg-gray-400 hover:text-gray-100"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
