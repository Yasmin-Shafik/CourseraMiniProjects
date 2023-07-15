// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];function logDairy() {    for (const item of Object.keys(dairy)) {        console.log(dairy[item]);    }} logDairy();//
// Task 2
const animal = {    canJump: true};const bird =  Object.create(animal);bird.canFly = true;bird.hasFeathers = true;function birdCan() {    for ([key, value] of Object.entries(bird)) {        console.log(`${key}: ${value}`)     }}birdCan();//
// Task 3
function animalCan() {    for ( prop in bird) {    console.log(prop +  ": " + bird[prop] );        }    }animalCan();
