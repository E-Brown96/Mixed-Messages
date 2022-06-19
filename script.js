//This is my script for mixed messages, the first stage is to define my three sections of my messages

const part1 = ['This is your ', 'Wake up its your ', 'Right now this ', 'What a '];
const part2 = ['day ', 'year ', 'life ', 'time '];
const part3 = ['grab it by the horns and make the most of it!', 'make the best of it!', 
'so do not wait for something, just do it!', 'light the fire and get on the grind!'];

// These are the three parts of the mixed message in arrays

const mixedMessage = (arr1, arr2, arr3) => {
    let theMessage = [];
    let randPart1 = arr1[Math.floor(Math.random()*arr1.length)];
    let randPart2 = arr2[Math.floor(Math.random()*arr2.length)];
    let randPart3 = arr3[Math.floor(Math.random()*arr3.length)];
    theMessage.push(randPart1 + randPart2 + randPart3);
    return theMessage;
}

// This function randomises the selection from each array, and prints all three added together.

console.log(mixedMessage(part1,part2,part3));