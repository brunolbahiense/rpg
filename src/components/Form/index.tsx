'use client'
import Link from 'next/link'
import styles from './form.module.css'
export default function Form() {
    return (
      <section className={styles.section}>
        <h1>Olá.</h1>
        <h2>APÓS MUITO ANALISAR SUAS CARACTERÍSTICAS ESCOLHEMOS VOCÊ PARA SE JUNTAR A NOSSA ORGANIZAÇÃO.</h2>
        <p>
          ESTA É A SUA CHANCE DE PODER CONSERTAR ESTE MUNDO CONDENADO EM QUE VIVEMOS.
          <br />
          UM NOVO PROPÓSITO PARA A SUA VIDA
          <br />
          <br />
          ESCOLHA A SUA BANDEIRA
        </p>

      <div className={styles.escolha}>

        <Link href='/kaiser'>
            <button className={styles.button}>
                Força
            </button>
        </Link>
        <Link href='/angelofthenight'>
            <button className={styles.button2}>
                Conhecimento
            </button>
        </Link>
      </div>
    
      
        
      </section>
    )
  }