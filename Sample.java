import java.util.Arrays;
	import java.util.Scanner;

public class Sample {
	
	

		public static void main(String[] args) {
			// TODO Auto-generated method stub
			int n;
			Scanner sc  =new Scanner(System.in);
			
			System.out.println("enter no of elements");
			n=sc.nextInt();
			System.out.println("enter  elements");
			
			
			float [] a = new float[n];
			float [] sorta = new float[n];
			for(int i=0;i<n;i++) {
				a[i] = sc.nextInt();
			}
			Arrays.sort(a);
			 System.out.printf("sorted arr[] : %s", Arrays.toString(a));
			
		}

		
	}
  

