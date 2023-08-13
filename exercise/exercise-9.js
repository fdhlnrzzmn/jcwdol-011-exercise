/* Create a program to calculate total salary based on employee type
There are two types of employee : full-time & part-time
Salary for full-time employee :
IDR 100.000 / hour
IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
Salary for part-time employee :
IDR 50.000 / hour
IDR 30.000 / hour, if the number of working hours per day is more than 6 hours

Requirements :
Create an Employee as a parent class
Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
Create a method in that class to add working hour per day
Create a method in that 
Use Inheritance Concept */
{
    class Employee{
        constructor(name){
            this.name = name;
            this.workingHour = 0;
            this.salary = 0;
        }
    }
    
    class FullTime extends Employee{
    
        constructor(name){
            super(name);
        }

        addWorkingHour(hours){
            this.workingHour += hours;
        }
    
        countSalary(){
            this.salary = this.workingHour > 6 ? this.workingHour * 75000 : this.workingHour * 100000;
            return this.salary;
        }
    }
    
    class PartTime extends Employee{
        constructor(name){
            super(name);
        }

        addWorkingHour(hours){
            this.workingHour += hours;
        }
    
        countSalary(){
            this.salary = this.workingHour > 6 ? this.workingHour * 30000 : this.workingHour * 50000;
            return this.salary;
        }
    }
    
// Eksekusi

    const luffy = new FullTime("Luffy");
    luffy.addWorkingHour(9);
    luffy.countSalary();
    console.info(luffy);
    
    const ace = new PartTime("Ace");
    ace.addWorkingHour(2);
    ace.countSalary();
    console.info(ace);
}

/* Specifications :
Create a shooting game between two player
Each player has three properties : name, health and power
Each player will take turns to shooting
Before shooting, players get a chance to get random items (health +10 or power +10)
The game will continue until one of the players has health < 0
Requirements :
Create ShootingGame & Player class
ShootingGame class :
constructor(player1, player2) → player objects as a parameter
getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
start() → start shooting games
Player class :
Property → name, health (default 100), power (default 10)
hit(power) → subtract player health
useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
ShootingGame start() function flow :
In every turn :
Show each player status before shooting
Get random item for each player before shooting
Show each player */
