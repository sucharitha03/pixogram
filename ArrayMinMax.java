import java.util.Arrays;
import java.util.Scanner;

public class ArrayMinMax {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n;
		Scanner sc  =new Scanner(System.in);
		System.out.println("enter no of elements");
	
		
		n=sc.nextInt();
		System.out.println("enter elements");
		
		
		
		int a[]  = new int[n];
		int sorta[]  = new int[n];
		for(int i=0;i<n;i++) {
			a[i] = sc.nextInt();
		}
		Arrays.sort(a);
		
			 System.out.println("Min is" + a[0]);
			 System.out.println("Max is" + a[n-1]);
		
	}
}

