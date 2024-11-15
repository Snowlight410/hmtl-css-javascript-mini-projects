const header = document.querySelectorAll('.header_part1')
header.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
const removeActiveClasses = ()=>{
    header.forEach((panel)=>{
     panel.classList.remove('active')
    })
}