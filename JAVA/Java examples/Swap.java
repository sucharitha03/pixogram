import java.util.Scanner;

public class Swap {
	public static void main(String args[])
	{
		int a,b;

		System.out.println("enter num1 :");
		Scanner sc=new Scanner(System.in);
		System.out.println("enter num2 :");
		a=sc.nextInt();
		b=sc.nextInt();
		System.out.println("value of a:" +a);
		System.out.println("value of b:"+b);
		a=a+b;
		b=a-b;
		a=a-b;
		System.out.println("value of a:"+ a);
		System.out.println("value of b:"+ b);
	}

}
