import java.util.Scanner;
public class Factorial {
	

	   public static void main(String args[]){
		   int num,factorial;
	      
	      Scanner scanner = new Scanner(System.in);
	      System.out.println("Enter the number:");
	      
	       num = scanner.nextInt();
	      
	       factorial = fact(num);
	      System.out.println("Factorial  is: "+factorial);
	   }
	    static int fact(int n)
	   {
	       int res;
	       if(n==1){
	         return 1;
	       }
	       
	       res = fact(n-1)* n;
	       return res;
	   }
	}

