package com.capstone.bank.repository;

import com.capstone.bank.model.Account;
import com.capstone.bank.model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, String> {
    Iterable<Transactions> findAllByAccountNumber(String account);
}