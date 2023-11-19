
// Declare these here and use them in subsequent steps
let favMovies, movies, leastFavMovies;

//STEP 1
// Create a string array that contains your five favorite movies. 
// Then, use the console to display the second movie in your array.

console.log("STEP 1");
favMovies = ["Alien", "Black Robe", "Coco", "Donnie Darko", "Elizabeth"];
console.log(favMovies[1]);


//STEP 2
// Declare an array called movies using the function constructor method. 
// Add the length of 5 into the constructor. Then, assign one of your favorite 
// movies to each index in the array until you have 5 total movies in your array. 
// Then, use the console to display the first movie in your array.

console.log("STEP 2");
movies = new Array();
movies.length = 5;
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";
console.log(movies[0]);


//STEP 3
// Copy your code from step 2. 
// Add a new movie into the 3rd position within your array.
// Then, use the console to display the length of the array. 
// You should now have 6 total movies stored in the array.

console.log("STEP 3");
movies = new Array();
movies.length = 5;
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";

movies.splice(2, 0, "Terminator");
console.log(movies);
console.log(movies.length);


//STEP 4
// Declare an array called movies using literal notation. 
// Then, assign one of your favorite movies to each index in the array until
// you have 5 total movies in your array. 
// Now, use the delete operator to remove the first movie in the array.
// Use the console to display the contents of the array.

console.log("STEP 4");
movies = [];
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";

delete movies[0];  // First item in array is now undefined
console.log(movies.toString());  


//STEP 5
// Declare an array called movies using literal notation. 
// Then, assign one of your favorite movies to each index in the array until
// you have 7 total movies in your array. 
// Now, use a for/in loop to iterate through the array and display each movie 
// within the console window.

console.log("STEP 5");
movies = [];
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";
movies[5] = "Freaky Friday";
movies[6] = "Gone With the Wind";
for (let i in movies) {
    console.log(movies[i]);
}


//STEP 6
// Copy the code from step 5. Now, use a for/of loop to iterate through the
// array and display each movie within the console window.

console.log("STEP 6");
movies = [];
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";
movies[5] = "Freaky Friday";
movies[6] = "Gone With the Wind";
for (let m of movies) {
    console.log(m)
}

//STEP 7
// Copy the code from step 5. Using the for/of loop to iterate through the array,
// display each movie within the console window in a sorted view.

console.log("STEP 7");
movies = [];
// I guess I'll create it in unsorted order this time,
// so it can then be sorted and something happens
movies[3] = "Alien";
movies[2] = "Black Robe";
movies[5] = "Coco";
movies[4] = "Donnie Darko";
movies[0] = "Elizabeth";
movies[6] = "Freaky Friday";
movies[1] = "Gone With the Wind";
//console.log(movies)
movies.sort()
for (let m of movies) {
    console.log(m)
}


//STEP 8
// Copy the code from step 5. 
// Under the existing array, create a new array called leastFavMovies. 
// Populate the array with the 3 movies that you regret watching. 
// Display both arrays within the console window so that it is formatted to
// look like this (note the spacing, you must include that too):

// Movies I like:

// Movie 1
// Movie 2
// Movie 3
// …

// Movies I regret watching:

// Movie 1
// Movie 2
// Movie 3
// …

console.log("STEP 8");
movies = [];
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";
movies[5] = "Freaky Friday";
movies[6] = "Gone With the Wind";
leastFavMovies = ["Austin Powers", "Barbie", "Caddyshack"]

console.log("Movies I like:");
console.log("");
for (let m of movies) {
    console.log(m)
}
console.log("");
console.log("Movies I regret watching:");
console.log("");
for (let m of leastFavMovies) {
    console.log(m)
}


//STEP 9
// Copy the code from step 8. 
// Now, use the concat() method to merge the two arrays together into a 
// single array called movies. 
// Use the console window to display the list in reverse sorted order.

console.log("STEP 9");
movies = [];
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";
movies[5] = "Freaky Friday";
movies[6] = "Gone With the Wind";
leastFavMovies = ["Austin Powers", "Barbie", "Caddyshack"]

movies = movies.concat(leastFavMovies)
console.log(movies.sort().reverse().toString())


//STEP 10
// Copy the code from step 9. 
// Use an array function to return just the last item in the array and
// display it within the console window.

