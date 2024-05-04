const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"// Now not used, scope issues
accountCity = "Jaipur" // Not preferable
let accountState; // undefined value in output

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bhilai"

console.log(accountId);
/*
Prefer not to use var, because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);// output will be in tabular format