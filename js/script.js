let right_nav_item = document.querySelectorAll('.right-nav-item');



right_nav_item.forEach( item =>{
    item.addEventListener('click',function(){
        right_nav_item.forEach( nav => nav.classList.remove('active'));
        
        item.classList.add('active')
    })
})

