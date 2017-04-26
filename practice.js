// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
function idb(a)
{
	return a % 3 === 0;

	};
console.log("1) "+idb(21));
	


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function () {
};
function ctf(a)
{
	return (a*9)/5 + 32;
};
console.log("2(a) celsToFahr= "+ctf(40));


var fahrToCels = function () {
};
function ftc(c)
{
 return (c - 32) * (5/9);
};
console.log("2(b) fahrToCels= "+ftc(104));
// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
function ran(n) {
	return Math.floor(Math.random() * n);

	};
console.log("3) "+ran(1000));
// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function () {
};

function rantwo(n, m) {
    return Math.floor(Math.random() * (m - n) + n);
};
console.log("4) "+rantwo(1000,9999));

// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
 function suit(a){
	var lowerCaseSuit = a.toLowerCase();
    return lowerCaseSuit === "hearts" ||
        lowerCaseSuit === "spades" ||
        lowerCaseSuit === "clubs" ||
        lowerCaseSuit === "diamonds";
};
console.log("5(a) "+suit("hearts"));
console.log("5(b) "+suit("HEARTS"));
console.log("5(c) "+suit("coins"));
// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
 function rank(a) {
	 var lowerCaseRank = a.toLowerCase();
    return lowerCaseRank === "two" ||
        lowerCaseRank === "three" ||
        lowerCaseRank === "four" ||
        lowerCaseRank === "five" ||
        lowerCaseRank === "six" ||
        lowerCaseRank === "seven" ||
        lowerCaseRank === "eight" ||
        lowerCaseRank === "nine" ||
        lowerCaseRank === "ten" ||
        lowerCaseRank === "jack" ||
        lowerCaseRank === "queen" ||
        lowerCaseRank === "king" ||
        lowerCaseRank === "ace";
};
console.log("6(a) "+rank("jack"));
console.log("6(b) "+rank("Queen"));
console.log("6(c) "+rank("one"));

// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.

function rs(r,s) {
	 return rank(r) && suit(s);
};
console.log("7(a) "+rs("one","clubs"));
console.log("7(b) "+rs("king","clubs"));
console.log("7(c) "+rs("king","coins"));

// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).

function isC(str) {
	 return "A" <= str.charAt(0) && str.charAt(0) <= "Z";
};
console.log("8(a) "+isC("CAPITALIZED"));
console.log("8(b) "+isC("AJAZ"));


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item

function get(elt){
	return elt.substring(elt.indexOf(">")+1, elt.lastIndexOf("</"));
};
console.log("9) "+get("<li>this is a list item</li>"));

// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function () {
};

function isH(str) {
	 var openTag = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
    var closeTag = str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
    return str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && openTag === closeTag;
};
console.log("10(a) "+isH("<p>this is NOT an paragraph</div>"));
console.log("10(b) "+isH("<p>this is NOT an paragraph</p>"));
