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
          <img src={ProjetoTheBlog} alt="Projeto TheBlog" style={{width: '100%'}} />
          <div className={styles.imgs}>
            <img src={fotoAmpMarshall} alt="Projeto Compra de Amplificador Marshall" />
            <img src={fotoCalendar} alt="Projeto Calendario" />
            <img src={listaDeCompras2} alt="Projeto Lista de Compras" />
          </div>
          <img src={lojaMuitaMelodia} alt="Projeto Muita Melodia" style={{width: '100%'}} />
          <img src={fotoPokeM} alt="Projeto API do Pokemon" style={{width: '100%'}} />
          <img src={projetoYoutube} alt="Projeto Replica do Youtube" style={{width: '100%'}} />
          <div className={styles.imgs}>
            <img src={moviesOnly2} alt="Projeto Only Movies" />
            <img src={projetoHoFame} alt="Projeto HoFame" />
            <img src={projetoMyGram} alt="Projeto MyGram" />
          </div>
          
          <a className={styles.principalWorks} href="#principalsProjects">Principais Projetos</a>
        </div>
      </section>
    </main>
  )
}

export default MyProjects