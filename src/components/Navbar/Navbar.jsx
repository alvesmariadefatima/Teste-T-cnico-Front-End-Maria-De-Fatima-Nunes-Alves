import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.menu}>
            <div className={styles.containerLogotipo}>
                <Link to="/" className={styles.logoLink}>
                    <img src="/icone-nextgen-gaming.png" alt="Logotipo da loja NextGen Gaming" className={styles.logoImg} />
                    <p className={styles.nomeSite}>NextGen Gaming</p>
                </Link>
            </div>

            <div className={styles.containerCarrinho}>
                <Link to="/carrinho">
                    <img src="/carrinho.png" alt="Ícone do Carrinho de Compras" className={styles.carrinhoIcon} />
                </Link>
            </div>
        </nav>
    );
}   

export default Navbar;