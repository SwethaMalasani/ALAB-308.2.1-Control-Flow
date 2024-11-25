const PI = 3.1415;
const radius = 5;  // Radius of the garden in meters
const minSpacePerPlant = 0.8;  // Minimum space required per plant in square meters
const initialPlants = 20; 

// Area of circle
const area = PI * radius * radius;

// Calculate the maximum number of plants that can fit in the area
const maxPlants = Math.floor(area / minSpacePerPlant);

// week1

let plantCountweek1 = initialPlants * 2;

console.log(plantCountweek1);

if (plantCountweek1 > maxPlants * 0.8) {
    console.log("Action: Prune the plants to avoid exceeding capacity.");

} else if (plantCountweek1 >= maxPlants * (50/100) && plantCount <= maxPlants * (80/100)) {
    console.log("Action: Monitor the plant growth, acceptable rate.");

} else {
    console.log("Action: Plants are growing well, you can still plant more.");
}

console.log(`Total plants after 1 weeks: ${plantCountweek1}`);
    console.log(`Maximum capacity of the garden: ${maxPlants}`);
    console.log("-------------------------------------------------");



//week2
let plantCountweek2 = plantCountweek1 * 2;

console.log(plantCountweek2);

if (plantCountweek2 > maxPlants * 0.8) {
    console.log("Action: Prune the plants to avoid exceeding capacity.");

} else if (plantCountweek2 >= maxPlants * (50/100) && plantCount <= maxPlants * (80/100)) {
    console.log("Action: Monitor the plant growth, acceptable rate.");

} else {
    console.log("Action: Plants are growing well, you can still plant more.");
}

console.log(`Total plants after 2 weeks: ${plantCountweek2}`);
    console.log(`Maximum capacity of the garden: ${maxPlants}`);
    console.log("-------------------------------------------------");


    //week3




let plantCountweek3 = plantCountweek2 * 2;

console.log(plantCountweek3);

if (plantCountweek3 > maxPlants * 0.8) {
    console.log("Action: Prune the plants to avoid exceeding capacity.");

} else if (plantCountweek3 >= maxPlants * (50/100) && plantCount <= maxPlants * (80/100)) {
    console.log("Action: Monitor the plant growth, acceptable rate.");

} else {
    console.log("Action: Plants are growing well, you can still plant more.");
}

console.log(`Total plants after 3weeks: ${plantCountweek3}`);
    console.log(`Maximum capacity of the garden: ${maxPlants}`);
    console.log("-------------------------------------------------");


    // Part 2: Thinking Bigger
const newInitialPlants = 100;
const finalPlantCount = newInitialPlants * 2 ** 10;  // Plants after 10 weeks
const requiredArea = finalPlantCount * minSpacePerPlant;
const requiredRadius = Math.sqrt(requiredArea / PI);

console.log(`Required area for 100 plants after 10 weeks: ${requiredArea} square meters`);
console.log(`Required radius of expanded garden: ${requiredRadius} meters`);

// Part 3: Error handling for 100 plants in the original garden
try {
    const newPlantCount = newInitialPlants;

    if (newPlantCount > maxPlants) {
        throw new Error("Error: Not enough space to accommodate the plants in the garden.");
    } else {
        console.log("The plants can fit in the garden.");
    }
} catch (error) {
    console.log(error.message);
} 
