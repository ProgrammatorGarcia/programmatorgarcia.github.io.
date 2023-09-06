<!DOCTYPE html>
<html>
<title>
Veritas Logic & Computation
</title>
<body style="background-color: black;">
<h1 style="color:white;">Veritas Logic & Computation Assignment 1   
    <div style = 
    "position: absolute;
    top: 10px;
    right: 10px;">

    <img src="https://veritasprep.greatheartsamerica.org/wp-content/uploads/sites/16/2016/12/Veritas_crest_1C.png"
    width="150px",
    height=" auto"/>
    
</div> 
</h1>
<p style="color:white;">
/** <br>
 * Conditional_Explore.java <br>
 * Code for students to begin investigating conditional operators and branching in Java.<br>
 * Students will determine the Java implementation for less than, less than or equal, greater than, <br>
 * greater than or equal, equal, not equal, and, or, and not, as well as conditional branching statements <br>
 * <br>
 * @author Roy Chancellor <br>
 * @version 1.0 (2019-01-26) <br>
 */ <br>

import java.util.Scanner;  // needed for Scanner to get user input  <br>
<br>
public class Conditional_Explore <br>
{ <br> 
    public static void main(String[] args) <br>
    { <br>
        //NEED TO ADD ADDITONAL STATEMENTS, THEN THE CONDITIONAL BRANCHING EXAMPLES <br>
        <br>
        double a, b, swap;  //double variables can store decimal values <br>
        Scanner keys = new Scanner( System.in );  //open a scanner for keyboard input from the user<br>
        <br>
        //prompt user for input and receive it from the keyboard <br>
        System.out.println("Enter any number (positve, negative, integer, or decimal):  "); <br>
        //get the first number from the user in Java <br>
        a = keys.nextDouble();  //parses user input and finds a floating point value in the user-entered teat <br>
        <br>
        System.out.println("\nEnter a second number (positve, negative, integer, or decimal):  "); <br>
        //get the second number from the user in Java <br>
        b = keys.nextDouble(); <br>
        keys.close();  //close the scanner <br>
        <br>
        System.out.println("\n\n"); <br>
         <br>
        //print the results of several logical comparisons<br>
        System.out.println("Results of logical comparisons"); <br>
        System.out.println(a + " > " + b + " \t---->\t" + (a > b)); <br>
        System.out.println(a + " < " + b + " \t---->\t" + (a < b)); <br>
        System.out.println(a + " >= " + b + " \t---->\t" + (a >= b)); <br>
        System.out.println(a + " <= " + b + " \t---->\t" + (a <= b)); <br>
        System.out.println(a + " = " + b + " \t---->\t" + (a == b)); <br>
        System.out.println(a + " not= " + b + " \t---->\t" + (a != b)); <br>
        <br>
        if(a > b) {  //swap a and b so that a < b <br>
            swap = a; <br>
            a = b; <br>
            b = swap; <br>
        } <br>
        
        //print the results of several compound logical statements <br>
        System.out.println("\nResults of compound logical statements"); <br>
        System.out.println("\t\tx ---->\t" + (a-1) + "\t" + a + "\t" + (a+1) + "\t" + (b-1) + "\t" + b + "\t" + (b+1)); <br>
        //make a table of results for a < x < y and a <= x or x > b <br>
        System.out.print(a + " < x <= " + b + "\t\t" + ((a-1) > a && (a-1) <= b) + "\t" + (a > a && a <= b) + "\t" + ((a+1) > a && (a+1) <= b)); <br>
        System.out.println("\t" + ((b-1) > a && (b-1) <= b) + "\t" + (b > a && b <= b) + "\t" + ((b+1) > a && (b+1) <= b)); <br>
        System.out.print("x <= " + a  + " or x > " + b + "\t" + ((a-1) <= a || (a-1) > b) + "\t" + (a <= a || a > b) + "\t" + ((a+1) <= a || (a+1) > b));  <br>
        System.out.println("\t" + ((b-1) <= a || (b-1) > b) + "\t" + (b <= a || b > b) + "\t" + ((b+1) <= a || (b+1) > b)); <br>
         <br>
        //perform examples of conditional branching <br>
        if(a > 0 && b > 0) <br>
	{ <br>
            System.out.println("\nEach of your numbers is positive."); <br>
	} <br>
        else if(a < 0 && b < 0) <br>
	{ <br>
            System.out.println("\nEach of your numbers is negative."); <br>
	} <br>
        else if((a < 0 && b > 0) || (a > 0 && b < 0)) <br>
	{ <br>
            System.out.println("\nOne of your numbers is negative and the other is positive."); <br>
            if(a < 0) <br>
		{ <br>
                System.out.println(a + " is the negative number."); <br>
		} <br>
            else <br>
		{ <br>
                System.out.println(b + " is the negative number."); <br>
		} <br>
        } <br>
    }  //end of main <br>
}  //end of Conditional_Explore <br>
   </p>
</body>
</html>
