import React from 'react';
import Modal from 'react-modal';

import { Container } from './styles';

import closeImg from '../../assets/close.svg';

interface NewTransactionModalProp {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProp> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type='button' 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder='Título' />
        <input type="number" placeholder='Valor' />
        <input placeholder='Categoria' />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;