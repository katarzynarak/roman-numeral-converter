function convertToRoman(num) {
    let result = [];
    let i = num;
    while (i >= 1000) {
      result.push("M");
      i -= 1000;
    }
    while (i >= 900) {
      result.push("CM");
      i -= 900;
    }
    while (i >= 500) {
      result.push("D");
      i -= 500;
    }
    while (i >= 400) {
      result.push("CD");
      i -= 400;
    }
    while (i >= 100) {
      result.push("C");
      i -= 100;
    }
    while (i >= 90) {
      result.push("XC");
      i -= 90;
    }
    while (i >= 50) {
      result.push("L");
      i -= 50;
    }
    while (i >= 40) {
      result.push("XL");
      i -= 40;
    }
    while (i >= 10) {
      result.push("X");
      i -= 10;
    }
    while (i >= 9) {
      result.push("IX");
      i -= 9;
    }
    while (i >= 5) {
      result.push("V");
      i -= 5;
    }
    while (i >= 4) {
      result.push("IV");
      i -= 4;
    }
    while (i >= 1) {
      result.push("I");
      i -= 1;
    }
    return result.join("");
    }
    
    let enteredNumber = prompt("Enter the number you want to convert to Roman numeral: ");
    console.log("Entered number: "+enteredNumber);
    console.log(convertToRoman(enteredNumber));

    const result= document.querySelector("#result");
    result.innerHTML=enteredNumber+" = "+convertToRoman(enteredNumber);
