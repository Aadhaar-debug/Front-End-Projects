// We use this transition usually for widgets transition
const panels = document.querySelectorAll('.panel')
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

panels.forEach(panel => 
{
	panel.addEventListener('click', () =>
	{
		removeActiveClasses()
		panel.classList.add('active')
	})
})


function removeActiveClasses() {
	panels.forEach(panel =>
	{
		panel.classList.remove('active')
	})
}

function run()
{
    idx++

    changeImage()
}
function changeImage()
{
    if(idx > img.length - 1)
    {
        idx = 0
    }
    else if(idx < 0)
    {
        idx = img.length - 1
    }

    imgs.style.transform = `translate(${-idx * 1500}px)`
}
function resetInterval()
{
    clearInterval(interval)
    interval = setInterval(run,2000)
}
rightBtn.addEventListener('click',() => 
{
    idx --
    changeImage()
    resetInterval()
})
leftBtn.addEventListener('click',() => 
{
    idx --
    changeImage()
    resetInterval()
})

