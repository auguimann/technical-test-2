So i found several bugs in the app...

- First of all, when creating an user using the "Create user" button (not the sign up one), there was no explanation on what field was wrong. Not so user friendly.
I fixed it by adding ERRORS_CONSTS and then throwing the good message in a toast to the user. Also added some regex checking for the email format. I didn't implement any security features like countering SQL Injections or XSS since there was no database and it was not really important in the case of the test (but i thought about doing it, just so you know !)

- Then, when creating an user with the good attributes, the username wasn't displaying correctly in the corresponding field. That is because the POST form when creating an user was sending the attribute "username" to the "database" creation but the field that the app was trying to read is only "name". I fixed it by changing "name" to "username"

- The update button wasn't working because the "onClick" attribute to submit the form was "onChange", i fixed it and then it worked.

- Finally, when consulting a project, there was an error when trying to read any attributes of the object project. That was becasue the project object was in an array, to access it, we had to change it by passing project[0] to the View (this is not a real solution as mentionned in the comments but i had no more time to implement it correctly)

If I forgot to comment some other fixed bugs, just check the files I edited, I should have sufficiently commented for you to understand what I have done :)