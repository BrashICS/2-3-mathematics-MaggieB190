/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***

//Part 1

let celsius = 100
let fahrenheit = 0

//right below is the same as celsius = celsius + 2
celsius += 2
fahrenheit = (celsius * 9/5) + 32

console.log(fahrenheit)

//Part 2

fahrenheit = 77
celsius = (fahrenheit - 32) * 5/9
console.log(celsius)

//Part 3

//the dollar sign is just apart of the {value} code
console.log(`${fahrenheit} degrees Fahrenheit is ${celsius} degrees Celsius.`)

//Part 4

//A(-4,5)   B(6,0)
m = (0 - 5)/(6 - -4)
console.log(m)

//Part 5

let radius = Math.round(Math.random() * 10)
let height = Math.round(Math.random() * 10)
let volume = Math.round(Math.PI * radius**2 * height)

console.log(`The random cylinder:
    Height: ${height}
    Radius: ${radius}
    Volume: ${volume}`)





