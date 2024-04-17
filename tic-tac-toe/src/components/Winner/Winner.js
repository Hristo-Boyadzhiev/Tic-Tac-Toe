import { useEffect } from 'react'
import { useGameContext } from '../Context/GameContext'
import styles from './Winner.module.css'
import { Link, useNavigate } from 'react-router-dom'

export function Winner(props) {
    const { winner, setWinner } = useGameContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!winner) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setWinner(null)
            navigate('/')
        }, 3000);
    }, [winner])

    return (
        <>
            <section className={styles.board}>
                {winner === 'No winner' ? <h1 className={styles.winner}>No winner</h1>
                    : <h1 className={styles.winner}>Winner is {winner}</h1>
                }
            </section>
        </>
    )
}