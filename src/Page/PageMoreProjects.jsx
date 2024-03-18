import styles from './PageMoreProjects.module.scss'
import { Link } from 'react-router-dom'

import calendario from '../Images/imgProjects/fotoCalendar.png'
import teclado from '../Images/imgProjects/teclado.png'
import hoFame from '../Images/imgProjects/fotoFame.png'
import cronometro from '../Images/imgProjects/cronometro.png'
import muitaMelodia from '../Images/imgProjects/fotoMuitaM.png'
import calculadora from '../Images/imgProjects/calculadora.png'

import { FaHome, FaArrowUp  } from "react-icons/fa";

const PageMoreProjects = () => {
  const images = [
    {
      name: 'Calendário',
      src: calendario,
      alt: 'Projeto Calendário',
      link: 'https://projeto-calendario-melhorado.vercel.app/',
      description: 'Simplicidade é a essência do meu calendário. Organize seus dias de forma fácil e eficaz. Uma ferramenta intuitiva para planejar eventos, sem complicações. Ganhe tempo e mantenha-se em dia com sua rotina.'
    },
    {
      name: 'Teclado',
      src: teclado,
      alt: 'Projeto Teclado',
      link: 'https://keyboard-em-javascript.vercel.app/',
      description: 'Minha aplicação de teclado permite aos usuários digitar usando o mouse ou o teclado físico, proporcionando flexibilidade e acessibilidade na entrada de texto.'
    },
    {
      name: 'Ho Fame (Comidas Italianas)',
      src: hoFame,
      alt: 'Projeto Ho Fame ',
      link: 'https://hofame.vercel.app/',
      description: 'Desfrute da autêntica culinária italiana no HoFame! Descubra receitas deliciosas, desde doces irresistíveis até pratos salgados que capturam a essência da Itália. Uma experiência gastronômica única à sua mesa.'
    },
    {
      name: 'Cronômetro',
      src: cronometro,
      alt: 'Projeto Cronômetro',
      link: 'https://cronometro-legal.vercel.app/',
      description: 'Minha aplicação de cronômetro oferece funções básicas - iniciar, parar e reiniciar - em um design simples e intuitivo. É uma ferramenta confiável para contagem de tempo precisa em diversas situações.'
    },
    {
      name: 'Loja Muita Melodia',
      src: muitaMelodia,
      alt: 'Projeto Loja Muita Melodia',
      link: 'https://muita-melodia.vercel.app/',
      description: 'Mergulhe no mundo da MuitaMelodia! Descubra uma variedade encantadora de guitarras e pedais. Encontre o som perfeito para sua música, explorando opções emocionantes e inspiradoras.'
    },
    {
      name: 'Calculadora',
      src: calculadora,
      alt: 'Projeto Calculadora',
      link: 'https://calculadora-legal-nine.vercel.app/',
      description: 'Minha aplicação de calculadora oferece operações básicas - adição, subtração, multiplicação e divisão - em uma interface simples e fácil de usar. É uma ferramenta eficiente para cálculos rápidos e precisos em qualquer situação.'
    },
  ]


  return (
    <div>
      <header id='topPage' className={styles.header}>
        <h1><span className={styles.destaque}>Mais</span> Projetos</h1>
      </header>

      <nav className={styles.navbar}>
        <Link to='/'><FaHome /><p>Voltar</p></Link>
        <a href="#topPage"><FaArrowUp /><p>Top</p></a>
      </nav>

      <section className={styles.containerProjects}>
        {images.map(({ name, src, alt, link, description }) => (
          <Link key={alt} to={link} target='_blank'>
            <div className={styles.name}>
              <h2>{name}</h2>
            </div>
            <div className={styles.containe}>
              <img src={src} alt={alt} />
              <p>{description}</p>
            </div>
            <div className={styles.seeMore}>Clique para ver Mais</div>
          </Link>
        ))}
      </section>

    </div>
  )
}

export default PageMoreProjects
