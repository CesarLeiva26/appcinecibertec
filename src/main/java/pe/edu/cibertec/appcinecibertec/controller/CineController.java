package pe.edu.cibertec.appcinecibertec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@Controller
public class CineController {

	public String cine(Model model) {
		
		return "cine";
	}
}