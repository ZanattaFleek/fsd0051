interface PropsInterface {
   valor: number
}

export default function DisplayCalculadora({ valor }: PropsInterface) {
   return (
      <>
         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resultado"
            type="text"
            value={valor}
            disabled
         />
      </>
   )
}