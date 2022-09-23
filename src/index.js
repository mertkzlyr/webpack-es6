import getJoke from './App.js'
import './css/main.css'

const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', getJoke)

