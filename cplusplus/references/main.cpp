#include <iostream>

using namespace std;

void func1(int x)
{
    cout << "In func1, x is: " << x << endl;
    cout << "Adding 10" << endl;
    x = x + 10;
    cout << "Now x is: " << x << endl;
}

void func2(int& x)
{
    cout << "In func2, x is: " << x << endl;
    cout << "Adding 10" << endl;
    x = x + 10;
    cout << "Now x is: " << x << endl;
}


int main()
{
    int x{10};  // create a local variable x and initialize its value to 10.
                // This creates an "object"... a chunk of memory big enough to hold an integer

    int& z{x};  // create a variable z that is a reference to x.
                // This doesn't create a new object, but instead z is just another name for the same object

    cout << "x = " << x << endl; // this will output 10
    cout << "z = " << z << endl; // this will output 10

    z = 5;

    cout << "x = " << x << endl; // this will output 5
    cout << "z = " << z << endl; // this will output 5

    cout << "------- before func 1 x is " << x << endl;

    func1(x);

    cout << "------- after  func 1 x is " << x << endl;

    func2(x);

    cout << "------- after  func 2 x is " << x << endl;

    return 0;
}
