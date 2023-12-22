'use client'
import Link from 'next/link'
import styles from './form.module.css'
export default function Form() {
    return (
      <section className={styles.section}>
        <h1>Olá.</h1>
        <h2>Você foi escolhido pois possui o perfil que desejamos para nós</h2>
        <p>
            Se juntar à nós significa abdicar de tudo que acredita e conhecer 
            o real significado de todo o mundo ao seu redor.
            <br />
            Aceitar o convite te tornará um de nós, assim que ouvir o chamado, recusa-lo não será uma opção
        </p>


        <Link href='/Nome'>
            <button className={styles.button}>
                Aceito
            </button>
        </Link>
        
      </section>
    )
  }