export default function LayoutPadrao({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <h1 className='verde'>Titulo 1 - Dentro de Zanatta que está dentro de Aula</h1>
         {children}
         <h6 className='verde'>Rodapé - Dentro de Zanatta que está dentro de Aula</h6>
      </>
   )
}