/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './page.module.css'
import { useState } from 'react';
export default function Nome() {


  const [value, setValue] = useState('');
  const [message, setMessage] = useState(false);
  const [hint, setHint] = useState(false);
  const [correct, setCorrect] = useState(false);
  const validade = () => {
    const response = 'nypms giwev'
    if(value == response) return setCorrect(true)
    if(value == 'julio cesar') return setHint(true)
    if(value !== response) return setMessage(true) 
  }
  return (
    <>
      {correct ? (
        <main className={styles.modal}>
          <p>Você provou o seu valor</p>
          <p>seja bem vindo</p>
          <a href='https://t.me/+aKc1ZmukluRiZGY5' className={styles.correct}>Ø</a>
        </main>
      ):(
      <main className={styles.main}>
        <img src='/cesare.png' alt="o primeiro imperador de roma" className={styles.image}/>
        <h1 className={styles.question}>uyep s qiy rsqi?</h1>
        <main className={styles.form}>
          <input 
            type="text" 
            name="cypherImg" 
            id="image"
            className={styles.input}
            value={value}
            onClick={() => {
              setMessage(false)
              setValue('')
            }}
            onChange={e => setValue(e.currentTarget.value.toLowerCase())}
          />
          <button className={styles.btn}  onClick={validade}>Enviar</button>
        </main>
          {message && (<p className={styles.incorrect}>Resposta Incorreta</p>)}
          {hint && (<p className={styles.hint}>res gsrwmks irxirhiv s wiy mhmsqe</p>)}
      </main>
      )}
    </>
  )
}

