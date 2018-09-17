package com.example.demo_ect.controladores;

import com.example.demo_ect.modelos.Post;
import com.example.demo_ect.repositorios.PostRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "http://localhost:4200")
public class PostControlador {

    @Autowired
    private  PostRepositorio repositorio;

    @GetMapping("/")
    public List<Post> getAll(){
        return  repositorio.findAll();
    }

    @PostMapping("/")
    public Post guardar(@RequestBody Post post){
        return repositorio.save(post);
    }
}
