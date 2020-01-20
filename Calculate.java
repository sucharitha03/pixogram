package com.cts.library;

public class Calculate {
	public int reverse(int n) 
	{
		int rev = 0;
        while(n != 0) {
            int digit = n % 10;
            rev = rev * 10 + digit;
            n/= 10;
        }
		return rev;
        
	}
		
		
	public void expand(int n)
	 {
		
	 
	 }


	

	public void numtowords() {
		// TODO Auto-generated method stub
		
	}

}
