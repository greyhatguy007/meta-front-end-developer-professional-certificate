class Drone {
    constructor(company, maxspeed, cost, color) {
        this.company = company;
        this.maxspeed = maxspeed;
        this.cost = cost;
        this.color = color;
    }
    speed = 0;
    onstatus = false;

    togglestatus() {
        this.onstatus = !this.onstatus;
        console.log(`Current Drone Status: ${this.onstatus}`)
    }

    setspeed(speed) {
        this.speed = speed;
        console.log(`Current Speed : ${this.speed}`);
    }

    increasespeed(x) {
        this.speed += x;
        console.log(`Current Speed : ${this.speed}`);
    }

    decreasespeed(x) {
        this.speed -= x;
        console.log(`Current Speed : ${this.speed}`);
    }

}

let drone1 = new Drone('hitachi', 200, 520.65, 'black');
console.log(drone1.speed)
drone1.togglestatus();
drone1.togglestatus();
drone1.setspeed(400);
drone1.increasespeed(20);
drone1.decreasespeed(120);
drone1.decreasespeed(120);

let result = new Map();
let dronekeys = Object.keys(drone1);
dronekeys.forEach(function(key) {
    result.set(key, drone1[key]);
})

console.log(result)


const meal = ["soup", "steak", "ice cream"]
let [starter, ...others] = meal;
console.log(starter);
console.log(others)

let food = "Chocolate";
console.log(`My favourite food is ${food}`);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);

console.log(set)

let dict = new Map();

dict.set(1, 'Ritvik');
dict.set(2, 'Shaailu');
dict.set(3, 'Sam');
dict.set(4, 'Sai');

console.log(dict);

let obj = {
    key: 1,
    value: 4
};

let output = {...obj };
output.value -= obj.key;

console.log(output.value);

function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);

function getavg(...nums) {
    let ans = 0;
    for (let num of nums) {
        ans += num;
    }
    return ans / nums.length;
}

console.log(getavg(10, 20, 40, 020000));


function concatstrings(...strings) {
    result = "";
    for (var string of strings) {
        result += string;
    }

    return result;
}

console.log(concatstrings("hello ", "world", " this is ritvik"));

function addTwo(a, b) {
    return a + b
}
console.log(addTwo(5, "10"))

var cat = {}
cat.sound = "meow"
var catSound = "purr"
console.log(cat.sound)

var veggies = ['parsley', 'carrot']
console.log(veggies[2])



function scopeTest() {
    var y = 44;


    console.log(x);
}

var x = 33;
console.log(scopeTest());

const [a, b] = [1, 2, 3, 4]


function count(...food) {
    console.log(food.length)
}

console.log(count("Burgers", "Fries", null))