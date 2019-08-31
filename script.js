// Nyawa dan Poin AWAL
let nyawa = 3
let point = 0
let highScore = 0

const pHighScore = document.querySelector('.high')
pHighScore.innerHTML = 'High Point : ' + highScore
pHighScore.nextElementSibling.innerHTML = 'Your Lives : ' + nyawa

const totalScore = document.querySelector('.main .score .point')
totalScore.innerHTML = point

// Membuat angka random menentukan pilihan 
function gambarYou(){
    const randomAngka1 = Math.random()
    if( randomAngka1 < 0.34) return 'fox'
    if(randomAngka1 >= 0.34 && randomAngka1 < 0.67) return'wolf'
    return'tiger'
}

function gambarComp(){
    const randomAngka2 = Math.random()
    if( randomAngka2 < 0.34) return 'fox'
    if(randomAngka2 >= 0.34 && randomAngka2 < 0.67) return'wolf'
    return'tiger'
}

// Membuat RULES 
// Rules untuk pesan
function hasil(gambarYou, gambarComp){
    if(gambarYou == gambarComp){
        return `Selamat Kamu mendapatkan 1 point..!!!`
    } else {
        return `Sayang sekali kamu belum berhasil...!!!`
    }
}

// Rules untuk Point
function totalPoint(gambarYou, gambarComp){
    if(gambarYou == gambarComp){
        return point += 1
    } else {
        return point
    }
}

// Rules untuk Nyawa
function sisaNyawa(gambarYou, gambarComp){
    if(gambarYou != gambarComp){
        return nyawa -= 1
    } else {
        return nyawa
    }
}

// Function untuk membuat gambar berganti dalam 1 detik
function putar(){
    const imgYou = document.querySelector('.img-you')
    const imgComp = document.querySelector('.img-comp')
    const img = ['fox', 'wolf', 'tiger']
    const waktuMulai = new Date().getTime()
    let i = 0

    // membuat gambar berganti setiap 0.1 dtk
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000 ){
            clearInterval;
            return;
        }
        imgYou.setAttribute('src', 'img/' + img[i++] + '.png')
        if( i == img.length) i = 0
        imgComp.setAttribute('src', 'img/' + img[i++] + '.png')
        if( i == img.length) i = 0
    },100)
}


// Memberi event pada tombol submit --> ONCLICK <-- menggunakan addEventListener()
const submit = document.querySelector('.main .tombol')
submit.addEventListener('click', function myFunction(){
    const randomImgYou = gambarYou()
    const randomImgComp = gambarComp()
    const pesan = hasil(randomImgYou, randomImgComp)
    const point = totalPoint(randomImgYou, randomImgComp)
    const nyawa = sisaNyawa(randomImgYou, randomImgComp)

    putar()
    
    // setTimeout supaya function didalamnya selesai dalam 1 dtk / sama dengan function putar yg dipanggil
    setTimeout(function(){
        const pYou = document.querySelector('.you p')
        pYou.innerHTML = randomImgYou.toUpperCase()

        const pComp = document.querySelector('.comp p')
        pComp.innerHTML = randomImgComp.toUpperCase()

        const lives = document.querySelector('.main .life')
        lives.innerHTML = 'Your Lives : ' + nyawa

        const imgYou = document.querySelector('.img-you')
        imgYou.setAttribute('src', 'img/' + randomImgYou + '.png')

        const imgComp = document.querySelector('.img-comp')
        imgComp.setAttribute('src', 'img/' + randomImgComp + '.png')

        const pesanHasil = document.querySelector('.main .hasil')
        pesanHasil.innerHTML = pesan

        const totalScore = document.querySelector('.main .score .point')
        totalScore.innerHTML = point

        // Nyawa habis
        if( nyawa == 0){
            pesanHasil.innerHTML = '<p> GAME OVER </p>'
            const p = pesanHasil.querySelector('.hasil p')
            p.style.marginTop = '-10px'            
            
            const tombolSubmit = document.querySelector('.tombol')
            tombolSubmit.style.opacity = '0'
            tombolSubmit.style.marginLeft = '-150px'
            
            const tombolMain = document.querySelector('.col1 .tmbl-main')
            tombolMain.style.display = 'inline-block'
            tombolMain.nextElementSibling.style.marginTop = '82px'
            
        }
    },1000)
})

// Main Lagi?
const tombolMain = document.querySelector('.col1 .tmbl-main')
tombolMain.addEventListener('click', function(){
    const pHighScore = document.querySelector('.high')
    if(point > highScore){
        highScore = point
        pHighScore.innerHTML = 'High Point : ' + point 
    }
    
    const tombolSubmit = document.querySelector('.tombol')
    tombolSubmit.style.opacity = '1'
    tombolSubmit.style.marginLeft = '245px'

    nyawa = 3
    const lifeTime = document.querySelector('.main .life')
    lifeTime.innerHTML = 'Your Lives : ' + nyawa

    point = 0
    const totalScore = document.querySelector('.main .score .point')
    totalScore.innerHTML = point

    const tombolMain = document.querySelector('.col1 .tmbl-main')
    tombolMain.style.display = 'none'
    tombolMain.nextElementSibling.style.marginTop = '140px'

    const pesanHasil = document.querySelector('.main .hasil')
    pesanHasil.innerHTML = 'Selamat mencoba kembali..!'
})









