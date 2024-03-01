import { useEffect, useState } from 'react'
import styles from './MoreProjects.module.scss'

import { FaArrowsLeftRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import amazon from '../../Images/imgProjects/replicaAmazom.png'
import calendario from '../../Images/imgProjects/fotoCalendar.png'
import apiPokemon from '../../Images/imgProjects/fotoPokeM.png'
import crudEmJavascript from '../../Images/imgProjects/crudJavascript.png'
import teclado from '../../Images/imgProjects/teclado.png'
import hoFame from '../../Images/imgProjects/fotoFame.png'
import cronometro from '../../Images/imgProjects/cronometro.png'
import muitaMelodia from '../../Images/imgProjects/fotoMuitaM.png'
import calculadora from '../../Images/imgProjects/calculadora.png'

const images = [
  {
    name: 'Réplica Amazon',
    src: amazon,
    alt: 'Projeto Réplica Amazon',
    link: 'https://replica-amazon.vercel.app/',
  },
  {
    name: 'Calendário',
    src: calendario,
    alt: 'Projeto Calendário',
    link: 'https://projeto-calendario-melhorado.vercel.app/',
  },
  {
    name: 'API do Pokemon',
    src: apiPokemon,
    alt: 'Projeto API do Pokemon',
    link: 'https://pokenext-silk-theta.vercel.app/',
  },
  {
    name: 'CRUD de Usuários Em Javascript',
    src: crudEmJavascript,
    alt: 'Projeto CRUD de Usuários',
    link: 'https://crud-em-javascript.vercel.app/',
  },
  {
    name: 'Teclado',
    src: teclado,
    alt: 'Projeto Teclado',
    link: 'https://keyboard-em-javascript.vercel.app/',
  },
  {
    name: 'Ho Fame (Comidas Italianas)',
    src: hoFame,
    alt: 'Projeto Ho Fame ',
    link: 'https://hofame.vercel.app/',
  },
  {
    name: 'Cronômetro',
    src: cronometro,
    alt: 'Projeto Cronômetro',
    link: 'https://cronometro-legal.vercel.app/',
  },
  {
    name: 'Loja Muita Melodia',
    src: muitaMelodia,
    alt: 'Projeto Loja Muita Melodia',
    link: 'https://muita-melodia.vercel.app/',
  },
  {
    name: 'Calculadora',
    src: calculadora,
    alt: 'Projeto Calculadora',
    link: 'https://calculadora-legal-nine.vercel.app/',
  },
]

const MoreProjects = () => {
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {

    const mindHeigth = window.innerHeight + 1600
    function handleScroll() {
      const offset = window.scrollY
      if (offset > mindHeigth) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <main className={styles.moreProjects}>
      <header className={styles.header}>
        <h1 className={`${scrolled ? styles.toLeft : ''}`}>Teoria</h1>
        <FaArrowsLeftRight size={50} />
        <h1 className={`${scrolled ? styles.toRight : ''}`}>Prática</h1>
      </header>
      <div className={styles.details}>
        <p>Testes</p>
        <span></span>
        <p>Ideias</p>
        <span></span>
        <p>Aprendizados</p>
      </div>

      <section className={styles.projects}>
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
    </main>
  )
}

export default MoreProjects