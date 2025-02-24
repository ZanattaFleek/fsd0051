'use client'

import { useState } from "react";
import BotaoCalculadora from "./botaoCalculadora";
import DisplayCalculadora from "./displayCalculadora";

export default function Calculadora() {

   const [acumulador, setAcumulador] = useState(0)

   const clicarNumero = (numero: number) => {

      if (acumulador === 0) {
         setAcumulador(numero)
      } else {
         setAcumulador(acumulador * 10 + numero)
      }

   }

   return (
      <>
         <BotaoCalculadora numero={1} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={2} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={3} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={4} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={5} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={6} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={7} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={8} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={9} clicarNumero={clicarNumero} />
         <BotaoCalculadora numero={0} clicarNumero={clicarNumero} />
         <DisplayCalculadora valor={acumulador} />
      </>
   )
}