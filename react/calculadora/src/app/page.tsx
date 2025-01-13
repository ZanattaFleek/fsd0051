import { ClsCalculadora } from "./utils/clsCalculadora"

export default function Home() {

  const clsCalculadora: ClsCalculadora = new ClsCalculadora();

  return (
    <>
      Conteúdo a {clsCalculadora.soma(10, 2)} ser renderizado como HTML {clsCalculadora.soma(10, 2)}
    </>
  )
}
