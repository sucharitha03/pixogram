import java.util.Scanner;
public class SampleQuiz {


	

	    //main method
	    public static void main(String[] args) {
	        //variable
	       
	        int a,b,c;
	       
	        int count=0;
	        
	        boolean s;
	        
	        Scanner scan = new Scanner(System.in);
	        System.out.println("do you want to play the quiz!? type true or false");
	        s = scan.nextBoolean();
	        
	        if(s) {
	        	//scanner for input options
	            
	            System.out.println("Q1) What is the capital of India?");

	            //choose capitals from these 3 options
	            System.out.println("1) Delhi\r\n" + 
	            		"2) Mumbai\r\n" + 
	            		"3) Chennai\r\n" + 
	            		"");
	            a = scan.nextInt();


	            if (a == 1) {
	                //if select wrong options
	                System.out.println(" you answer is correct");
	                a++;
	                count++;
	            }
	            else{
	            	System.out.println("Your answer is incorrect. Delhi is the right answer .");
	            }
	            
	            //Q2
	            System.out.println("Q2) Can we store the value \"dog\" in a variable of type int?");

	            
	            System.out.println("1) yes\r\n" + 
	            		"2) no\r\n" + 
	            		"");
	            b = scan.nextInt();

	            if (b == 2) {
	            	System.out.println("you are correct ");
	                b++;
	                count++;
	            }
	            else{
	            	System.out.println("Your answer is incorrect.");
	            }  
	            
	            //Q3
	            System.out.println("Q3) What is the result of 9+9/3?");
	            System.out.println("1) 5\r\n" + 
	            		"2) 12\r\n" + 
	            		"3) 15/3\r\n" + 
	            		"");
	            c = scan.nextInt();


	            if (c == 2) {
	            	System.out.println("Thats right");
	                c++;
	                count++;
	            }
	            else{
	            	System.out.println("Your answer is incorrect. 12 is the right answer.");
	            }
	            System.out.println(count + "  out of 3");
	        }
	        else {
	        	System.out.println("out of quiz"
	        			+ "");
	        }
	        
	    }

}
