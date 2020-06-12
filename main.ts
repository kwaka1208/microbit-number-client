radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 100) {
        if (receivedNumber == MyID) {
            basic.showNumber(MyID)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        if (receivedNumber == 101) {
            reset()
            GetID()
            basic.showNumber(MyID)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (MyID != 0) {
        radio.sendNumber(MyID)
        basic.showNumber(MyID)
    }
})
function GetID () {
    basic.showIcon(IconNames.No)
    basic.pause(randint(10, 20) * 100)
    radio.sendString(control.deviceName())
}
input.onButtonPressed(Button.AB, function () {
    reset()
    GetID()
    basic.showNumber(MyID)
})
radio.onReceivedValue(function (name, value) {
    if (control.deviceName() == name) {
        MyID = value
        basic.showNumber(MyID)
    }
})
function reset () {
    MyID = 0
    basic.showNumber(MyID)
}
let MyID = 0
radio.setGroup(1)
reset()
