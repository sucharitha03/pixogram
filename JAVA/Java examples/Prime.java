import java.util.Scanner;

public class Prime {
	public static void main(String args[])
    {
        int num, i, count=0;
        Scanner sc= new Scanner(System.in);
		
        System.out.print("enter number : ");
        num = sc.nextInt();
		
        for(i=2; i<num; i++)
        {
            if(num%i == 0)
            {
                count++;
                break;
            }
        }
        if(count == 0)
        {
            System.out.print("prime number");
        }
        else
        {
            System.out.print(" not a prime number");
        }

}
}
