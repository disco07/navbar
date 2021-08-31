
const buttonCategory = document.querySelector('.nav-items.category a');
const container = document.querySelector('.category-wrapper');
let windowsContainer = false;

const category = function (e) {
    e.preventDefault()
    windowsContainer === false ? windowsContainer = true : windowsContainer = false
    if (windowsContainer) {
        container.style.display = null
    } else {
        container.style.display = "none"
    }
}

buttonCategory.addEventListener('click', category)

document.querySelectorAll('.category-item').forEach(i => {
    const div = i.parentNode.parentNode
    const parentDiv = i.parentNode.parentNode.parentNode
    const activeOnglet = i.getAttribute('id')
    i.addEventListener('click', function (e) {
        e.preventDefault()
        if (i.classList.contains('active')) {
            return
        }
        
        div.querySelector('.category-item.active').classList.remove('active')
        i.classList.add('active')

        parentDiv.querySelector('.category-choose.active').classList.remove('active')
        parentDiv.querySelector(activeOnglet).classList.add('active')
    })
})
