package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.EmailRequest;
import com.app.service.EmailService;

@RestController
public class EmailController {
	
	@Autowired
	private EmailService emailservice;
	
	@RequestMapping("/welcome")
	public String welcome() {
		return "inside email controller";
	}
	
	//api to send email
//	
	@RequestMapping(value = "/sendemail" ,method=RequestMethod.POST)
	public ResponseEntity<?>sendEmail(@RequestBody EmailRequest request){
		System.out.println("email controller");
		System.out.println(request);
		
		boolean result = this.emailservice.sendEmail(request.getSubject(), request.getMessage(), request.getTo());
		
		if(result) {
			return ResponseEntity.ok("Email is send Successfully ...");
		}else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email Not send...");
		}
	}

}
