export default function LayoutPadrao({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <h1 className='verde'>Titulo 1</h1>
         <h2 className='verde'>Titulo 2</h2>
         {children}
         <p className='verde'>Conteúdo de Layout Dentro do app / aula / zanatta</p>
         <h6 className='verde'>Rodapé</h6>
      </>
   )
}