const imgBg = document.querySelector('#img')
const btns = document.querySelector('#btns')
const brown = document.querySelector('#brown')
const beige = document.querySelector('#beige')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const urls = {
    brown: "url(img/brown.jpg) 50%/ cover", 
    beige: "url(img/beige.jpg) 50%/ cover",
    white: "url(img/white.jpg) 50%/ cover",
    blue: "url(img/blue.jpg) 50%/ cover",
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