import { useEffect } from 'react'
import { useGameContext } from '../Context/GameContext'
import styles from './Winner.module.css'
import { Link, useNavigate } from 'react-router-dom'

export function Winner(props){
    const {winner, setWinner} = useGameContext()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!winner){
            navigate('/')
        }
    }, [winner])

    return (
        <section className={styles.board}>
        <h1 className={styles.winner}>Winner is {winner}</h1>
        <Link to='/'>
                <button>Play again</button>
            </Link>
        </section>
    )
}