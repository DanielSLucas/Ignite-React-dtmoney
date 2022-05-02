import React from 'react';
import Modal from 'react-modal';

// import { Container } from './styles';

interface NewTransactionModalProp {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProp> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}

export default NewTransactionModal;