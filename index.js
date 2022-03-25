//side bar
const menuItems = document.querySelectorAll('.menu_item');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

//set menu item as active
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // display notif popup if notification is selected
        if(item.id != 'msg_notif'){
            document.querySelector('.notif_popup').style.display = 'none';
            document.querySelector('#msg_notif .notif_count').style.display = 'block'
        } else{
            document.querySelector('.notif_popup').style.display = 'block';
            //hide pop up icon when selected
            document.querySelector('#msg_notif .notif_count').style.display = 'none';
        }
    })
})