import { useEffect, useState } from 'react'
import styles from './PageTop.module.scss'
import { Link } from 'react-router-dom'

import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const PageTop = () => {
  const [scrolled, setScrolled] = useState(false)
  const [scrolledLinks, setScrolledLinks] = useState(true)

  function copyEmail() {
    const myEmail = 'pedro.thomazi@hotmail.com'
    navigator.clipboard.writeText(myEmail).then(() => {
      alert("E-mail Copiado")
    })
  }


  // useEffect(() => {

  //   const mindHeigth = window.innerHeight - 700

  //   const hiddenHeigth = window.innerHeight + 4600

  //   function handleScroll() {
  //     const offset = window.scrollY
  //     if (offset > mindHeigth) {
  //       setScrolled(true)
  //     }
  //     else {
  //       setScrolled(false)
  //     }

  //     if (offset > hiddenHeigth) {
  //       setScrolled(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [])

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      const offset = window.scrollY
      const heigthPage = document.body.scrollHeight - 1400
      
      if (offset > heigthPage) {
        setScrolledLinks(false)
      }
      else {
        setScrolledLinks(true)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main id={styles.pageTop}>
      <section id='backTop' className={styles.context}>
        <div className={styles.containerTitles}>
          <h1 className={`${scrolled ? styles.toTop : ''}`}>Olá, eu sou</h1>
          <div className={`${styles.div} ${scrolled ? styles.hidden : ''}`}><p>Desenvolvedor</p><p>Full-Stack</p></div>
          <h1 className={`${scrolled ? styles.toDown : ''}`}>Pedro T.V</h1>
        </div>
      </section>
      <div className={`${styles.mySocials} ${scrolledLinks ? styles.showSocials : ''}`}>
        <Link to='https://www.linkedin.com/in/pedro-thomazi-viannini/' target='_blank'><FaLinkedinIn /> <p>LinkedIn</p></Link>
        <Link to='https://github.com/pedro-thomazi' target='_blank'><FiGithub /> <p>GitHub</p></Link>
        <Link onClick={copyEmail} ><HiOutlineMail /> <p>Copy E-mail</p></Link>
      </div>
    </main>
  )
}

export default PageTop
