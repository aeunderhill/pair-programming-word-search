const wordSearch = (letter, word) => { 
    const wordLen = word.length;
    let tempArr =[];
    let tempArr2 = []
​
    // loop horizontally to check the letters in each arr
    for (let y = 0; y < letter.length; y ++){
        for (let x = 0; x < letter[0].length - wordLen + 1; x++) {
            tempArr = letter[y].slice(x, wordLen + x)
            console.log(tempArr)
                if (tempArr.join('') === word) {
                    return true;
                }
        }
    }
​
    // loop vertically 
    for (let x =0; x < letter[0].length; x++) {
        for (let y = 0; y < letter.length - wordLen + 1; y++ ){
            tempArr2.push(letter[y][x]);
            if (tempArr2.join('') === word) {
                return true;
            }
        }
    }
     
    return false;
}
​
module.exports = wordSearch