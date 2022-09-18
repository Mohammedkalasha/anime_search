document.querySelector('button').addEventListener('click', getAnime)

function getAnime(){
    let inputVal = document.querySelector('input').value.toLowerCase()

    fetch(`https://animechan.vercel.app/api/quotes/character?name=${inputVal}`)
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data[1].character
      document.querySelector('h3').innerText = data[1].quote
      document.querySelector('.show').innerText = data[1].anime
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


