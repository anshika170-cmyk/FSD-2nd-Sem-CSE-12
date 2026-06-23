package com.example.student;  
// Model class representing Student entity 
public class Student {      
    private int id;    
     private String name;     
     private String course;      
     // Default constructor     
    public Student() {   

      }      // Parameterized constructor     
    public Student(int id, String name, String course) {        
         this.id = id;         
         this.name = name;         
         this.course = course;    
          }      // Getter and Setter methods     
        public int getId() {        
             return id;    
              }      public void setId(int id) {         
                this.id = id;   
                  }       
                  public String getName() {         
                    return name;    
                     }     
                      public void setName(String name) {         
                        this.name = name;    
                         }       
                         public String getCourse() {        
                             return course;   
                               }     
                                public void setCourse(String course) {        
                                     this.course = course;    
                                      } 
                                      }       