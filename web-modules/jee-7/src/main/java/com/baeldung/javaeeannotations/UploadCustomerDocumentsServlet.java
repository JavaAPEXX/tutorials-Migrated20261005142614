package com.baeldung.javaeeannotations;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

@WebServlet(urlPatterns = { "/uploadCustDocs" })
@MultipartConfig(
  fileSizeThreshold = 1024 * 1024 * 20,
  maxFileSize = 1024 * 1024 * 20,
  maxRequestSize = 1024 * 1024 * 25,
  location = "D:/custDocs"
  )
public class UploadCustomerDocumentsServlet extends HttpServlet {

    protected void doPost(
     HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        for (Part part : request.getParts()) {
            part.write("myFile");
        }
      
        PrintWriter writer = response.getWriter();
        writer.println("<html>File uploaded successfully!</html>");
        writer.flush();
    }

}
