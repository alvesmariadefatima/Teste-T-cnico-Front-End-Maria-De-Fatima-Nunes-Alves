// AvisoAdicao.jsx
import React, { useEffect } from 'react';
import styles from './AvisoAdicao.module.css';

const AvisoAdicao = ({ show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timeout = setTimeout(onClose, 2000); // Fechar o aviso após 2 segundos
            return () => clearTimeout(timeout);
        }
    }, [show, onClose]);

    return (
        <div className={show ? `${styles.aviso} ${styles.show}` : styles.aviso}>
            ✅ Item adicionado ao carrinho!
        </div>
    );
}

export default AvisoAdicao;
