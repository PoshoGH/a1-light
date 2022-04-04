def on_received_number(receivedNumber):
    global Green, Red, Blue
    basic.show_leds("""
        . . . . .
                # . . . .
                . . # . .
                # . . . #
                . # # # .
    """)
    pins.analog_write_pin(AnalogPin.P0, 0)
    pins.analog_write_pin(AnalogPin.P1, Green)
    pins.analog_write_pin(AnalogPin.P2, Blue)
    if pins.digital_read_pin(DigitalPin.P8) == 1 and Green < 1020:
        Green = Green + 10
    elif pins.digital_read_pin(DigitalPin.P8) == 1 and Green == 1020:
        Green = 0
    if pins.digital_read_pin(DigitalPin.P12) == 1 and Red < 1020:
        Red = Red + 10
    elif pins.digital_read_pin(DigitalPin.P12) == 1 and Red == 1020:
        Red = 0
    if pins.digital_read_pin(DigitalPin.P16) == 1 and Blue < 1020:
        Blue = Blue + 10
    elif pins.digital_read_pin(DigitalPin.P16) == 1 and Blue == 1020:
        Blue = 0
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    pass
radio.on_received_string(on_received_string)

Red = 0
Blue = 0
Green = 0
radio.set_group(55)