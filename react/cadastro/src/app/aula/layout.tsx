export default function LayoutPadrao({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <h1 className='verde'>Titulo 1 - Dentro de Aula</h1>
         {children}
         <h6 className='verde'>Rodapé - Dentro de Aula</h6>
      </>
   )
}