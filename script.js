const joke = document.querySelector("#joke")
const jokeBtn = document.querySelector("#joke-btn")

function generateJoke() {

  const xhr = new XMLHttpRequest()
  
  xhr.open("GET", "https://api.chucknorris.io/jokes/random")
  
  xhr.onreadystatechange = function() {
    if (this.readyState === 4){
      if (this.status === 200){
        joke.innerHTML = JSON.parse(this.responseText).value
      }
      else{
        joke.innerHTML = "Something Went Wrong"
      }
    }
  }
  xhr.send()
}



jokeBtn.addEventListener("click", generateJoke)
document.addEventListener("DOMContentLoaded", generateJoke)