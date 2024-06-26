import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './CarrinhoCompras.module.css';

function CarrinhoCompras() {
    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.tituloCarrinhoCompras}>Carrinho de Compras</h1>
            </div>
        </div>
    );
}

export default CarrinhoCompras;