console.log("STEP 10");
movies = [];
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";
movies[5] = "Freaky Friday";
movies[6] = "Gone With the Wind";
leastFavMovies = ["Austin Powers", "Barbie", "Caddyshack"]
movies = movies.concat(leastFavMovies);
// I assume you don't mean to also reverse sort it?
console.log(movies.pop());
// But if you do mean to also reverse sort it, run this line instead of the 
// previous one:
//console.log(movies.sort().reverse().pop());


//STEP 11
// Copy the code from step 10. 
// Remove the previous method and this time use a method to return just the
// first item in the array and display it within the console window.

console.log("STEP 11");
movies = [];
movies[0] = "Alien";
movies[1] = "Black Robe";
movies[2] = "Coco";
movies[3] = "Donnie Darko";
movies[4] = "Elizabeth";
movies[5] = "Freaky Friday";
movies[6] = "Gone With the Wind";
leastFavMovies = ["Austin Powers", "Barbie", "Caddyshack"];
movies = movies.concat(leastFavMovies);
// I assume you don't mean to also reverse sort it?
console.log(movies.shift());
// But if you do mean to also reverse sort it, run this line instead of the 
// previous one:
//console.log(movies.sort().reverse().shift());


//STEP 12
// Programmatically retrieve the movies in your array that you do not like
// and return their indices. 
// Then, using those indices, programmatically add movies that you do like.

console.log("STEP 12");
let badMovieIndices = [movies.indexOf("Austin Powers"),
                    movies.indexOf("Barbie"),
                    movies.indexOf("Caddyshack")];
let moreFavMovies = ["Terminator", "Shawshank Redemption", "Princess Bride" ];

let i = 0;
for (let badIndex of badMovieIndices) {
    movies[badIndex] = moreFavMovies[i];
    i++;
}
console.log(movies.toString());

//STEP 13
// Create a multi-dimensional array that contains your 5 favorite movies
// and their ranking from 1-5. The array should look something like this:

// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

// Now, loop through the array and filter out and display only the movie names. 
// You must use the filter() method and you’ll need to filter out the names by
// their primitive data type.

console.log("STEP 13");
movies = [["Gone With the Wind", 1], ["Shawshank Redemption", 2], 
            ["Alien", 3], ["Princess Bride", 4], ["Terminator", 5]];

// function isString (s) {
//     return (typeof(s) == 'string')
// }
// for (pair of movies) {
//     console.log(pair.filter(isString).pop())  // pop result to print string, not array
// }

for (let pair of movies) {
    console.log(pair
        .filter((item) => {return typeof(item) == 'string'})
        .pop())  // pop result to get string, not array containing string
}


//STEP 14
// Create a string array called employees using literal notation and populate
// the array with several employee names. 
// Then, create anonymous function 'showEmployee', which accepts a parameter. 
// Call this function, passing employees array into the function as a parameter. 
// Display the result in the console window. 
// Within the function, loop through the passed in array and display the result
// so that it looks exactly like this in the console window:

// Employees:

// ZAK
// JESSICA
// MARK
// FRED
// SALLY

console.log("STEP 14");
let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

let showEmployee = 
    (a) => { console.log("Employees:");
            console.log("");
            for (let str of a) {
                console.log(str.toUpperCase())
            }
    }
showEmployee(employees);

//STEP 15
// Write a function to filter false, null, 0 and blank values from an array.

// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
// Expected Result: [58, "abcd", true]

console.log("STEP 15")
function filterValues(a) {
    return a.filter(
        (item) => { return !(item === null ||
                            item === false ||
                            item === '' ||
                            item === 0) }
    )
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]))


//STEP 16
// Write a JavaScript function to get a random item from an array. 
// So if I create a numeric array with 10 numbers and then pass that array
// into my function, the function should randomly return one of those numbers.

console.log("STEP 16");
function getRandomItemFromArray(a) {
    return a[Math.floor(Math.random() * a.length)]
}

let testarray = [10, 4, 800, -3, 50, 1.4, -.005, 250, 50.25, 3.0]
console.log(getRandomItemFromArray(testarray))
console.log(getRandomItemFromArray(testarray))
console.log(getRandomItemFromArray(testarray))


//STEP 17
// Write a JavaScript function to get the largest number from a numeric array.

console.log("STEP 17");
// Find max value in array using reduce()
function getMaxFromNumericArray(a) {
    return a.reduce( (currMax, nextVal) => {
        return currMax >= nextVal ? currMax : nextVal
    })
}

testarray = [10, 4, 800, -3, 50, 1.4, -.005, 250, 50.25, 3.0]
console.log(getMaxFromNumericArray(testarray))


