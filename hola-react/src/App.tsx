import {Saludo} from "./Saludo"
import { TarjetaPerfil } from "./TarjetaPerfil"

export default function App(){
  return(
    <main className="pagina">
      <Saludo nombre="Rodrigo"></Saludo>
      <section className="equipo">
        <TarjetaPerfil nombre="Rodrigo Villegas" carrera="ingenieria en software" semestre={5}></TarjetaPerfil>
        <TarjetaPerfil nombre="Jesus Arguelles" carrera="ingenieria en software" semestre={6}></TarjetaPerfil>
        <TarjetaPerfil nombre="Daniel Buelna" carrera="ingenieria en software" semestre={7}></TarjetaPerfil>
      </section>
    </main>
  )
}