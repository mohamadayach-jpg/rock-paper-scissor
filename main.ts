let choice = 0
input.onGesture(Gesture.Shake, function () {
    choice = randint(1, 3)
    if (choice == 1) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (choice == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (choice == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    serial.writeValue("brightness", input.lightLevel())
})
