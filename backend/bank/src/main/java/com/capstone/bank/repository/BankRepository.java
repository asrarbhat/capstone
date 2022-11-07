package com.capstone.bank.repository;

import com.capstone.bank.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepository extends JpaRepository<Account, String> {
    Account findByUsernameAndPassword(String username, String password);
    Account findByUsername(String username);

    Account findByAccountNumber(String accountNumber);

}
