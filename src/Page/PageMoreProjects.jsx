import styles from './PageMoreProjects.module.scss'
import { Link } from 'react-router-dom'

import calendario from '../Images/imgProjects/fotoCalendar.png'
import teclado from '../Images/imgProjects/teclado.png'
import hoFame from '../Images/imgProjects/fotoFame.png'
import cronometro from '../Images/imgProjects/cronometro.png'
import muitaMelodia from '../Images/imgProjects/fotoMuitaM.png'
import calculadora from '../Images/imgProjects/calculadora.png'

const PageMoreProjects = () => {
  const images = [
    {
      name: 'Calendário',
      src: calendario,
      alt: 'Projeto Calendário',
      link: 'https://projeto-calendario-melhorado.vercel.app/',
      description: ''
    },
    {
      name: 'Teclado',
      src: teclado,
      alt: 'Projeto Teclado',
      link: 'https://keyboard-em-javascript.vercel.app/',
      description: ''
    },
    {
      name: 'Ho Fame (Comidas Italianas)',
      src: hoFame,
      alt: 'Projeto Ho Fame ',
      link: 'https://hofame.vercel.app/',
      description: ''
    },
    {
      name: 'Cronômetro',
      src: cronometro,
      alt: 'Projeto Cronômetro',
      link: 'https://cronometro-legal.vercel.app/',
      description: ''
    },
    {
      name: 'Loja Muita Melodia',
      src: muitaMelodia,
      alt: 'Projeto Loja Muita Melodia',
      link: 'https://muita-melodia.vercel.app/',
      description: ''
    },
    {
      name: 'Calculadora',
      src: calculadora,
      alt: 'Projeto Calculadora',
      link: 'https://calculadora-legal-nine.vercel.app/',
      description: ''
    },
  ]


  return (
    <div>
      <header className={styles.header}>
        <h1>Mais Projetos</h1>
        <nav className={styles.navbar}>
          <Link to='/'>Voltar</Link>
        </nav>
      </header>

      <section className={styles.containerProjects}>
        {images.map(({ name, src, alt, link }) => (
          <Link key={alt} to={link} target='_blank'>
            <div className={styles.name}>
              <h2>{name}</h2>
            </div>
            <img src={src} alt={alt} />
            <div className={styles.seeMore}>Clique para ver Mais</div>
          </Link>
        ))}
      </section>

    </div>
  )
}

export default PageMoreProjects
