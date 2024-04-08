package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponseDto;
import com.app.entity.Credentials;

@CrossOrigin
@RestController
public class AuthController {

	@Autowired
	private AuthenticationManager authManager;
	@Autowired
	private JwtUtil jwtUtils;

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestBody Credentials cred) {
		System.out.println("Authenticating: " + cred);
		try {
			Authentication auth = new UsernamePasswordAuthenticationToken(cred.getUserName(), cred.getPassword());
			System.out.println("BEFORE: " + auth);
			auth = authManager.authenticate(auth);
			System.out.println("AFTER: " + auth);
			User user = (User)auth.getPrincipal();
			String token = jwtUtils.generateToken(user.getUsername());
			return ResponseEntity.ok(token);
		}catch (BadCredentialsException e) {
			System.out.println("Error in authenticate " + e);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).
					body(new ApiResponseDto(e.getMessage()));
		}
	}
}
