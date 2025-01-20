'use client'

interface PropsInterface {
   params: Promise<{ nomeAluno: string }>
}

export default async function nome({ params }: PropsInterface) {

   const nome = (await params).nomeAluno

   return (
      <>
         <p>O Nome Fornecido é: {nome}</p>
      </>
   )
}