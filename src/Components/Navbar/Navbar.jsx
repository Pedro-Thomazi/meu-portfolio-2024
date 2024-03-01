import { useState, useEffect } from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY
      if (offset > window.innerHeight) {
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
    <nav id={styles.navbar}>
      <a href='#backTop'>
        <h2 id={styles.myName}>Pedro <span>T.V</span></h2>
      </a>
      <div className={`${styles.linksContainer} ${scrolled ? styles.column : ''}`}>
        <a href="#linkProjects">
          <span className={styles.number}>01 <span className={styles.line}></span></span>
          <p>Projetos</p>
        </a>
        <a href="#aboutMe">
          <span className={styles.number}>02 <span className={styles.line}></span></span>
          <p>Sobre</p>
        </a>
        <a href="#contact">
          <span className={styles.number}>03 <span className={styles.line}></span></span>
          <p>Contatos</p>
        </a>
      </div>
    </nav>
  )
}

export default Navbar