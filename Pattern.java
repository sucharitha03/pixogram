
public class Pattern
{
	
	public static void main(String[] args)
	{
	   int n=5                                                                              ;

	   int i,j,k;
	   for(i = 1; i<= n; i++)
	{
	  for(j = n-1; j >= i; j--)
	   {
	    System.out.print( " ");
	}
	for(k=i-1;k>=-(i-1);k--)
	{
	System.out.print(i-Math.abs(k));
	}
	System.out.println();
	}
	}
}