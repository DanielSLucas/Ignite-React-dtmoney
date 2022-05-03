import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction(transaction: TransactionInput): void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  },[]);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}