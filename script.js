const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        //if active, remove all
        //else, remove all other active, set this to active
        if (panel.classList.contains('active')) {
            removeActiveClasses()
        } else {
            removeActiveClasses()
            panel.classList.add('active')
        }
    })
})

//all panel remove active
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}