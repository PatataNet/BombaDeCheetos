namespace SpriteKind {
    export const cheeto = SpriteKind.create()
    export const one = SpriteKind.create()
    export const two = SpriteKind.create()
    export const three = SpriteKind.create()
    export const four = SpriteKind.create()
}
sprites.onCreated(SpriteKind.cheeto, function (sprite) {
    polvo += 1
    if (0 < polvo) {
        sprites.destroy(cheeto, effects.halo, 500)
    }
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (true) {
        cheeto = sprites.create(assets.image`Cheeto`, SpriteKind.cheeto)
        cheeto.setPosition(_3.x, _3.y + 15)
    }
})
sprites.onOverlap(SpriteKind.two, SpriteKind.cheeto, function (sprite, otherSprite) {
    sprites.destroy(cheeto)
    info.player2.changeLifeBy(-1)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (true) {
        cheeto = sprites.create(assets.image`Cheeto`, SpriteKind.cheeto)
        cheeto.setPosition(_4.x, _4.y + 15)
    }
})
info.player4.onLifeZero(function () {
    sprites.destroy(_4)
    jugadores += -1
})
sprites.onOverlap(SpriteKind.four, SpriteKind.cheeto, function (sprite, otherSprite) {
    sprites.destroy(cheeto)
    info.player4.changeLifeBy(-1)
})
info.player3.onLifeZero(function () {
    sprites.destroy(_3)
    jugadores += -1
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (true) {
        cheeto = sprites.create(assets.image`Cheeto`, SpriteKind.cheeto)
        cheeto.setPosition(_1.x, _1.y + 15)
    }
})
info.player1.onLifeZero(function () {
    sprites.destroy(_1)
    jugadores += -1
})
info.player2.onLifeZero(function () {
    sprites.destroy(_2)
    jugadores += -1
})
sprites.onOverlap(SpriteKind.three, SpriteKind.cheeto, function (sprite, otherSprite) {
    sprites.destroy(cheeto)
    info.player3.changeLifeBy(-1)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (true) {
        cheeto = sprites.create(assets.image`Cheeto`, SpriteKind.cheeto)
        cheeto.setPosition(_2.x, _2.y + 15)
    }
})
sprites.onOverlap(SpriteKind.one, SpriteKind.cheeto, function (sprite, otherSprite) {
    sprites.destroy(cheeto)
    info.player1.changeLifeBy(-1)
})
let cheeto: Sprite = null
let polvo = 0
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
_1 = sprites.create(assets.image`Bolsa1`, SpriteKind.one)
_2 = sprites.create(assets.image`Bolsa2`, SpriteKind.two)
_3 = sprites.create(assets.image`Bolsa3`, SpriteKind.three)
_4 = sprites.create(assets.image`Bolsa4`, SpriteKind.four)
controller.player1.moveSprite(_1, 100, 100)
controller.player2.moveSprite(_2, 100, 100)
controller.player3.moveSprite(_3, 100, 100)
controller.player4.moveSprite(_4, 100, 100)
info.player1.setLife(5)
info.player2.setLife(5)
info.player3.setLife(5)
info.player4.setLife(5)
let jugadores = 4
game.onUpdate(function () {
    if (jugadores == 0) {
        game.reset()
    }
})
