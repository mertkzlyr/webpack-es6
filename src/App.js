const getJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    document.getElementById('joke').innerHTML = data.joke
}

export default getJoke