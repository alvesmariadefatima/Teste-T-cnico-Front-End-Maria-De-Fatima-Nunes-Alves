import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.menu}>
            <p className={styles.nomeSite}>NextGen Gaming</p>

            <div className={styles.containerCarrinho}>
                <Link to="/carrinho">
                    <img src="/carrinho.png" alt="Ícone do Carrinho de Compras" className={styles.carrinhoIcon} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
