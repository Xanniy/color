const imgBg = document.querySelector('#img')
const btns = document.querySelector('#btns')
const brown = document.querySelector('#brown')
const beige = document.querySelector('#beige')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const urls = {
    brown: "url(../brown.jpg) 50%/ cover", 
    beige: "url(../beige.jpg) 50%/ cover",
    white: "url(../white.jpg) 50%/ cover",
    blue: "url(../blue.jpg) 50%/ cover",
}
const btnList = [brown, beige, white, blue]



btns.addEventListener("click", (e) => {
        if (e.target.tagName === 'LI') {
            btnList.forEach(function (item){
                item.classList.remove('brightness')
            })
            imgBg.style.background = urls[e.target.dataset.color];
            e.target.classList.add('brightness')
            imgBg.innerHTML = ''
        }
})