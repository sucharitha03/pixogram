import java.util.Scanner;

public class Gcd {
	public static void main(String args[])
	{
		int n1,n2;
		System.out.println("enter num1 :");
		Scanner sc=new Scanner(System.in);
		System.out.println("enter num2 :");
		
		n1=sc.nextInt();
		n2=sc.nextInt();
		while(n1!=n2) {
			if(n1>n2)
			n1-=n2;
			else
				n2-=n1;
				
		}
		
		System.out.println(" gcd :" + n1);
		
		
		}
	
	

}
