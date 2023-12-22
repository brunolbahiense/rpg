/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link';
import styles from './page.module.css'
import { useState } from 'react';
export default function Nome() {


  const [value, setValue] = useState('');
  const [message, setMessage] = useState(false);
  const [hint, setHint] = useState(false);
  const [correct, setCorrect] = useState(false);
  const validade = () => {
    const response = '-. .- --- / -.-. --- -. ... .. --. --- / . -. - . -. -.. . .-. / --- / ... . ..- / .. -.. .. --- -- .-'
    if(value == response) return setCorrect(true)
    if(value == 'alan turing') return setHint(true)
    if(value !== response) return setMessage(true) 
  }
  return (
    <>
      {correct ? (
        <main className={styles.modal}>
          <p>Você provou o seu valor, seja bem vindo!</p>
          <a href='https://t.me/+aKc1ZmukluRiZGY5' className={styles.correct}>https://t.me/+aKc1ZmukluRiZGY5</a>
        </main>
      ):(
      <main className={styles.main}>
        <img src='/alan.png' alt="o pai da computacao" className={styles.image}/>
        <h1 className={styles.question}>--.- ..- .- .-.. / --- / -- . ..- / -. --- -- . ..--..</h1>
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
          {hint && (<p className={styles.hint}>-. .- --- / -.-. --- -. ... .. --. --- / . -. - . -. -.. . .-. / --- / ... . ..- / .. -.. .. --- -- .-</p>)}
      </main>
      )}
    </>
  )
}

