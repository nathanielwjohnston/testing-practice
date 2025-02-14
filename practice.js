export function capitalise(string) {
  const firstChar = string.slice(0, 1);
  const newString = firstChar.toUpperCase() + string.slice(1);
  return newString;
}

export function reverseString(string) {
  const reverseString = [];
  const stringArray = string.split("");
  for (let character of stringArray) {
    reverseString.unshift(character);
  }

  return reverseString.join("");
}

export const calculator = (function (firstNumber, secondNumber) {
  function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }

  function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  }

  return { add, subtract, multiply, divide };
})();

function encryptCharacter(key, currentCode, lowerBound, upperBound) {
  let newCode = currentCode + key;
  // To allow for wrapping
  if (newCode > upperBound) {
    newCode = lowerBound - 1 + (newCode - upperBound);
  }

  return newCode;
}

export function caesarCipher(string, key) {
  let encryptedString = "";
  for (let i = 0; i < string.length; i++) {
    const characterCode = string.charCodeAt(i);

    // If character is uppercase
    const uppercaseLowerBound = 65;
    const uppercaseUpperBound = 90;
    if (
      characterCode >= uppercaseLowerBound &&
      characterCode <= uppercaseUpperBound
    ) {
      const newCode = encryptCharacter(
        key,
        characterCode,
        uppercaseLowerBound,
        uppercaseUpperBound
      );
      encryptedString += String.fromCharCode(newCode);
      continue;
    }

    // If character is lowercase
    const lowercaseLowerBound = 97;
    const lowercaseUpperBound = 122;
    if (
      characterCode >= lowercaseLowerBound &&
      characterCode <= lowercaseUpperBound
    ) {
      const newCode = encryptCharacter(
        key,
        characterCode,
        lowercaseLowerBound,
        lowercaseUpperBound
      );
      encryptedString += String.fromCharCode(newCode);
      continue;
    }

    // If no changes to be made
    encryptedString += String.fromCharCode(characterCode);
  }

  return encryptedString;
}
