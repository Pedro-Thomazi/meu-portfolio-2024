import { useEffect, useState } from 'react'
import styles from './AboutMe.module.scss'
import { FaUser } from "react-icons/fa";

// Experiencias
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaBootstrap, FaGitAlt, FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript, BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";
import { SiNextdotjs, SiMysql } from "react-icons/si";


const AboutMe = () => {
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {

    const mindHeigth = window.innerHeight + 2700
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
    <main className={styles.aboutMeContainer} id='aboutMe'>
      <span className={`${styles.number} ${scrolled ? styles.show : ''}`}>02</span>
      <header className={styles.header}>
        <h1 className={`${scrolled ? styles.toLeft : ''}`}>Sobre</h1>
        <FaUser size={50} />
        <h1 className={`${scrolled ? styles.toRight : ''}`}>Mim</h1>
      </header>
      <div className={styles.details}>
        <p>Descobrindo</p>
        <span></span>
        <p>História</p>
        <span></span>
        <p>Experiências</p>
      </div>

      <section className={styles.context}>
        <div className={styles.allContainers}>
          <div className={`${styles.container} ${styles.containerText}`}>
            <div className={styles.resume}>
              <p className={styles.apresentation}>Estudo programação desde 2019, começando com Python e evoluindo para JavaScript, que é o meu principal foco atualmente. No front-end, tenho experiência com React.js, SASS/SCSS e Bootstrap, que são as tecnologias que mais utilizo. No back-end, optei por utilizar Node.js.</p>
            </div>
            <div className={styles.historic}>
              <h2>Histórico</h2>
              <p>Em 2019, tive minha primeira experiência com programação. Python foi a minha primeira linguagem; comecei com cursos gratuitos e programando pelo meu celular.</p>
              <p>Em 2022, depois de um período sem programar, dei início aos estudos de front-end com HTML, CSS e JavaScript, já utilizando um bom computador para estudar.</p>
              <p>No ano seguinte, em 2023, aprendi muito, começando com React.js, TypeScript, SASS/SCSS, Bootstrap, Git/GitHub, Next.js, MySQL e Java.</p>
              <p>Agora, em 2024, estou começando a ter mais contato com o back-end, utilizando Node.js.</p>
            </div>
          </div>
          <div className={`${styles.container} ${styles.containerSkills}`}>
            <div className={styles.skills}>
              <h2>Experiências</h2>
              <div className={styles.allSkills}>
                <div>
                  <FaHtml5 color='orange' size={50} />
                  <p>HTML5</p>
                </div>
                <div>
                  <FaCss3Alt color='#0066ff' size={50} />
                  <p>CSS3</p>
                </div>
                <div>
                  <BiLogoJavascript color='yellow' size={50} />
                  <p>JavaScript</p>
                </div>
                <div>
                  <FaReact color='#0066ff' size={50} />
                  <p>React.js</p>
                </div>
                <div>
                  <BiLogoTypescript color='#0066ff' size={50} />
                  <p>TypeScript</p>
                </div>
                <div>
                  <FaNodeJs color='green' size={50} />
                  <p>Node.js</p>
                </div>
                <div>
                  <SiMysql color='orange' size={50} />
                  <p>MySQL</p>
                </div>
                <div>
                  <BiLogoMongodb color='green' size={50} />
                  <p>MongoDB</p>
                </div>
                <div>
                  <SiNextdotjs color='gray' size={50} />
                  <p>Next.js</p>
                </div>
                <div>
                  <FaBootstrap color='purple' size={50} />
                  <p>Bootstrap</p>
                </div>
                <div>
                  <FaSass color='pink' size={50} />
                  <p>Sass/Scss</p>
                </div>
                <div>
                  <BiLogoFirebase color='orange' size={50} />
                  <p>Firebase</p>
                </div>
                <div>
                  <FaPython color='#0066ff' size={50} />
                  <p>Python</p>
                </div>
                <div>
                  <FaGitAlt color='orange' size={50} />
                  <p>GIT/GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutMe