new TypeIt('.anim', {
    speed: 100,
    loop: true
}).type('Desenvolvimento Web', {
        delay: 1200
    })
    .delete(19)
    .type('Design de Sites', {
        delay: 1200
    })
    .delete(1)
    .type('mas', {
        delay: 1200
    })
    .delete(19)
    .type('Programação em Java', {
        delay: 2000
    })
    .type('Script', {
        delay: 2000
    })
    .delete(10)
    .type('C', {
        delay: 2000
    })
    .type('++', {
        delay: 2000
    })
    .delete(3)
    .type('Python', {
        delay: 1300
    })
    .go();