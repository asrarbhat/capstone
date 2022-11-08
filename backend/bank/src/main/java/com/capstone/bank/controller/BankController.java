package com.capstone.bank.controller;

import com.capstone.bank.model.Account;
import com.capstone.bank.model.Transactions;
import com.capstone.bank.service.AccountService;
import com.capstone.bank.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
public class BankController {
    private final AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    public BankController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping("/get")
    public Account getAccount(@RequestBody Account account) {
        System.out.println(account.getUsername()+" "+account.getPassword());
        return  accountService.getAccount(account);
    }

    @PostMapping("/registration")
    public Account createAccount(@RequestBody Account account) {
        return accountService.create(account);
    }

    @PostMapping("/transaction")
    public ResponseEntity<?> transaction(@RequestBody Transactions transactions) {
        System.out.println(transactions.getAccountNumber()+" "+transactions.getDestAccountNumber()+" "+transactions.getTransferAmount());
        Transactions t1 = transactionService.addTransations(transactions);
        return new ResponseEntity<Transactions>(t1, HttpStatus.CREATED);
    }
    @GetMapping ("/transaction/{accountNumber}")
    public Iterable<Transactions> getTransactions(@PathVariable String accountNumber) {
        return transactionService.findAllTransactions(accountNumber);
    }

    @PutMapping("/update")
    public Account updateAccount(@RequestBody Account account) {
        return accountService.update(account);
    }
}
