This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you should run:

1. `npm install`
2. `npm start`

Note: In case of 'npm install' failure you can use 'yarn install' instead  

Run the app in the development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see lint errors in the console if any.

### Task
Implement validation of Form.js according to the following rules
1. When submitting the form, you must validate each field. Each field must be filled.
2. Firstname and lastname should not be longer than 30 symbols.
3. Errors for all fields should be reported together, not one at a time.
4. Validation should occur after form submission (button 'Save' is pressed)

Errors checked by the `validateForm` method should be written to the `validationMessages` variable. This part of code shouldn't change.
The following validation error texts are possible:
1. `The {field} is required` - where `{field}` one of: `First Name`, `Last Name`, `DOB`, `Gender`
2. `The {field} should not be longer than 30 symbols` - where `{field}` one of: `First Name`, `Last Name`

**Warning! Other messages are not accepted!**

Note: Return a proper validation message.
