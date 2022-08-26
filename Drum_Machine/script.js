console.log('JavaScript')


// Click functions in jQuery for each button clicked by user

let Q = document.getElementById('Q')

$('#chord-1').on('click', function () {
    Q.play()
    //    console.log('Yay!')
})

$('#chord-2').on('click', function () {
    W.play()
    //    console.log('Yay!')
})

$('#chord-3').on('click', function () {
    E.play()
    //    console.log('Yay!')
})

$('#dry-ohh').on('click', function () {
    A.play()
    //    console.log('Yay!')
})

$('#dsc-oh').on('click', function () {
    S.play()
    //    console.log('Yay!')
})

$('#kick-n-hat').on('click', function () {
    D.play()
    //    console.log('Yay!')
})

$('#punchy-kick').on('click', function () {
    Z.play()
    //    console.log('Yay!')
})

$('#give-light').on('click', function () {
    X.play()
    //    console.log('Yay!')
})

$('#side-stick').on('click', function () {
    C.play()
    //    console.log('Yay!')
})

// KeyDown Presses initiated when user presses coordinating keys

$(document).on('keydown', e => {
    // console.log(e.key)
    if (e.key === 'q') {
        Q.play()
    } else if (e.key === 'w') {
        W.play()
    } else if (e.key === 'e') {
        E.play()
    } else if (e.key === 'a') {
        A.play()
    } else if (e.key === 's') {
        S.play()
    } else if (e.key === 'd') {
        D.play()
    } else if (e.key === 'z') {
        Z.play()
    } else if (e.key === 'x') {
        X.play()
    } else if (e.key === 'c') {
        C.play()
    }
})

$('#drum-pad').on('click', function() {
    if(e.key === 'q') {
        console.log('chord-1');
    }
    //    console.log('Yay!')
})
