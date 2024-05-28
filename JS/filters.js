const list = document.querySelector(".team-list"),
    items = document.querySelectorAll('.team-grid-item'),
    listItems = document.querySelectorAll('.team-list-item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('team-list-item')){
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }


        switch(targetId){
            case 'all':
                getItems('team-grid-item')
                break
            case 'man':
                getItems(targetId)
                break
            case 'woman':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className){
    items.forEach(item => {
        if (item.classList.contains(className)){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
