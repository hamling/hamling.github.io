#include <iostream>

using namespace std;

class Animal {
public:
    virtual ~Animal();
    virtual string species() = 0;
    virtual string description() = 0;
};

Animal::~Animal()
{
}

class Cat : public Animal {
private:
    int lives;
public:
    Cat(int numLives);
    string species() override;
    string description() override;
};

Cat::Cat(int numLives) : lives{numLives}
{
}

string Cat::species() {
    return "Cat";
}

string Cat::description() {
    return species() + " with " + to_string(lives) + " lives";
}

class Dog : public Animal {
    bool floppy;
public:
    Dog(bool floppy);
    string species() override;
    string description() override;
};

Dog::Dog(bool floppy) : floppy{floppy}
{
}

string Dog::species() {
    return "Dog";
}

string Dog::description() {
    return species() + " with " + (floppy ? "Droopy" : "Pointy") + " ears";
}


void printDescription(Animal& animal)
{
    cout << animal.description() << endl;
}

int main()
{
    Dog fido{false};
    Cat felix{3};

    printDescription(fido);
    printDescription(felix);

    return 0;
}
