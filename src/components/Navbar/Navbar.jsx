import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.menu}>
            <p className={styles.nomeSite}>NextGen Gaming</p>
        </nav>
    );
}

export default Navbar;
