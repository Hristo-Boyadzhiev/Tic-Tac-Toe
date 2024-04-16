import { useEffect } from 'react'
import { useGameContext } from '../Context/GameContext'
import styles from './Winner.module.css'
import { useNavigate } from 'react-router-dom'

export function Winner(props){
    const {winner} = useGameContext()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!winner){
            navigate('/')
        }
    }, [winner])

    return (
        <section className={styles.board}>
        <h1 className={styles.winner}>Winner is {winner}</h1> 
        </section>
    )
}