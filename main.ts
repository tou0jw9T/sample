radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == a || receivedNumber != a) {
        basic.showIcon(IconNames.Asleep)
    } else {
        if (true) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Angry)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    a = 1
    radio.sendNumber(a)
    basic.showIcon(IconNames.SmallSquare)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    a = 3
    radio.sendNumber(9)
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    a = 2
    radio.sendNumber(a)
    basic.showIcon(IconNames.Square)
})
let a = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.setGroup(9)
})
