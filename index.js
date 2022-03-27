//side bar
const menuItems = document.querySelectorAll('.menu_item');
// Messages
const msgNotification = document.querySelector('#msg_notif');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message_search');
//Theme customizations
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.custom_theme');
const fontSize = document.querySelectorAll('.choose_size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose_color span');

const bg1 = document.querySelector('.bg_1');
const bg2 = document.querySelector('.bg_2');
const bg3 = document.querySelector('.bg_3');

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

//Theme customizations

// open the theme pannel
const openThemeModal = () => {
    themeModal.style.display = 'grid'
}

// close theme panel by clicking outside
const closeThemeModal = (e) => {
    if(e.target.classList.contains('custom_theme')){
        themeModal.style.display = 'none';
    }
}

// call on open and close the theme pannel func
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);



// font selection


// Swich active class on font selection
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
    

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font_size_1')){
            fontSize = '10px';
            root.style.setProperty('--sticky_top_left', '5.4rem');
            root.style.setProperty('--sticky_top_right', '5.4rem');
        } else if(size.classList.contains('font_size_2')){
            fontSize = '13px';
            root.style.setProperty('--sticky_top_left', '5.4rem');
            root.style.setProperty('--sticky_top_right', '-7rem');
        } else if(size.classList.contains('font_size_3')){
            fontSize = '16px';
            root.style.setProperty('--sticky_top_left', '5.4rem');
            root.style.setProperty('--sticky_top_right', '-17rem');
        } else if(size.classList.contains('font_size_4')){
            fontSize = '19px';
            root.style.setProperty('--sticky_top_left', '5.4rem');
            root.style.setProperty('--sticky_top_right', '-25rem');
        } else if(size.classList.contains('font_size_5')){
            fontSize = '22px';
            root.style.setProperty('--sticky_top_left', '5.4rem');
            root.style.setProperty('--sticky_top_right', '-35rem');
        } 
    
        // change font size of root html elements
        document.querySelector('html').style.fontSize = fontSize;

    })

    
})


// remove active class from unselected colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color_1')){
            primaryHue = 252;
        } else if(color.classList.contains('color_2')){
            primaryHue = 52;
        } else if(color.classList.contains('color_3')){
            primaryHue = 352;
        } else if(color.classList.contains('color_4')){
            primaryHue = 152;
        } else if(color.classList.contains('color_5')){
            primaryHue = 22;
        }
        color.classList.add('active')

        root.style.setProperty('--color_primary_hue', primaryHue);
    })
})

//them background variables
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light_color_lightness', lightColorLightness);
    root.style.setProperty('--white_color_lightness', whiteColorLightness);
    root.style.setProperty('--dark_color_lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {

    //add and remove active class
    bg1.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    // remove customised changes from local storage.
    window.location.reload();
})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%'
    lightColorLightness = '15%';

    //add and remove active class
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBg();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%'
    lightColorLightness = '0%';

    //add and remove active class
    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');

    changeBg();
})