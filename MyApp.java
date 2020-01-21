package com.cts.training.client;

import com.cts.training.enums.*;

public class MyApp {
	public static void main(String args[]) {
		Theatre th=Theatre.PLATINUM;
		System.out.println(th);
		System.out.println("ticket rate for PLATINUM:" +Theatre.PLATINUM.getticketrate());
		System.out.println("ticket rate for gold:" +Theatre.GOLD.getticketrate());
		System.out.println("ticket rate for silver:" +Theatre.SILVER.getticketrate());
		
		
		
	}

}
