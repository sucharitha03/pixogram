package com.cts.library;

public class Arrayimpl {
  
public double average(int n) 
   {
	   int arr[]=n;
	   double avg=0;
	   int sum=0,length,count=0;
	   for(int i=0;i<arr.length;i++)
	   {
		   if(arr[i]%5==0)
		   {
			   sum +=arr[i];
			   count++;
		   }
	   }
	
	return count;
	
	   
   }
   public int minimum() {
	   int ar[]=s ,length,pos=0;
	   int min=ar[0];
	   for(int i=0;i<ar.length;i++)
	   {
		   if(min >ar[i])
		   {
			   min=ar[i];
			   pos=i;
		   }
	   }
	return pos;
	   
   }
 
}

