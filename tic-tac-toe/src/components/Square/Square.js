import { useGameContext } from '../../Context/GameContext'
import styles from './Square.module.css'

export function Square({
    index
}) {
    const {setSquareValuesState, currentValue} = useGameContext()


    const clickHandler = () => {
        setSquareValuesState(index)
    }

    return (
        <button className={styles.square} onClick={clickHandler}></button>
    )
}