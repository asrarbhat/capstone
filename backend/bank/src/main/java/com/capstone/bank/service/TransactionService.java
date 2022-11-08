package com.capstone.bank.service;

import com.capstone.bank.model.Account;
import com.capstone.bank.model.Transactions;
import com.capstone.bank.repository.BankRepository;
import com.capstone.bank.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {

    @Autowired
    private BankRepository bankRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    public Transactions addTransations(Transactions transactions)
    {
       Account acc = bankRepository.findByAccountNumber(transactions.getAccountNumber());
       acc.setBalance(acc.getBalance() - transactions.getTransferAmount());
       Account acc1 = bankRepository.findByAccountNumber(transactions.getDestAccountNumber());
       acc1.setBalance(acc1.getBalance() + transactions.getTransferAmount());
    return transactionRepository.save(transactions);
    }

    public Iterable<Transactions> findAllTransactions(String accountNumber) {
   return transactionRepository.findAllByAccountNumber(accountNumber);
    }
}
