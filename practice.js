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
