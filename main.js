/* Arrays - What are they?

  - created with [ ] pairs
  - can contain:
    - arrays
    - strings
    - numbers
    - booleans
    - other objects
    - functions
  - values are separated by , (commas)
  - can be looped through (iterable)
  - can be assigned to a variable
  - can add or remove items to/from them
    - (variable length)
  - have indexes
    - denotes the position of a variable in an array
      - That means that items in an array are in order
    - Start at 0
  - can access items in array with the item's index
    - ex. myArray[1]
  - have a length that is equal to the number of items in the array
    - ex. myArray.length

  What kinds of data would make sense to store in an Array?
    - lists of similar items where order might matter
      - grocery list
      - top 10 list
      - "todo" list
      - stats for a game
      - navigation directions (in order from first to last)
      - attendees of an event
      - list of collectible cars
      - inventory list
      - the alphabet
*/

/* Objects - What are they?

  - created with { } pairs
  - can be used to store multiple data types
    - arrays
    - strings
    - numbers
    - booleans
    - other objects
    - functions
  - store data in key - value pairs, referred to as properties
    - ex, key : value
  - properties are separted by , (commas)
  - can be assigned to a variable
  - can access the values of a property using Object.key notation
    - ex, dog.name = "Fido"
  
  What data would make sense to store in an Object?
    - Data that represent specific attributes of unique items
    - Data with controlled input
      - where each point of data represents a unique property
        - ex, name, age, address, etc.
    - Data where the type matters (to you the developer and strongly typed languages)
    - Data that is easier to refer to by name than by position
      - ex, person.age is easier than remembering person[7] is supposed to be the age
    
    Example objects:
      - Person
        - name
        - age
        - address
        - birthdate
        - email
        - phone numbers
        - genetic sequences
          - (would make a good array)
        - height
        - weight
        - introduction
      - Dogs
        - name
        - breed
        - likesTreats
      - Names in a baby name book
        - name
        - meanings
        - origin
  
*/

// A GOOD ARRAY
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// A GOOD OBJECT
let person = {
  firstName: "P Sherman",
  lastName: "42 Wallaby Way Sydney",
  address: undefined,
  birthMonth: "05",
  birthDay: "30",
  birthYear: 2003,
  email: "p.shermsy@thescubadiverfromthatmovie.com",
  phone: 2128971964,
  geneticSequence: ["AT", "GC", "TA", "AT", "CG", "CG", "CG", "GC", "TA", "AT"],
  heightFt: 4,
  heightIn: 2,
  weightLbs: 168,
  introduction: function () {
    console.log("hi. my name is P Sherman 42 Wallaby Way Sydney");
    console.log("yes, that is my full name");
    console.log("no, it's not my address. lots of people make that mistake");
  },
};

// A BAD ARRAY MADE WITH AN OBJECT
// Don't do this
// This is what arrays are for
// This one isn't even guaranteed to loop in order
let myAlphabetList = {
  itemOne: "a",
  itemTwo: "b",
  itemThree: "c",
  // ...
  itemTwentySix: "z",
};

// A BAD OBJECT MADE WITH AN ARRAY
// Don't do this
// This is what objects are for
// You don't want to remember that myPerson[7] is how we access the email
let myPerson = [
  "P",
  "Sherman",
  "42 Wallaby Way Sydney",
  undefined,
  "05",
  "30",
  2003,
  "p.shermsy@thescubadiverfromthatmovie.com",
  2128971964,
  ["AT", "GC", "TA", "AT", "CG", "CG", "CG", "GC", "TA", "AT"],
  4,
  2,
  168,
  function () {
    console.log("hi. my name is P Sherman 42 Wallaby Way Sydney");
    console.log("yes, that is my full name");
    console.log("no, it's not my address. lots of people make that mistake");
  },
];
