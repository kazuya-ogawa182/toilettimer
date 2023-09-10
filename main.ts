let count = 0
basic.showNumber(count)
basic.forever(function () {
    if (input.lightLevel() == 0) {
        count = 0
        basic.showNumber(count)
    }
    if (input.lightLevel() >= 1) {
        count += 1
        basic.pause(60000)
        basic.showNumber(count)
        if (count > 10 && input.lightLevel() >= 1) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.No)
        }
    }
})
