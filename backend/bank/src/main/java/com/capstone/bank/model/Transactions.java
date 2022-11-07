package com.capstone.bank.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long transactionNumber;
    @Column
    private String accountNumber;
    @Column
    private String destAccountNumber;
    @Column
    private int transferAmount;

}
