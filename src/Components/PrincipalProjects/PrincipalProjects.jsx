import { useEffect, useState } from 'react'
import styles from './PrincipalProjects.module.scss'

import { BsTools } from "react-icons/bs";
import { Link } from 'react-router-dom';

import projetoTheBlog from '../../Images/imgProjects/fotoTheblog.png'
import projetoMyGram from '../../Images/imgProjects/fotoMygram.png'
import projetoMovieOnly from '../../Images/imgProjects/fotoMovieOnly.png'

const images = [
  {
    name: 'The Blog',
    date: '2023',
    src: projetoTheBlog,
    alt: 'Projeto The Blog',
    link: 'https://the-blog-tan.vercel.app/',
    description: `TheBlog é a plataforma perfeita para dar vida às suas ideias! Crie um perfil, compartilhe blogs
  inspiradores e participe de conversas significativas por meio de comentários. Explore o mundo das ideias
  na comunidade TheBlog.` },
  {
    name: 'My Gram',
    date: '2023',
    src: projetoMyGram,
    alt: 'Projeto My Gram',
    link: 'https://my-gram-khaki.vercel.app/',
    description: `MyGram é sua nova rede social favorita! Crie um perfil único, compartilhe momentos, interaja com
  comentários e curtidas. Explore a comunidade envolvente e descubra novas conexões. Simples, divertido e
  totalmente seu!` },
  {
    name: 'Movie Only',
    date: '2023',
    src: projetoMovieOnly,
    alt: 'Projeto Movies Only',
    link: 'https://movies-only.vercel.app/',
    description: `Explore o universo cinematográfico no MovieOnly! Encontre filmes de todos os gêneros, de ação a suspense,
  em um só lugar. Sua fonte definitiva para uma variedade envolvente de títulos cinematográficos.` },
]

const PrincipalProjects = () => {
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {

    const mindHeigth = window.innerHeight + 800
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
    <main id={styles.principalsProjects}>
      <span className={`${styles.number} ${scrolled ? styles.show : ''}`}>01</span>
      <header className={styles.header}>
        <h1 className={`${scrolled ? styles.toLeft : ''}`}>Principais</h1>
        <BsTools className={`${scrolled ? styles.show : ''}`} size={50} />
        <h1 className={`${scrolled ? styles.toRight : ''}`}>Projetos</h1>
      </header>
      <div className={styles.details}>
        <p>Experiência</p>
        <span></span>
        <p>Responsividade</p>
        <span></span>
        <p>Evolução</p>
      </div>

      <section id='principalsProjects' className={styles.projects}>
        {images.map(({ name, date, src, alt, link, description }) => (
          <Link key={alt} to={link} target='_blank'>
            <div className={styles.nameAndDate}>
              <h2>{name}</h2>
              <span>{date}</span>
            </div>
            <img src={src} alt={alt} />
            <p>{description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default PrincipalProjects