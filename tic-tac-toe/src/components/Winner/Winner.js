import { useGameContext } from '../Context/GameContext'
import styles from './Winner.module.css'

export function Winner(props){
    const {winner} = useGameContext()

    return (
        <h1 className={styles.winner}>Winner is {winner}</h1>
    )
}