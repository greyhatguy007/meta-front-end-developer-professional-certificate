// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(){
    for(var item of dairy){
        console.log(item)
    }
}

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ": " +  bird[prop])
    }
}

// Task 3
function animalCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ": " +  bird[prop])
    }
    for (var prop of Object.keys(animal)) {
        console.log(prop + ": " +  animal[prop])
    }
}


logDairy();
birdCan();
animalCan();