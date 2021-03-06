class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return console.log("Name :" + this.name + "\nWeight: " + this.weight);
    }
}

var objAnimal1 = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);
objAnimal1.toString();

var objAnimal2 = new Animal("Cat", 5.6);
objAnimal2.setName('Mouse');
objAnimal2.toString();