const accordionItems = document.querySelectorAll('.working-process-item')
accordionItems.forEach( (el , i) => {
    el.addEventListener('click', () => {
;

        accordionItems.forEach( (elTwo, secI) => {
            const content = elTwo.querySelector('.working-block-down');
            const vertLine = elTwo.querySelector('.working-process-line-vert')
            if(i !== secI && content.classList.contains('active')){
                content.classList.remove('active')
                vertLine.classList.remove('active')
            }
        })
        
        const content = el.querySelector('.working-block-down');
        const vertLine = el.querySelector('.working-process-line-vert')

        
        if (content.classList.contains('active')) {

            vertLine.classList.remove('active')
            content.classList.remove('active')

        } else {

            vertLine.classList.add('active')
            content.classList.add('active')

        }

    });
});