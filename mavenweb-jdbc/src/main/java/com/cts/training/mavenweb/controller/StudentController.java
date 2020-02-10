package com.cts.training.mavenweb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cts.training.mavenweb.dao.IStudentDao;
import com.cts.training.mavenweb.entity.Student;

@Controller
@RequestMapping("/student")
public class StudentController {

	// dependency
	@Autowired
	private IStudentDao studentDao;
	
	@RequestMapping("/all")
	public String showAll(Model model) {
		
		List<Student> students = this.studentDao.findAll();
		
		model.addAttribute("students", students);
		
		
		return "student-list";
	}
}
