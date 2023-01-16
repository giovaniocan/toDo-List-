import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src="./src/assets/rocket.svg" alt="" />
            <div className={styles.title}>
                <div className={styles.blue}>
                    to
                </div>
                do
            </div>
        </header>

    )
}