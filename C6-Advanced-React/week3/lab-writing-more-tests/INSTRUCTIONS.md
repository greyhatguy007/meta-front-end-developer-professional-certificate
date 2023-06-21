# Instructions

## Task

You've learned about jest and react-testing-library to create automated tests for your components. Now it's time to write some of your own tests! 
Remember the Feedback form Little Lemon put together to gather feedback about their recipes? 
In a previous lesson, you were introduced to a test scenario where the app verified that users who provided less than a score of 5 could only submit their form if feedback was also provided.

In this exercise, you'll create two more test scenarios to verify the form submission works as expected:
1. User is able to submit the form if the score is lower than 5 and additional feedback is provided
2. User is able to submit the form if the score is higher than 5, without additional feedback

**Note:** Before you begin, make sure you understand how to work with the Coursera Code Lab for the [Advanced React course](https://www.coursera.org/learn/advanced-react/supplement/htaLX/working-with-labs-in-this-course).

## Steps

### **Step 1**
Open the `App.test.js` file.
There you'll encounter two new test scenarios that should be completed.

### **Step 2**
After writing the test scenarios, run the tests to verify they pass.
For that, execute the command `npm test` in the terminal.

### **Tip**
Explore the `FeedbackForm` component to understand the JSX it returns and how you can access the elements in the tests.
For more information about react-testing-library queries, check out the [documentation](https://testing-library.com/docs/queries/about).
