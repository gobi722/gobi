const user = {
    name: "Gobinath",
    age: 26,
    job: "Golang Developer",
    city: "Chennai"
  };
  console.log("for...in:")
  for (let key in user) {
  
    console.log(`${key} => ${user[key]}`);
  }
  ////keys gives you the keys to iterate manually
  console.log("for...each-----------keys")
  Object.keys(user).forEach(key => {
   
    console.log(`${key} => ${user[key]}`);
  });
 ////  entries gives destructured [key, value] pairs in each iteration.
 console.log("for...each-----------entries")
  // Object.entries(user).forEach(([key, value]) => {
  //   console.log(` ${key} => ${value}`);
  // });

  // Object.entries(user).forEach(function([key,value]){
  //   console.log(` ${key} => ${value}`);
  // })

  Object.entries(user).forEach(printing)
  function printing(key,value){
    console.log(` ${key} => ${value}`);
  }

  ///////////////////////////////

  function reverseStringRecursively(str) {
    // Base case: if the string is empty or has only one character, return it
    if (str === "") {
      return str;
    }
    console.log("**");
    console.log(str);
    console.log(str.substring(1) + str[0])
    // Recursive case: reverse the substring and append the first character
    return reverseStringRecursively(str.substring(1)) + str[0];
  }
  
  const str = "gobinath";
  console.log("---------------");
let result=  reverseStringRecursively(str) // "htanibog"
console.log(result);
   /////////////////////////////// 

function reverseString(str) {
  if( str==""){return ""}
 return reverseString(str.substring(1))+str[0]
}

console.log("madam"==reverseString("madam"));
