const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generatejoke)

generatejoke()

function generatejoke()
{
 const config =
 {
    headers:
    {
        Accept: 'application/json',
    },
 }
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => 
    {
        jokeEL.innerHTML = data.joke
    })
}