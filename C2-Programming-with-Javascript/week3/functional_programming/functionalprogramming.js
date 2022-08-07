// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px"
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle)
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle)
    } else {
        console.log(message, style)
    }
    
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt)  
    celebrateStyler(reason)
    
}
// Call styleAndCelebrate

styleAndCelebrate('#1d5c63', '#ede6db', '40px', 'Congrats!', 'champions')