#include <iostream>

using namespace std;

class Animal {
public:
    virtual ~Animal();
    virtual string species() = 0;
    virtual void makeNoise() = 0;
};

Animal::~Animal()
{
}

class Cat : public Animal {
public:
    string species() override;
    void makeNoise() override;
};

string Cat::species()
{
    return "Cat";
}

void Cat::makeNoise()
{
    cout << "The " << species() << " goes meow" << endl;
}

class Dog : public Animal {
public:
    string species() override;
    void makeNoise() override;
};

string Dog::species()
{
    return "Dog";
}

void Dog::makeNoise()
{
    cout << "Bark Bark said the " << species() << endl;
}

// Note:  this function takes a reference to a base class
// you can pass in any class derived from animal, and it will
// call the appropriate version of the makeNoise method
// for that class
void multipleNoises(Animal& animal, int numberOfNoises)
{
    for (int i = 0; i < numberOfNoises; i++) {
        animal.makeNoise();
    }
}

int main()
{
    Dog fido;
    Cat felix;

    multipleNoises(fido, 3);
    multipleNoises(felix, 7);

    return 0;
}
