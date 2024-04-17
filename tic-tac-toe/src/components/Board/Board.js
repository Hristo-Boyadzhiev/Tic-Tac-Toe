import { useEffect } from 'react'
import { useGameContext } from '../Context/GameContext'
import styles from './Board.module.css'
import { useNavigate } from 'react-router-dom'

export function Board(props) {
    const { winner, setSquareValuesState, squareValues, resetSquareValues } = useGameContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (winner) {
            navigate('/winner')
            resetSquareValues()
        }
    }, [winner])

    const clickHandler = (event) => {
        const index = Number(event.currentTarget.id)
        setSquareValuesState(index)
    }

    return (
        <table className={styles.table}>
            <tbody className={styles.tableBody}>
                <tr className={styles.row}>
                    <td className={styles.square} id="0" onClick={clickHandler}>{squareValues[0]}</td>
                    <td className={styles.square} id="1" onClick={clickHandler}>{squareValues[1]}</td>
                    <td className={styles.square} id="2" onClick={clickHandler}>{squareValues[2]}</td>
                </tr>

                <tr className={styles.row}>
                    <td className={styles.square} id="3" onClick={clickHandler}>{squareValues[3]}</td>
                    <td className={styles.square} id="4" onClick={clickHandler}>{squareValues[4]}</td>
                    <td className={styles.square} id="5" onClick={clickHandler}>{squareValues[5]}</td>
                </tr>

                <tr className={styles.row}>
                    <td className={styles.square} id="6" onClick={clickHandler}>{squareValues[6]}</td>
                    <td className={styles.square} id="7" onClick={clickHandler}>{squareValues[7]}</td>
                    <td className={styles.square} id="8" onClick={clickHandler}>{squareValues[8]}</td>
                </tr>
            </tbody>
        </table>
    )
}