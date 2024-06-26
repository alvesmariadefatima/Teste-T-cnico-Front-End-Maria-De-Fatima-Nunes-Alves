import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.menu}>
            <div className={styles.containerLogotipo}>
                <img src="/icone-nextgen-gaming.png" alt="Logotipo da loja NextGen Gaming" />
            </div>
            <p className={styles.nomeSite}>NextGen Gaming</p>

            <div className={styles.containerCarrinho}>
                <img src="/carrinho.png" alt="Ícone do Carrinho de Compras" />
            </div>
        </nav>
    );
}   

export default Navbar;