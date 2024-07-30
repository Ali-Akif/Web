function repeatString(string, number) {
    let repeatedString = ""
    for ( let i = 0; i<number; i++) {
        repeatedString += string;
    };
    return repeatedString
}


string = repeatString("Hello", 3);
console.log(string)

