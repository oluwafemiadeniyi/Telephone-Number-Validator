//created telephone check function
function telephoneCheck(str) {
if(str[0]==1 && /[\s(]/.test(str[1]))
//console.log(str.split(/[^0-9]|/)
//create test and return the truth value of a regex for the first instance with country code
  return (/^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$|^1?\s?[(]\d{3}[)]\s?\d{3}[-\s]?\d{4}$/.test(str) && 
  str.split(/[^0-9]|/).filter(a=>/\d/.test(a)).length==11);}