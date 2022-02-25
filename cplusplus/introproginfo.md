# Intro to Programming in C++ 
Important Note:   This document is aimed at intro to programming students at MSSM.  It presents a simplified subset of the c++ language and intentionally "glosses over" certain details.  Most notably, students work almost exclusively with the *string* class and we avoid using library functions that work with "c-style" null-terminated character strings.  Basically, we pretend that char* doesn't exist for as long as possible to avoid muddying the waters for beginning programmers.
# Vocabulary
## Type
*Type* is a concept in computer programming that indicates the possible values and operations supported by a variable, function parameter, literal, or expression.  Examples of some basic (primitive) types in c++ include: int, double, string, bool, and char.   

As an example, if something has type *int*, we know that it can hold positive or negative integral values, and that it supports a variety of arithmetic operations such as addition, subtraction, multiplication, and so on.
## Value
Literals, expressions, and variables have values.  The *Type* tells you what values are possible, and what operations can be done on those values.  For example, in c++ a *double* variable can hold numbers in the range +- 1x10^308 with about 15 decimal places of precision.
## Name/Identifier
A *name* or *identifier* gives the programmer a way to refer to a particular variable or a function later on in the program.  Names in C++ consist of letters, numbers, and the underscore _ character.  Spaces are not allowed in names.
## Object
The term Object means a lot of things in computer science.  At this point, just think of it as a thing with a reserved chunk of memory associated with it.  This memory is where the value of the object is stored.  The fact that it has memory associated with it is what allows the value of the object to be changed: a new value can be placed into the memory.
## Statement
A statement is a section of code that tells the computer to carry out some action.  It is a bit like a sentence in written human language.  In c++, a single line of code terminated by a semicolon is a statement.  In addition, larger chunks of code are also considered statements, such as  conditional (if/else, or switch) statements, loops, or blocks of code enclosed in "curly braces"  
## Expression
An expression is any combination of literals, variables, operators, and function calls that can be *evaluated* (turned into a value).  The basic characteristics of an expression that you should remember are that it:
 - has a Type
 - can be evaluated (and therefore has a value)
 
 Examples:
```
	3*x + 4        // type int (assuming x is int)
	7              // type int,    value 7
	sin(4*angle)   // type double (because the sin function
	               //    return type is double)
	7/10           // type int,    value 0
	3.4/10         // type double, value 0.34
```

## Variable
A variable in computer science has these four defining characteristics:
A variable: 
- has a Type 
- has a Value
- has a Name (aka Identifier)
- is an Object (has an area of memory/storage associated with it)

Examples:
```
	int x = 3;      // x is a variable of type int
	                // it has been assigned the value 3

	double y{10.4}; // y is a variable of type double
	                // it has been initialized with the
	                // value 10.4
	
	vector<string> names;  // names is a variable of type 
	                       //   "vector of strings"
	                       // it has the default value of
	                       // "empty vector"
```
	
## Literal
A *literal* is a way to specify a single, fixed value in a program.  The *type* of the value is indicated by the presence (or absence) of certain symbols such as quotation marks.   The to basic characteristics to remember about a literal are:

- Type
- Value

Examples:
```
	10			type: int     value: 10
	"Hello"     type: string  value: Hello
	'x'         type: char    value: x
	3.4         type: double  value: 3.4
```
# C++ Syntax
## Statements
### Declaring Variables
```

int x = 3;  // both of these statements are equivalent
int x{3};   // and both declare AND initialize the variable x

double y;   // this declares y, but does not initialize
            // the value.  In almost all cases, you should
            // initialize variables.  A notable exception is
            // when you immediately follow the declaration
            // with "cin >> y"

string s;   // "non-primitive" types such as strings and vector
			// don't need to be explicitly initialized, since
			// they are automatically set to a default
			// value
```

### Assignment Statements
An assignment statement is used either to initially set or to update the value of a variable.   A single "Equals" sign is used for assignment.  Examples:
```
	x = 100;
	name = "Bob";
	total = average({1, 7, 10, 20});
```
### Input and Output Statements
*cin* and *cout* are used to read and write text to the console or terminal window.  *cin* and *cout* are "stream" objects.  

The operators << and >> are the stream insertion and extraction operators.  In class I normally refer to them as the stream output and stream input operators.   
```
	cout << "Hello World" << endl;   // send the string "Hello World" to the 
	                                 // output window, followed by a "newline" character

    // to read a value from the user...
	double x;    // first create a variable to hold the value
	cin >> x;    // then read into that variable
```
### Conditional Statement:  If  and If/Else
And *if statement* can be used to execute (run) a statement or set of statements if a certain condition is true.   An *if* statement can include an *else clause* which contains statements to be executed if the condition is **not** true.   The basic form of an *if* statement is as follows:
```
	if (condition) {
		... these statements are run if the condition is true
	}
```
or
```
	if (condition) {
		... these statements are run if the condition is true
	}
	else {
		... these statements are run if the condition is false
	}
```
Note: although the "curly braces" are not strictly required by c++ if there is only a single statement in an *if* or *else*, in the introduction to programming class it is expected that students will **always** use curly braces.  This is a commonly reco

The *condition* of an *if* statement can be any expression whose value is of type bool.  In other words, it is a "true/false" question.    Often, the condition of an *if* statement will use one or more of the *conditional operators*:

|conditional operator|name/meaning|
|--|--|
| == |Equality (Equals)  |
| < | Less Than |
| > | Greater Than |
| <= | Less than or Equals |
| >= | Greater than or Equals |
| != | Inequality (Not Equals) |

Examples:
```
	if (x < 10) {
		// do something
	}

	if (name == "Bob") {
		// do something
	}
```
Note that a single "equals sign" (=) is the *assignment operator* **not** the test for equality.

More complex conditions can be created by using the *logical operators* to combine conditions.
|logical operator|name/meaning|
|--|--|
|&&| and |
| \|\| | or |
| ! | not |

Examples:
```
	if (x > 50 && y < 100) {
		// do this if x is in the range 51 to 99 (assuming x is an integer)
	}
	
	if (answer == "yes" || answer == "ok") {
		// do this if answer is either "yes" or "ok"
	}
```
### Looping Statement:  while
The *while* statement allows a statement or block of statements to be executed multiple times for as long as a condition is true.  The basic form of a *while* statement looks almost the same as an *if* statement.