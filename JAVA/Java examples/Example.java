import java.util.Scanner;

public class Example {
public static void main(String args[])
{
    String age;
    String name;
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter name:");
    name=sc.nextLine();
    if(!name.matches("[a-z A-Z_]+")) 
    
        System.out.println("Invalid name");
        
    
    System.out.println("Enter age:");
    age=sc.next();
    if (!age.matches("[0-9]+"))
        System.out.println("Invalid age");
   
    System.out.println("Hello my name is:" +name +"my age is:" +age);
    
}
}
