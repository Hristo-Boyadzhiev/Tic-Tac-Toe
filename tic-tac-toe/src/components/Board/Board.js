import { Square } from '../Square/Square'
import styles from './Board.module.css'

export function Board(props) {
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