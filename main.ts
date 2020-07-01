radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(1500)
    if (receivedNumber * a == 4 || (receivedNumber * a == 9 || (receivedNumber * a == 25 || (receivedNumber * a == 8 || (receivedNumber * a == 27 || (receivedNumber * a == 125 || receivedNumber * a == 30)))))) {
        basic.showIcon(IconNames.Asleep)
    } else if (a == 2) {
        if (receivedNumber == 3 || (receivedNumber == 6 || receivedNumber == 9)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    } else if (a == 3) {
        if (receivedNumber == 5 || (receivedNumber == 15 || receivedNumber == 25)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    } else if (a == 5) {
        if (receivedNumber == 2 || (receivedNumber == 4 || receivedNumber == 10)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    }
    a = 0
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    a = 2
    radio.sendNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    a = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    basic.clearScreen()
    a = 3
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.clearScreen()
    a = 5
    radio.sendNumber(5)
})
let a = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.setGroup(9)
})
