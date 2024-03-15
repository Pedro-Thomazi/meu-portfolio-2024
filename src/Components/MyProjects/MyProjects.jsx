import styles from './MyProjects.module.scss'

import ProjetoTheBlog from '../../Images/imgProjects/fotoTheblog.png'
import fotoAmpMarshall from '../../Images/imgProjects/pageStoreMarshall.png'
import fotoCalendar from '../../Images/imgProjects/fotoCalendar.png'
import listaDeCompras2 from '../../Images/imgProjects/listaDeCompras2.png'
import lojaMuitaMelodia from '../../Images/imgProjects/fotoMuitaM.png'
import moviesOnly2 from '../../Images/imgProjects/moviesOnly2.png'
import projetoHoFame from '../../Images/imgProjects/projetoHoFame.png'
import projetoMyGram from '../../Images/imgProjects/projetoMyGram.png'
import projetoYoutube from '../../Images/imgProjects/fotoYoutube.png'
import fotoPokeM from '../../Images/imgProjects/fotoPokeM.png'

// const imagesArray = [
//   {name: ProjetoTheBlog, alt: 'Projeto TheBlog', width: '100%'},
//   {name: fotoAmpMarshall, alt: 'Projeto TheBlog', width: ''},
//   {name: fotoCalendar, alt: 'Projeto TheBlog', width: ''},
//   {name: listaDeCompras2, alt: 'Projeto TheBlog', width: ''},
//   {name: lojaMuitaMelodia, alt: 'Projeto TheBlog', width: '100%'},
//   {name: moviesOnly2, alt: 'Projeto TheBlog', width: ''},
//   {name: projetoHoFame, alt: 'Projeto TheBlog', width: ''},
//   {name: projetoMyGram, alt: 'Projeto TheBlog', width: ''},
//   {name: fotoPokeM, alt: 'Projeto TheBlog', width: '100%'},
//   {name: projetoYoutube, alt: 'Projeto TheBlog', width: '100%'},
// ]

const MyProjects = () => {
  return (
    <main className={styles.myProjectsContainer} id='linkProjects'>
      <section className={styles.text}>
        <h2>Todo meu <span>conhecimento</span> colocados em <span>prática</span> com diversos <span>projetos pessoais</span>.</h2>
      </section>
      <section className={styles.imagesContainer}>
        <div className={styles.images}>
          <div className={`${styles.item} ${styles.img1}`}></div>
          <div className={`${styles.item} ${styles.img2}`}></div>
          <div className={`${styles.item} ${styles.img3}`}></div>
          <div className={`${styles.item} ${styles.img4}`}></div>
          <div className={`${styles.item} ${styles.img5}`}></div>
          <div className={`${styles.item} ${styles.img6}`}></div>
          <div className={`${styles.item} ${styles.img7}`}></div>
          <div className={`${styles.item} ${styles.img8}`}></div>
          <div className={`${styles.item} ${styles.img9}`}></div>
        </div>        
        <a className={styles.principalWorks} href="#principalsProjects">Principais Projetos</a>
      </section>
    </main>
  )
}

export default MyProjects