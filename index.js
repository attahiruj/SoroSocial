//side bar
const menuItems = document.querySelectorAll('.menu_item');
// Messages
const msgNotification = document.querySelector('#msg_notif');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message_search');

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

//search for chats by name
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);


//highlight message box when message is clicked
msgNotification.addEventListener('click', () => {
    //sets box shadow when msg icon is clicked
    messages.style.boxShadow = '0 0 1rem var(--color_primary)';

    //hide notif count when msg icon is clicked
    msgNotification.querySelector('.notif_count').style.display = 'none'
    
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
})