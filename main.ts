let A = 0
let C = 0
let B = 0
input.onButtonPressed(Button.A, function () {
    A = 1
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.AB, function () {
    C = 1
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    B = 1
    music.playTone(262, music.beat(BeatFraction.Half))
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    if (A == 1) {
        basic.showString("HI DADDY HI MOM")
        A = 0
    } else if (B == 1) {
        basic.showString("WELCOME HOME")
        B = 0
    } else if (C == 1) {
        basic.showString("I LOVE YOU")
        C = 0
    } else if (TobbieII.RBlock(50) && TobbieII.LBlock(50)) {
        for (let index = 0; index < 3; index++) {
            TobbieII.forward()
            basic.pause(100)
            TobbieII.backward()
            basic.pause(100)
        }
        TobbieII.stopwalk()
    }
})
