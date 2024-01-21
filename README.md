Please write your answers in the index.js file. If you want to convert the function declarations into function expressions, please do, but be sure to use exactly the same names. This means that an automated test can be run on the index.js script to check if your functions are returning the expected values for specific inputs.

# Double Vowels
Create a function called `hasDoubleVowels`. This function will be called with a string argument: a word like "Facetious", "skiing", "strengths", or "VACUUM". If the word has a double vowel ("aa", "ee", "ii", "oo" or "uu"), the function should return the input word exactly as it was sent in (case sensitive). If the word has no double vowels, it should return the exact string: "The input has no double vowels".

**Examples**

| Input  | Output |
| --- | --- |
| "Moon" | "Moon" |
| "heel" | "heel" |
| "PASS" | "The input has no double vowels" |

---

# Multiples of 9
Create a function called "isMultipleOfNine". The function will be called with an argument which represents a valid integer, such as "4", 5 or 4.5e1. It should return `true` if the number is divisible by 9 and `false` if not.

**Examples**

| Input | Output |
| --- | ---|
| 9      | true |
| 117    | true |
| 9e9    | true |
| 0b1001 | true |
| 0x12   | true |
| "6"    | false |

---

# Polygon

Create a function named "polygonType". This function _should_ be called with between 3 and 6 positive number arguments, such as `3,4,5`. These numbers represent the lengths of the sides of a polygon. The arguments _will_ all be numbers, but there may be less than 3 or more than 6. The function should return one of the following values:

1. "triangle"
2. "equilateral triangle"
3. "quadrilateral"
4. "square"
5. "pentagon"
6. "regular pentagon"
7. "hexagon"
8. "regular hexagon"
9. "unexpected number of sides"

The output depends on:

* How many lengths of sides are given
* Whether all the lengths are identical (outputs 2, 4, 6 and 8)

**Examples**

| Input | Output |
| --- | ---|
| 3, 4, 5 | "triangle" |
| 4, 4, 4 | "equilateral triangle" |
| 0.2, 0.2, 0.2, 0.2 | square |
| 3, 3, 3, 3, 3, 3.001 | "hexagon" |
| 1, 2, 3, 4, 5, 6, 7 | "unexpected number of sides" |

---

# Rock and Roll

Create a function called "rockAndRoll". This function will receive a single emoji character as its input, such as "🪨", "📰" or "✂️". If the argument is "🎸", the function should return the string "rock". If it is any other character, it should return the string 
"roll".

**Examples**

| Input | Output |
| --- | ---|
| "🥁" | "roll" |
| "🧻" | "roll" |
| "🙄" | "roll" |
| "🎸" | "rock" |

You might like to use the ternary ` ? : ` operator in your solution.

---

# Looping

Create a function named "powerOutput" which will output the series "1 4 27 256 3125 46656" as a string. No arguments will be provided.

Note that these numbers represent "1 to the power 1", "2 to the power 2", and so on up to "6 to the power 6". Note also that there are neither leading or trailing spaces in the string, and that the numbers are separated by a single space.

---

# Problem solving

Create a function named "secretSanta". This will be called with a string argument like "There's no business like show business" or "A whole holiday in Holland". The function should output the number of times the substring "ho" (or "HO" or "hO" or "Ho") appears in the input.


**Examples**

| Input | Output |
| --- | ---|
| "There's no business like show business" | 1 |
| "A whole holiday in Holland" | 3 |
| "E.T. phone home" | 2 |
| "Toledo, Ohio" | 0 |
