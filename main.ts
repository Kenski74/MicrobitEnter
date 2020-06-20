let hra_zacala = false
input.onButtonPressed(Button.A, function () {
    for (let _index = 0; _index <= 2; _index++) {
        basic.showNumber(3 - _index)
        basic.pause(100)
        basic.clearScreen()
    }
    basic.pause(randint(0, 2000))
    basic.showIcon(IconNames.Skull)
    hra_zacala = true
})
basic.forever(function () {
    while (hra_zacala) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            hra_zacala = false
        }
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            hra_zacala = false
        }
    }
})
