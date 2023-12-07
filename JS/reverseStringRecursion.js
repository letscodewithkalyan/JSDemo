
let name="kalyan";

function reverse(currentName){
  if (currentName.length == 0){
    return "";
  }
  return currentName.charAt(currentName.length - 1) + reverse(currentName.slice(0,currentName.length-1))
}
console.log(name);
let reversed = reverse(name);
console.log(reversed);