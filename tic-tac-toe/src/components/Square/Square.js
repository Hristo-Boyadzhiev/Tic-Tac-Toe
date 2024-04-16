import { useGameContext } from '../Context/GameContext'
import styles from './Square.module.css'

export function Square({
    index
}) {
    const {setSquareValuesState, squareValues} = useGameContext()


    const clickHandler = () => {
        setSquareValuesState(index)
    }

    return (
        <button className={styles.square} onClick={clickHandler}>{squareValues[index]}</button>
    )
}