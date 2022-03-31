// We use this transition usually for widgets transition
const panels = document.querySelectorAll('.panel')

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