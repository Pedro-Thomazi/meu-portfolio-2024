import styles from './Contacts.module.scss'

import { useEffect, useState } from 'react'

import { FaLinkedinIn, FaRegNewspaper, FaCopyright  } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Contacts = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const mindHeigth = window.innerHeight + 4800
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

  function copyEmail() {
    const myEmail = 'pedro.thomazi@hotmail.com'
    navigator.clipboard.writeText(myEmail).then(() => {
      alert("E-mail Copiado")
    })
  }

  return (
    <footer id='contact' className={styles.contactsContainer}>

      <div className={styles.myDetails}>
        <div className={styles.subDivs}>
          <FaCopyright />
          <p>Pero Thomazi Viannini - 2024</p>
        </div>

        <div className={styles.mySocials}>
          <Link to='https://www.linkedin.com/in/pedro-thomazi-viannini/' target='_blank'><FaLinkedinIn /> <p>LinkedIn</p></Link>
          <Link to='https://github.com/pedro-thomazi' target='_blank'><FiGithub /> <p>GitHub</p></Link>
          <Link to='/' onClick={copyEmail} ><HiOutlineMail /> <p>Copy E-mail</p></Link>
          <Link to='/teste' download ><FaRegNewspaper /> <p>Meu Curriculo</p></Link>
        </div>

        <div className={styles.subDivs}>
          <FaLocationDot />
          <p>São Paulo - São Paulo</p>
        </div>
      </div>

      <header className={styles.header}>
        <h1 className={`${scrolled ? styles.toLeft : ''}`}>Muito</h1>
        <h1 className={`${scrolled ? styles.toRight : ''}`}>Obrigado</h1>
      </header>
    </footer>
  )
}

export default Contacts