import { useEffect } from 'react'
import { useGameContext } from '../Context/GameContext'
import { Square } from '../Square/Square'
import styles from './Board.module.css'
import { useNavigate } from 'react-router-dom'

export function Board(props) {
    const { winner } = useGameContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (winner) {
            navigate('/winner')
        }
    }, [winner])

    return (
        <section className={styles.board}>

            <div className={styles.row}>
                <Square index={0} />
                <Square index={1} />
                <Square index={2} />
            </div>

            <div className={styles.row}>
                <Square index={3} />
                <Square index={4} />
                <Square index={5} />
            </div>

            <div className={styles.row}>
                <Square index={6} />
                <Square index={7} />
                <Square index={8} />
            </div>
        </section>
    )
}