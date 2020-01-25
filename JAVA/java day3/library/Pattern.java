package com.cts.library;

public class Pattern
{
 public void pattern1(int rows)
	 {
		for( int i=1;i<=rows;i++) 
		{
			for( int j=rows-1;j>=i;j--)
			{
				System.out.print("");
			}
			for(int k=i-1;k>=-(i-1);k--) 
			{
				System.out.print(i-Math.abs(k));
		    }
	   }
	 }
	public void pattern2(int rows)
	{
		for(int i=1;i<=rows;i++)
		{
		  for(int j=rows-1;j>=i;j--)
		    {
			  System.out.print("");
		    }
		  for(int k=1;k<=i;k++)
		  {
			  System.out.print(i);
		  }
		  System.out.println();
	    }

    }
}

