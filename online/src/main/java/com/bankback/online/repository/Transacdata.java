package com.bankback.online.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bankback.online.entity.TransactionData;

public interface Transacdata extends JpaRepository<TransactionData,Long> {
   @Query(value = "select * from transaction_data where fromaccno = :query or toaccno = :query",nativeQuery=true)
   List<TransactionData> byaccno(long query);
   @Query(value = "select * from transaction_data where status=:query",nativeQuery=true)
   List<TransactionData> bystatus(String query);
}
