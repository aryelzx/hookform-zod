import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import * as S from './styles';

const createUserFormSchema = z.object({
    email: z.string()
        .nonempty('Campo obrigatório')
        .email('Formato de e-mail inválido')
    ,
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres.')
})

function Form() {
    const [output, setOutput] = useState('')
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(createUserFormSchema)
    })

    const createUser = (data: any) =>{
        setOutput(JSON.stringify(data, null, 2))
    }

//High-order function - passando uma função para dentro de outra função
  return (
    <>
        <S.Container>
            <S.Form onSubmit={handleSubmit(createUser)}>
                <S.Title>
                    Formulário Teste
                </S.Title>
                <S.InputContainer>
                        <S.Input
                            type='email'
                            placeholder="E-mail"
                            {...register('email', {})}    
                        >

                        </S.Input>
                </S.InputContainer>
                <S.InputContainer>
                        <S.Input
                            type='password'
                            placeholder="Senha"
                            {...register('password', {required: true, minLength: 8})}
                        >

                        </S.Input>
                </S.InputContainer>
                <S.Button type='submit'>
                    Enviar
                </S.Button>
                <S.Pre>
                    {output}
                </S.Pre>
            </S.Form>
         </S.Container>
    </>
  )
}

export default Form