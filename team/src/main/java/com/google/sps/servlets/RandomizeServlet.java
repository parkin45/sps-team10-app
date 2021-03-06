package com.google.sps.servlets;
import java.util.ArrayList;
import java.util.List;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Random;
/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/random")
public class RandomizeServlet extends HttpServlet {
    private ArrayList<String> suggestions = new ArrayList<>();
   

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String myHero = "My Hero Academia";
    String demonSlayer = "Demon Slayer";
    String hunter = "Hunter x Hunter";
    String psychic = "Saiki K";
    suggestions.add(myHero);
    suggestions.add(demonSlayer);
    suggestions.add(hunter);
    suggestions.add(psychic);
    response.setContentType("text/html; charset=UTF-8");
   Random random = new Random();
    String suggest = suggestions.get(random.nextInt(suggestions.size()));
    System.out.println(suggest);
    response.getWriter().println(suggest); 
}
/*
 @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String name = getParameter(request, "userName", "");
    String comment = getParameter(request, "comment", "");
  
    // Respond with the result.
    response.setContentType("text/html;");
    comments.add(comment+"            --"+name);
    response.sendRedirect("index.html");
    response.getWriter().println(comments);
  }
  */

  /**
   * @return the request parameter, or the default value if the parameter
   *         was not specified by the client
   */
  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }
}
