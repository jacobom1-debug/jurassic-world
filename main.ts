let mySprite: Sprite = null
let trex = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c e e e e c c . . . . . . 
    . c e e e e e e e e c . . . . . 
    c e e e e e 1 f e e e c . . . . 
    c e e e e e f f e e e e c . . . 
    c e e e e e e e e e e e c . . . 
    c c b b 1 b e e e e e e e c . . 
    c e 3 3 3 e e e e e e e e c . . 
    . b e e e e e e e e e e e c . . 
    . . c e e c e e b e e e e c c . 
    . c e e c e e b b e e e e c e c 
    . c c c c c c e e e e e e e e c 
    . . . c c c c e e e b e e e c . 
    . . c c c c c b e e b c c c . . 
    . . c e e e c d e e b c . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c e e e e c c . . . . . . 
    . c e e e e e e e e c . . . . . 
    c e e e e e 1 f e e e c . . . . 
    c e e e e e f f e e e e c . . . 
    c e e e e e e e e e e e c . . . 
    c c b b 1 b e e e e e e e c . . 
    c e 3 3 3 e e e e e e e e c . . 
    . b e e e e e e e e e e e c . . 
    . . c e e c e e b e e e e c c . 
    . c e e c e e b b e e e e c e c 
    . c c c c c c e e e e e e e e c 
    . . . c c c c e e e b e e e c . 
    . . c c c c c b e e b c c c . . 
    . . c e e e c e e e b c . . . . 
    `,img`
    . . . . c c c c c . . . . . . . 
    . . c c e e e e e c . . . . . . 
    . c e e e e 1 f e e c . . . . . 
    c e e e e e f f e e e c . . . . 
    c e e e e e e e e e e e c . . . 
    c c b b 1 b e e e e e e c . . . 
    c e 3 3 3 e e e e e e e e c . . 
    c e 3 3 3 e e e e e e e e c . . 
    . c e e e e b e e e e e e c . . 
    . . c e e c e e b e e e e c . . 
    . c e e c e e b b e e e e c c c 
    . c c c c c c e e e e e e e e c 
    . . . . c c c b e e b e e e c . 
    . . . . . c e e e b b c c c . . 
    . . . . c c c c c c c . . . . . 
    . . . . c e e e c . . . . . . . 
    `,img`
    . . . . c c c c c . . . . . . . 
    . . c c e e e e e c . . . . . . 
    . c e e e e 1 f e e c . . . . . 
    c e e e e e f f e e e c . . . . 
    c e e e e e e e e e e e c . . . 
    c c b b 1 b e e e e e e c . . . 
    c e 3 3 3 e e e e e e e e c . . 
    c e e e e e e e e e e e e c . . 
    . c e e e e b e e e e e e c . . 
    . . c e e c e e b e e e e c . . 
    . c e e c e e b b e e e e c c c 
    . c c c c c c e e e e e e e e c 
    . . . . c c b e e b e e e c c . 
    . . . . c e e e b b c c c . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c e e e c . . . . . . . 
    `,img`
    . . . . c c c c c . . . . . . . 
    . . c c e e e e e c . . . . . . 
    . c e e e e 1 f e e c . . . . . 
    c e e e e e f f e e e c . . . . 
    c e e e e e e e e e e e c . . . 
    c c b b 1 b e e e e e e c . . . 
    c e 3 3 3 e e e e e e e e c . . 
    c e e e e e e e e e e e e c . . 
    . c e e e e b e e e e e e c . . 
    . . c e e c e e b e e e e c . . 
    . c e e c e e b b e e e e c c . 
    . c c c c c b b e e e e e e c c 
    . . . c c e e b e e e e e e e c 
    . . . . c b e e b b c c c c c c 
    . . . . c c c c c c . . . . . . 
    . . . . . c e e e c . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c e e e e c c . . . . . . 
    . c e e e e e e e e c . . . . . 
    c e e e e e 1 f e e e c . . . . 
    c e e e e e f f e e e e c . . . 
    c c b b 1 b e e e e e e c . . . 
    c c 3 3 b b e e e e e e e c . . 
    c e 3 3 3 e e e e e e e e c . . 
    . b e e e e e e e e e e e c . . 
    . . c e e c e e b e e e e c . . 
    . c e e c e e b b e e e e c c c 
    . c c c c c c e e e e e e e e c 
    . . . c c c c e e e b e e e c c 
    . . . c e c c b e e b c c c . . 
    . . . c c c e e e b c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c e e e e c c . . . . . . 
    . c e e e e e e e e c . . . . . 
    c e e e e e 1 f e e e c . . . . 
    c e e e e e f f e e e e c . . . 
    c e e e e e e e e e e e c . . . 
    c c b b 1 b e e e e e e e c . . 
    c e 3 3 3 e e e e e e e e c . . 
    . b e e e e e e e e e e e c . . 
    . . c e e c e e b e e e e c . . 
    . c e e c e e b b e e e e c c c 
    . c c c c c c e e e e e e e e c 
    . . . c c c c e e e b e e c c . 
    . . c e e c c c e e b c c . . . 
    . . c c c c c e e e c . . . . . 
    `],
500,
false
)
