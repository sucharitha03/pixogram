package com.cts.training.movieservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.training.movieservice.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer>{

}
