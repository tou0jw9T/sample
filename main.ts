radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        index += 10
    } else if (receivedNumber == 2) {
        index += 100
    } else if (receivedNumber == 3) {
        index += 1000
    }
    if (index == 1110 || (index == 30 || (index == 300 || (index == 3000 || (index == 20 || (index == 200 || index == 2000)))))) {
        for (let index2 = 0; index2 < 4; index2++) {
            basic.showIcon(IconNames.Asleep)
        }
    } else if (a == 1) {
        if (index == 210 || (index == 120 || index == 1010)) {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.Angry)
            }
        }
    } else if (a == 2) {
        if (index == 1020 || (index == 2010 || index == 110)) {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.Angry)
            }
        }
    } else if (a == 3) {
        if (index == 1200 || (index == 2100 || index == 1100)) {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            for (let index2 = 0; index2 < 4; index2++) {
                basic.showIcon(IconNames.Angry)
            }
        }
    }
    a = 0
    index = 0
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    a = 1
    index = 10
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    a = 0
    index = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    basic.clearScreen()
    a = 3
    index = 1000
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.clearScreen()
    a = 2
    index = 100
    radio.sendNumber(2)
})
let a = 0
let index = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.setGroup(9)
})
