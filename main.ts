let Y = 0
let num = 0
let X = 0
basic.forever(function () {
    if (num < 6) {
        X = num
        led.plot(X, Y)
        num += 1
        basic.pause(100)
    } else {
        if (5 < num && num < 9) {
            X = 4
            Y = num - 5
            led.plot(X, Y)
            num += 1
            basic.pause(100)
        } else {
            if (8 < num && num < 14) {
                Y = 4
                X = 13 - num
                led.plot(X, Y)
                num += 1
                basic.pause(100)
            } else {
                X = 0
                Y = 17 - num
                led.plot(X, Y)
                num += 1
                basic.pause(100)
            }
        }
    }
})
