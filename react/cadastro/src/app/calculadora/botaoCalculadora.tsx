'use client'

interface PropsInterface {
   numero: number
   clicarNumero: (numero: number) => void
}

export default function BotaoCalculadora({ numero, clicarNumero }: PropsInterface) {

   return (
      <>
         <button onClick={() => clicarNumero(numero)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {numero}
         </button>
      </>
   )
}