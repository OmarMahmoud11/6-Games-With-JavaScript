# 6-Games-With-JavaScript
6 games (tic-tac-toe - chess - connect_4 - 8_queens - sudoku - checkers) are implemented with JS


 
	The application of main features of object-oriented programming(java script).
•	Inheritance :
o	Inheritance enables us to define a class that takes all the functionality from a parent class and allows you to add more. Using class inheritance, a class can inherit all the methods and properties of another class.
o	Since a child class can inherit all the functionalities of the parent's class, this allows code reusability.
o	Once a functionality is developed, you can simply inherit it. No need to reinvent the wheel. This allows for cleaner code and easier to maintain.
o	Since you can also add your own functionalities in the child class, you can inherit only the useful functionalities and define other required features.
o	In our project, we used an abstract class "Game Engine" and make it the parent of the games. Using it we used some methods in other games such as:
	while loop()  The Game Engine depends on this function as it creates the algorithms of the games as it controls the controller and the draw of each game.
	Draw grid()  Take the width, height, and colors of the game and create the grid.
	take input()  Take the input of the next move and send it to the controller.
 

o	There are some functions and features that the games define to help their functionality such as:
	Controller()  Check if the next move is valid or not.
	Draw()  Draw the new state of the game using a 2D array that has the new state.
	Init() To create the first state of the game and draw the grid and pieces.
 



•	Encapsulation:
o	Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it.
o	In our project to achieve encapsulation:
	We didn't use variables or public state but we create the state in functions and send it to other functions as a parameter so the user can't modify it.
	Make the main functionality of the Game Engine "While loop()" private.
  


