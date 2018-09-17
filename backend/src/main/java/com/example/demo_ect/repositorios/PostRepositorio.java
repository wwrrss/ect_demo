package com.example.demo_ect.repositorios;

import com.example.demo_ect.modelos.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepositorio extends JpaRepository<Post,Integer> {
}
