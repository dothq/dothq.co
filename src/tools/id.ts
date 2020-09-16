export const makeId = () => {
    var a = "";

    return a           // if the placeholder was passed, return
          ? (              // a random number from 0 to 15
            a ^            // unless b is 8,
            Math.random()  // in which case
            * 16           // a random number from
            >> a/4         // 8 to 11
            ).toString(16) // in hexadecimal
          : (              // or otherwise a concatenated string:
            [1e10] + 
            1e10 +
            1e9
            ).replace(     // replacing
              /[01]/g,     // zeroes and ones with
              makeId // random hex digits
            ).toLowerCase()
}