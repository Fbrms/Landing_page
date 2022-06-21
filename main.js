const lastLetter = a => {
    
    let upper = a.charAt(0).toUpperCase();
    
    let str = upper + (a.slice(1).toLowerCase());
    console.log(str)
}

lastLetter("aBxDdEaS");