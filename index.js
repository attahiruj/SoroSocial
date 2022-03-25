//side bar
const menuItems = document.querySelectorAll('.menu_item');
// Messages
const msgNotification = document.querySelector('#msg_notif');
const messages = document.querySelector('.messages');

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
        if(item.id != 'all_notif'){
            document.querySelector('.notif_popup').style.display = 'none';
            document.querySelector('#all_notif .notif_count').style.display = 'block'
        } else{
            document.querySelector('.notif_popup').style.display = 'block';
            //hide pop up icon when selected
            document.querySelector('#all_notif .notif_count').style.display = 'none';
        }
    })
})

//messages
msgNotification.addEventListener('click', () => {
    //sets box shadow when msg icon is clicked
    messages.style.boxShadow = '0 0 1rem var(--color_primary)';

    //hide notif count when msg icon is clicked
    msgNotification.querySelector('.notif_count').style.display = 'none'
    
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
})