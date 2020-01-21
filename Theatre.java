package com.cts.training.enums;

public enum Theatre {
	PLATINUM,
	GOLD,
	SILVER;


 public int ticketrate;
 private Theatre()
 {
	 this.ticketrate=100;
 }
	

	public  int getticketrate()
	{
		if(this==PLATINUM)
		return this.ticketrate=500;
		else if(this==GOLD) {
		
			return this.ticketrate=300;
		}
		else if(this==SILVER)
		{
	      return this.ticketrate=200;
		}
			
		else
			return this.ticketrate;
	}
}
	
