radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, Green)
        pins.analogWritePin(AnalogPin.P2, Blue)
        if (pins.digitalReadPin(DigitalPin.P8) == 1 && Green < 1020) {
            Green = Green + 10
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1 && Green == 1020) {
            Green = 0
        }
        if (pins.digitalReadPin(DigitalPin.P12) == 1 && Red < 1020) {
            Red = Red + 10
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1 && Red == 1020) {
            Red = 0
        }
        if (pins.digitalReadPin(DigitalPin.P16) == 1 && Blue < 1020) {
            Blue = Blue + 10
        } else if (pins.digitalReadPin(DigitalPin.P16) == 1 && Blue == 1020) {
            Blue = 0
        }
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let Red = 0
let Blue = 0
let Green = 0
radio.setGroup(55)
