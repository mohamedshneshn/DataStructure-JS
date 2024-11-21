/*

JavaScript Classes
------------------
- JavaScript classes are templates for JavaScript objects.
- They are used to create objects.

- Example:
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
    }

    mycar = new Car("Ford");

    console.log(mycar.carname);
    // Ford

- In the above example, the Car class is defined with a constructor method that takes a parameter brand.
- The constructor method is called when a new Car object is created.
- The carname property is set to the value of the brand parameter.


- Example:
    class Car {
        constructor(brand) {
            this.carname = brand;
        }

        present() {
            return 'I have a ' + this.carname;
        }
    }

    mycar = new Car("Ford");

    console.log(mycar.present());
    // I have a Ford


- In the above example, the Car class is defined with a present method.
- The present method returns a string with the carname property.


--------------------------------------------------------------------------------------------
- JavaScript Class Inheritance
------------------------------
- JavaScript classes can inherit from other classes.
- The extends keyword is used to create a class that inherits from another class.

- Example:
    class Car {
        constructor(brand) {
            this.carname = brand;
        }

        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        show() {
            return this.present() + ', it is a model';
        }
    }

    mycar = new Model("Ford");

    console.log(mycar.show());
    // I have a Ford, it is a model

- In the above example, the Model class inherits from the Car class using the extends keyword.
- The show method in the Model class calls the present method from the Car class.


-super() method:
---------------
- The super() method is used to call the constructor of the parent class.

- Example:
    class Car {
        constructor(brand) {
            this.carname = brand;
        }

        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }

        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    mycar = new Model("Ford", "Mustang");

    console.log(mycar.show());
    // I have a Ford, it is a Mustang 

- super() method also used to call the parent class methods in the child class.


- Example:
    class Car {
        constructor(brand) {
            this.carname = brand;
        }

        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }

        present() {
            return  ' it is a ' + this.model;
        }

        show() {
            return super.present() + ', it is a ' + this.model;
        }
    }

    mycar = new Model("Ford", "Mustang");

    console.log(mycar.show());
    // I have a Ford, it is a Mustang

-Note : if there is a method with the same name in both the parent and child class, 
        the method in the child class will override the method in the parent class.
        but we can call the parent class method using the super keyword.

--------------------------------------------------------------------------------------------
How to create a JavaScript class using a function?
--------------------------------------------------

- JavaScript classes can also be created using a function.

- Example:
    function Car(brand) {
        this.carname = brand;
    }

    mycar = new Car("Ford");

    console.log(mycar.carname);
    // Ford

- In the above example, the Car function is used to create a class.
- The new keyword is used to create a new instance of the Car class.


- Example:
    function Car(brand) {
        this.carname = brand;
    }

    Car.prototype.present = function() {
        return 'I have a ' + this.carname;
    }

    mycar = new Car("Ford");

    console.log(mycar.present());

- In the above example, the present method is added to the Car class using the prototype property.


Example:
--------
function Car(brand) {
    this.carname = brand;
}

Car.prototype.present = function() {
    return 'I have a ' + this.carname;
}

Car.prototype = {
    present: function() {
        return 'I have a ' + this.carname;
    }
}

mycar = new Car("Ford");

console.log(mycar.present());
// I have a Ford
--------------------------------------------------------------------------------------------------

    

   



       



*/