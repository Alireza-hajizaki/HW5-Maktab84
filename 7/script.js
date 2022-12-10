const newTime = 8

function getSecondsToday(time) {
   const totalSce =  36000*time // (3600 * 10)
   return totalSce
}

console.log(getSecondsToday(newTime))
console.log(getSecondsToday(21))
console.log(getSecondsToday(5.5))