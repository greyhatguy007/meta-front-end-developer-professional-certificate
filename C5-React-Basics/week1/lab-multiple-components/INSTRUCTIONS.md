## Task

You've learned that components in React allow for modularity and reuse, with the ability to make data more dynamic by passing it from the parent to the child using props.

In this exercise, you'll render one component multiple times, to practice using different props and observing what exactly "reusing" components means.


## Instructions

### **Step 1**

This task's starting point is the App component's h1 element that reads: "Task: Add three Card elements". 

However, there is no Card component's JS file in this starting code. Thus, the first task is to add a `Card.js` file, and inside of that file, declare a `Card` function.

### **Step 2**

Inside the `Card.js` file's `Card` function, add a `return` statement with two parentheses after it, to allow the `return` statement to spread onto several lines.

### **Step 3** 

Inside the `return` statement, add a wrapping `div` element.

### **Step 4** 

Inside the wrapping `div` element, add an `h2` element, and under it, an `h3` element.

### **Step 5** 

Inside the `h2` element you've already added, add the JSX expression of: `{props.h2}`.

### **Step 6** 

Inside the `h3` element you've already added, add the JSX expression of: `{props.h3}`.

### **Step 7** 

Don't forget to add the line of code that reads `export default Card` at the very bottom of the Cards.js file.

### **Step 8** 

Back inside the App component, import the `Card` component.

### **Step 9** 

Inside the App component's `return` statement, under the `h1` element, add three `<Card />` JSX elements.

### **Step 10** 

Add the `h2` prop to the first `<Card />` element, like this: `h2="First card's h2"`.

### **Step 11** 

Add the `h3` prop to the first `<Card />` element, like this: `h3="First card's h3"`.

### **Step 12** 

Add the `h2` and `h3` props to the second `<Card />` element, with the `h2` reading: "Second card's h2", and the `h3` reading "Second card's h3".

### **Step 13** 

Add the `h2` and `h3` props to the third `<Card />` element, with the `h2` reading: "Third card's h2", and the `h3` reading "Third card's h3".

### **Step 14** 

Add the `className` attribute the Card.js file's `Card` function's `return` statement's wrapping `div` element.

### **S​tep 15**

Save and view the app in the browser.

### **Tip**

If you’re having trouble with this lab, please review the "Expressions as props" video lesson item.
