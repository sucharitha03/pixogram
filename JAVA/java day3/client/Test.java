package com.cts.client;
import java.util.Scanner;

import com.cts.library.*;

public class Test 
{
  public static void main(String args[])
  {
	
	System.out.print("1.Pattern");
	System.out.print("2.Calculate");
	System.out.print("3.Arrayimpl");
	Scanner sc=new Scanner(System.in);
	int choice=sc.nextInt();
	switch(choice)
	  {
	     case 1:
		    System.out.println("enter rows");
		    int rows=sc.nextInt();
			Pattern pat=new Pattern();
			pat.pattern1(rows);
			pat.pattern2(rows);
			break;
		 
	     case 2:
		    System.out.println("enter num");
		    int num=sc.nextInt();
		    Calculate cc=new Calculate();
		    cc.reverse(num);
		    cc.expand(num);
		    cc.numtowords();
		    break;
	     case 3:
	    	 System.out.println("enter array size");
	    	 int arr=sc.nextInt();
	    	 System.out.println("enter array elements");
	    	 for(int i=0;i<arr;i++)
	    		 arr[i]=sc.nextInt();
	    	 Arrayimpl imp=new 	Arrayimpl();
	    	 imp.average(n);
	    	 imp.minimum();                                                                                                   
	    	                                                                                     
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	
        }
   }
}
