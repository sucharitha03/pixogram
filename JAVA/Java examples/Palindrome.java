import java.util.Scanner;

public class Palindrome {
	public static void main(String args[])
	{
		int rem,rev=0,n,temp;
		System.out.println("enter number: ");
		Scanner sc=new Scanner(System.in);
		 n=sc.nextInt();
		temp=n;
		while(n!=0)
		{
			rem=n%10;
		     rev=rev*10+rem;
		     n=n/10;
		
	    }
 if(rev==temp) 
	
	System.out.println(temp + "is palindrome");
	 
 
	
 else
 
	System.out.println(temp + "is not  palindrome");
 
}
}