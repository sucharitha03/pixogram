package javaday2;
 class Shape
{
	double length,area;
	int show();
	
}

class Test 
{
	public Static void main(String args[])
	{
		Rectangle rc=new Rectangle();
		System.out.println("area is:"+rc.show());
		Circle cr=new Circle();
		System.out.println("area is:"+cr.show());
		Square sq=new Square();
		System.out.println("area is:"+sq.show());
		
	}

}
