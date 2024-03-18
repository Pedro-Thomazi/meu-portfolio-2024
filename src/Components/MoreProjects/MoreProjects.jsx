import { useEffect, useState } from 'react'
import styles from './MoreProjects.module.scss'

import { FaArrowsLeftRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import amazon from '../../Images/imgProjects/replicaAmazom.png'
import apiPokemon from '../../Images/imgProjects/fotoPokeM.png'
import crudEmJavascript from '../../Images/imgProjects/crudJavascript.png'

const images = [
  {
    name: 'Réplica Amazon',
    src: amazon,
    alt: 'Projeto Réplica Amazon',
    link: 'https://replica-amazon.vercel.app/',
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
  }
]

const MoreProjects = () => {
  const [scrolled, setScrolled] = useState(false)

  console.log('Altura: ' + window.innerHeight)


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

      <Link className={styles.linkMoreProjects} to='/moreprojects'>Ver Todo os Projetos</Link>
    </main>
  )
}

export default MoreProjects