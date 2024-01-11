class Person {
    constructor(name){
        this.name = name;
    }

    sayMyName() {
        return `Hellooo, my name is ${this.name}!`;
    }
}

module.exports = {
    Person,
};
