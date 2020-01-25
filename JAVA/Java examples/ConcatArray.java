import java.util.Arrays;

public class ConcatArray {
	public static void main(String args[])
	{
		int arr1[]= {1,2,3,4};
		int arr2[]= {5,6,7,8};
		int aLen=arr1.length;
		int bLen=arr2.length;
		int resLen[]=new int[aLen+bLen];
		System.arraycopy(arr1, 0, resLen, 0, aLen);
        System.arraycopy(arr2, 0, resLen, aLen, bLen);
        System.out.println(Arrays.toString(resLen));
		
	}

}
