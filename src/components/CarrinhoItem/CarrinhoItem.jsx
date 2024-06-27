// CarrinhoItem.jsx
import React from 'react';
import styles from './CarrinhoItem.module.css';

const CarrinhoItem = ({ produto }) => {
    return (
        <div className={styles.carrinhoItem}>
            <img src={produto.imagem} alt={`Imagem de ${produto.descricao}`} />
            <div className={styles.descricao}>
                <p>{produto.nomeProduto}</p>
                <p>{produto.descricao}</p>
                <p>Preço: R$ {produto.preco.toFixed(2)}</p>
            </div>
            <div className={styles.quantidade}>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Total: R$ {(produto.preco * produto.quantidade).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default CarrinhoItem;