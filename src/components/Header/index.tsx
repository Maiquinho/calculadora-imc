import styles from './styles.module.css';
import logo from '../../assets/powered.png';

export function Header() {

    return (
        <header>
            <div className={styles.headerContainer}>
                <img src={logo} width={150} alt="logo BMI Calculator" />
            </div>
        </header>
    )
}