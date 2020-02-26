// let coffeeOrder = [
//     "Alex - coffee",
//     "Ben - Coffee",
//     "charlie - coffee",
// ];

// console.log(coffeeOrder)

// let faveSongs = [
//     "Blue Stahli - Lakes Of Flame",
//     "Mob Choir - 99.9",
//     "Little V - Pillar Man Theme"
// ];

// // console.log(faveSongs[2])
// faveSongs[1] = "Celldweller - Frozen"
// // console.log(faveSongs)
// // console.log(faveSongs.length)
// // .length counts amount of items in the array
// // faveSongs.push("Mob Choir - 99.9");
// faveSongs.pop()
// console.log(faveSongs)

//shift unshift slice and splice

//act 1

let faveSites = [
    "YouTube",
    "Twitter",
    "crunchyroll"
]
console.log(faveSites)

faveSites.push("discord", "spotify")
console.log(faveSites)

faveSites.pop()
console.log(faveSites)

//act 2

//shift removes the first element (list) from an array and returns (remembers) the removed element. This changes the length

const array1= [1, 2, 3];

const firstElement = array1.shift();
console.log(array1);

console.log(firstElement)

// 'firstelement' is the defined array but with the first item removed and returned. define array as a const,
// then define a new variable as a const being the array.shift

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
//unshift is the literal opposite, adding to the list then returning them

const array2 = [1, 2, 3];
console.log(array2.unshift(4, 5));

console.log(array2);

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
const animals =['ant', 'bison', 'camel', 'duck', 'elephant' ];
console.log(animals.slice(2));
// expected result is camel duck elephant, as it sliced everything prior to entry 2 (from 0)
console.log(animals.slice(2, 4));
//expected result is camel duck, as it sliced everything prior to 2 and from 4 after
console.log(animals.slice(1, 5));
//sliced the 1st and 5th entries in the array
//slice doesn't change the original array at all, only brings up inforamtion in the console

//splice method changes contents of the array by removing.replacing existing elements and/or adding new ones in place

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb')
//inserts at index 1
console.log(months)

months.splice(4, 1, 'May');
//replaces 1 element at index 4
console.log(months)
//splice does chaneg the original array contents
// number, 0 to insert at end

//custom examples

const faveGames = ['Dark Souls', 'The Outer Worlds', ' Hollow Knight']
const bestGame = faveGames.shift()

console.log(faveGames)
console.log(bestGame)
console.log(`My favourite games are ${faveGames} but the best one is ${bestGame}`)