const input = document.querySelector('.input');
const button = document.querySelector('.search');
const API_KEY = "de80f6a1824f6f3e3fc6c89287c78148";

// adding eventlistener to the button

button.addEventListener('click',()=>{
    fetch(`https://api.jikan.moe/v3/search/anime?q=${input.value}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        console.log(data.results[0].title);
        var name = document.querySelector('.name')
        name.innerHTML= `${data.results[0].title}`
        var temp = document.querySelector('.image')
        temp.innerHTML = `<image src="${data.results[0].image_url} " class="anime" alt="anime">`
        var disc = document.querySelector('.disc')
        disc.innerHTML= `${data.results[0].synopsis}`
        var humidity = document.querySelector('.rating')
        humidity.innerHTML=`${data.results[0].score}`
    })
    .catch(err => console.log(err))
})