//-----------Exercise 1--------------
//initialize an object for the key/values of each letter and corresponding number
var leetAlpha = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5",
    t: "7",
    T: "7", 
    b: "5",
    B: "5"
}

function makeMeCool (input){
    //cycle through the input string and match with the keys in our object
    //find and replace the matching keys with the values defined in our object
    for (var i = 0; i<input.length; i++){
        if (leetAlpha[input[i]]){
            input = input.replace(input[i], leetAlpha[input[i]]);
        }
    }
    console.log(input);
}

makeMeCool("Let's have some fun.");
makeMeCool("C is for cookie, that's good enough for me");
makeMeCool("By the power of Grayskull!");

//-------------------------------------------------------------

//----------Exercise 2-----------------

function countRepeat(str){
    
    var result,
    count = 1,
    i;
    //to check if inputted string has a character and is not an empty input
    if (!str) {
        return "";
    }

    //initialize result with first char
    result = str.charAt(0);

    
    for (i = 1; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(i-1)) {
            result += count + str.charAt(i);
            count = 1;
        } else {
            count++;
        }
    }
    //need to concat count to the end of result for the last iteration of the loop for the last repeated letters
    console.log(result + count);
}
countRepeat("aaabbdcccccf")
countRepeat("hhhhhqqlllllllhhhppp")