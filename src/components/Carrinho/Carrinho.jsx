import React from 'react';

function Carrinho({ produtosCarrinho }) {
    return (
        <div>
            <h2>Produtos no Carrinho:</h2>
            <ul>
                {produtosCarrinho.map((produto) => (
                    <li key={produto.id}>
                        <p>{produto.nomeProduto} - Quantidade: {produto.quantidade}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Carrinho;
