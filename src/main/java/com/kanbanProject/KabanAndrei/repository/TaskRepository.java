package com.kanbanProject.KabanAndrei.repository;

import com.kanbanProject.KabanAndrei.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}