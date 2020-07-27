/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vocal =[]
  let etc = []
  for (const char of s) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"  ){
          vocal.push(char)
      }else{
          etc.push(char)
      }
}
  vocal = vocal.sort()
  let charactes = vocal
  for(const char of etc){
      charactes.push(char)
  }
  for(const char of charactes){
      console.log(char)
  }

}
function main() {
  const s = "javascriptloops";

  vowelsAndConsonants(s);
}
