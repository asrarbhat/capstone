package com.capstone.bank.controller;

import com.capstone.bank.model.Account;
import com.capstone.bank.service.AccountService;
import org.springframework.web.bind.annotation.*;


@RestController
public class BankController {
    private final AccountService accountService;

    public BankController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/get")
    public Account getAccount(@RequestBody Account account) {
        System.out.println(account.getUsername()+" "+account.getPassword());
        return  accountService.getAccount(account);
    }

    @PostMapping("/registration")
    public Account createAccount(@RequestBody Account account) {
        return accountService.create(account);
    }
    @PostMapping("/transaction")
    public Boolean transaction() {
        //TODO
        //make the transaction in database.
        return null;
    }

    @PutMapping("/update")
    public Account updateAccount(@RequestBody Account account) {
        return accountService.update(account);
    }
}
