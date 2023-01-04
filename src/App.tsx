import { FormEvent, useState } from 'react';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { bmiLevel, bmiLevels, calculateBmi } from './helpers/bmi';

import leftArrowImg from './assets/leftarrow.png';
import styles from './App.module.css';


export default function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<bmiLevel | null>(null);


  function handleCalculateBmi(event: FormEvent) {
    if (heightField && weightField) {
      event.preventDefault();
      setToShow(calculateBmi(heightField, weightField));
    } else {
      alert('Digite os campos corretamente!');
    }
  }

  function handleBackButton(){
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }


  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.container}>
        <div className={styles.column}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>


          <form className={styles.form} onSubmit={handleCalculateBmi}>
            <input
              type="number"
              placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />
            <input
              type="number"
              placeholder="Digite a seu peso. Ex: 75.3 (em Kg)"
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />

            <button type="submit" disabled={toShow ? true : false}>Calcular</button>
          </form>
        </div>

        <div className={`${styles.column} ${styles.flex}`}>
          {!toShow &&
            <div className={styles.grid}>
              {bmiLevels.map((item, key) => (
                <Card key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.cardLg}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImg} alt="left arrow image" width={25} />
              </div>
              <Card item={toShow} />
            </div>
          }
        </div>

      </div>
    </div>
  )
}