package com.capstone.bank.service;

import com.capstone.bank.model.Account;
import com.capstone.bank.repository.BankRepository;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final BankRepository bankRepository;

    public AccountService(BankRepository bankRepository) {
        this.bankRepository = bankRepository;
    }

    public Account getAccount(Account acc) {
        return bankRepository.findByUsernameAndPassword(acc.getUsername(),acc.getPassword());
    }

    public Account create(Account acc) {
        Account acc1=bankRepository.findByUsername(acc.getUsername());
        if (acc1 ==null)
            //TODO
            //generate 10 digit account number
            //book.setAccountNumber();
            return bankRepository.save(acc);
        return null;
    }

    public Account update(Account acc) {
        return bankRepository.save(acc);
    }
}
