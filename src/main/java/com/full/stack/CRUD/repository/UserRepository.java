package com.full.stack.CRUD.repository;

import com.full.stack.CRUD.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
