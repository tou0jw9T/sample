radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber * a == 4 || (receivedNumber * a == 9 || (receivedNumber * a == 25 || (receivedNumber * a == 8 || (receivedNumber * a == 27 || (receivedNumber * a == 125 || receivedNumber * a == 30)))))) {
        basic.showIcon(IconNames.Asleep)
    } else if (a == 2) {
        if (receivedNumber * a == 6 || (receivedNumber * a == 12 || receivedNumber * a == 18)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    } else if (a == 3) {
        if (receivedNumber * a == 15 || (receivedNumber * a == 45 || receivedNumber * a == 75)) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    } else if (a == 5) {
        if (receivedNumber * a == 10 || (receivedNumber * a == 20 || receivedNumber * a == 50)) {
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
