# Lab Instructions: Little Lemon Receipt Maker
 
> ### **Tips: Before you Begin**
> #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
> - View -> Editor Layout -> Two Columns
> - To view this file in Preview mode, right click on this README.md file and `Open Preview`
> - Select your code file in the code tree, which will open it up in a new VSCode tab.
> - Drag your assessment code files over to the second column. 
> - Great work! You can now see instructions and code at the same time. 
> - Questions about using VSCode? Please see our support resources here:  
> [Visual Studio Code on Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **To run your JavaScript code**
> - Select your JavaScript file
> - Select the "Run Code" button in the upper right hand toolbar of VSCode.  
> Ex: It looks like a triangular "Play" button. <br><br>

<br>

## Assignment Instructions

In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.
<br><br>

**Step 1:** In the function `getPrices()`, give it the parameter of `taxBoolean`.

**Step 2:** Inside the `getPrices()` function, code a for loop that will loop over all the objects inside the `dishData` array.

**Step 3:** Inside the for loop, declare a `finalPrice` variable, without assigning it a value.

**Step 4:** Still inside the for loop, add an if condition, checking that the `taxBoolean` is set to `true`. Inside the if block, multiply the following: * the price of the currently looped-over object from the `dishData` array, and * the tax value. Assign the multiplied value to the finalPrice variable.

**Step 5:** Right after the if condition, add an else if, checking if the value of `taxBoolean` is false. Inside this condition's block, assign the currently looped-over dish price property in the `dishData` array to the `finalPrice` variable.
<br><br>

**Step 6:** Code the `else` case, and inside of it, add two lines of code:

A console log of the string:  

- "You need to pass a boolean to the getPrices call!"  

- return (to "jump out" of the further function execution)
<br><br>

<b>Step 7:</b> After all the conditional's statements, but still inside the for loop, code another console log with four arguments:

1. The string `"Dish: "`

2. The value of currently looped-over dish object's name property

3. The string `"Price: $"`

5. The value of the `finalPrice` variable
<br><br>

**Step 8:** You're finshed with the `getPrices()` function, and now you're ready to code another function. Give the `getDiscount()` function, two parameters: the `taxBoolean` and the `guests` parameter. 

**Step 9:** Inside the `getDiscount()` function,  on the very first line of its body, invoke the `getPrices()` function, passing it the `taxBoolean` as an argument.

**Step 10:** On another line, you need to implement your defensive coding skills, and check that the type of the `guests` parameter is 'number' and  that the value of the guests variable is greater than zero and less than 30.  If all these conditions return true, code the body of the conditional as described in the next step. If they don't all return true, code the body of the else conditional as instructed in step 12.

**Step 11:** Inside the if statment, declare a new variable, named `discount`, and set it to 0. On the next line, add another if...else if: in the first if, you'll check that the value of the `guests` variable is less than 5. If that's the case, reassign the value of the discount variable to 5; 
- Inside the else if condition, check that the value of the guests variable is greater than or equal to 5 - if that's the case, reassign the discount variable to 10.
- Console log the following after closing your else-if statement: `'Discount is: $' + discount);`


**Step 12:** In the else condition, console log the following string: `'The second argument must be a number between 0 and 30'`. Since you've finished declaring both the `getPrices()` and the `getDiscount()` functions, you can now invoke the `getDiscount()` function several times, with various combinations of arguments, to check the behavior. <br>

Here are two examples: 
- `getDiscount(true, 2) `
- `getDiscount(false, 10)`

What happens when you don't pass-in any arguments?  

What happens when you pass values that are not expected?