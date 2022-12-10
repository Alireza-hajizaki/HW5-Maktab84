// function printNumbers(from,to) {
//     let start = from;
//     const Time = setInterval(() => {
//         console.log(start);
//         if (start  == to) {
//             clearInterval(Time);
//         }
//         start += 1;
//     }, 1000);
// }
// printNumbers(1,5)


function printNumbers(from,to) {
    let start = from;
    const Time =
        setTimeout(function timeout(){
            console.log(start);
            if (start  < to) {
                setTimeout(timeout, 1000);
            }
            start += 1
        }, 1000)
    }
printNumbers(1,5)