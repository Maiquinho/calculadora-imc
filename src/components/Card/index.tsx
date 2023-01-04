import { bmiLevel } from '../../helpers/bmi';
import styles from './styles.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


interface CardProps {
    item: bmiLevel
}


export function Card({ item }: CardProps){
    return(
        <div className={styles.card} style={{ backgroundColor: item.color }}>
            <div className={styles.cardIcon}>
                <img src={item.icon === 'up' ? upImage : downImage } width={30} alt="BMI icon" />
            </div>
            <div className={styles.cardTitle}>
                {item.title}
            </div>

            {item.yourBmi && 
                <div className={styles.yourBmi}>Seu IMC é de {item.yourBmi} Kg/m²</div>
            }

            <div className={styles.cardInfo}>
                IMC está entre <strong>{item.bmi[0]}</strong> e <strong>{item.bmi[1]}</strong>
            </div>
        </div>
    )
}