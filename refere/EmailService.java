package com.app.service;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.app.entity.OTP;

@Service //
public class EmailService {
	
	public boolean sendEmail(String subject,String message,String to) {

		
//		String from ="cdacproject8@gmail.com";
//		 //to = "adityalad89@gmail.com";
//		//variable for gmail
//		String host ="smtp.gmail.com";
//		
//		//get the system properties
//		Properties properties =System.getProperties();
//		System.out.println("Properties" + properties);
//		
//		//setting important information to properties object333333333
//		
//		//host set
//		properties.put("mail.smtp.host",host); //sending smtp
//		properties.put("mail.smtp.port","456"); //tcp port to connect to use 456
//		properties.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
//		properties.put("mail.smtp.auth","true");
//		
//		//step1 : to get the session object
//		
//		Session session = Session.getInstance(properties, new Authenticator(){
//			@Override
//			protected PasswordAuthentication getPasswordAuthentication() {
//				return new PasswordAuthentication("cdacproject8@gmail.com","jglxgwpushvsdxli");
//			}
//		});
//		
//		session.setDebug(true);
//		
//		//step 2 : compose the message [text,multi media]
//		
//		MimeMessage m = new MimeMessage(session);
//		try {
//			System.out.println("-----------------------");
//			//from email
//			m.setFrom(from);
//			
//			//adding recipient to message
//			m.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
//			
//			System.out.println("----------------------");
//			//adding subject to message
//			m.setSubject(subject);
//			
//			
//			//adding text to message
//			m.setText(message);
//			
//						
//			//send
//			//step3: send the message using transport class
//			Transport.send(m);
//			System.out.println("sent Success .....");
//			
//			return true; //send email
//			
//		}catch(Exception e) {
//			e.printStackTrace();
//			return false;
//		}
//		//return email
		
		
		
		
		// Sender's email ID needs to be mentioned
	      String from = "cdacproject8@gmail.com";
	      // Sender's password
	      String password = "jglxgwpushvsdxli";
	      // Recipient's email ID needs to be mentioned.
//	      String to1 = "shubhamborle@gmail.com";

	      // Get system properties
	      Properties props = new Properties();

	      // Setup mail server
	      props.put("mail.smtp.host", "smtp.gmail.com");
	      props.put("mail.smtp.auth", "true");
	      props.put("mail.smtp.port", "465");
	      props.put("mail.smtp.ssl.enable", "true");

	      // Get the default Session object.
	      Session session = Session.getInstance(props, new javax.mail.Authenticator() {
	         protected PasswordAuthentication getPasswordAuthentication() {
	            return new PasswordAuthentication(from, password);
	         }
	      });

	      try {
	         // Create a default MimeMessage object.
	         MimeMessage msg = new MimeMessage(session);

	         // Set From: header field of the header.
	         msg.setFrom(new InternetAddress(from));

	         // Set To: header field of the header.
	         msg.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

	         // Set Subject: header field
	         msg.setSubject("This is the Subject Line!");

	         // Now set the actual message
	         msg.setText(message);
	         
	         // otp generator______________________________________________________
	         char [] otp = OTP.generateOTP(6);
		       StringBuffer str = new StringBuffer();
		            for(int i=0; i<otp.length;i++)
		            {
		              str.append(otp[i]);
		            }
		            msg.setSubject("This is Regarding Password Change");
		            msg.setText("OTP for Change password is"+ " "+str);
		    //_______________________________________________________________

	         // Send message
	         Transport.send(msg);
	         System.out.println("Sent message successfully....");
	         return true;
	      } catch (MessagingException mex) {
	         mex.printStackTrace();
	      }
	      return false;
	}

}
