const menu_bar = document.querySelector('.menu-bar')
const sidebar_desktop = document.querySelector('.sidebar-desktop')
const sidebar_top = document.querySelector('.sidebar-top')
const body_section__left = document.querySelector('.body-section__left')
const exit_sidebar = document.querySelector('.sidebar-exit-button')
const tables = document.querySelector('.tables')
const change_chat_size = document.querySelector('.change-size');
const chat_box = document.querySelector('.chatting')
const tables_container = document.querySelector('.tables-container')
const halls_button = document.querySelector('.halls-button')
const hall_section = document.querySelector('.hall-section')
const leave_halls_button = document.getElementById('exit-hall')
const animation_background =document.querySelector('.animation-background')
const profile_button = document.querySelector('.profile-button')
const profile_box = document.querySelector('.profile-box')
const exit_profile_box = document.querySelector('.exit-profile-box')
const edit_profile_button = document.querySelector('.edit-profile-box')
const profile_content = document.querySelector('.profile-box__content')
const profile_edit = document.querySelector('.profile-box__edit')
const back_to_profile_content = document.querySelector('.back-to-profile-content')
// const mobile_nav = document.querySelector('.mobile-nav')
// menu_bar.addEventListener('click', ()=>{
//     menu_bar.classList.toggle('change')
//     mobile_nav.classList.toggle('change')
// })

menu_bar.addEventListener('click', e=>{
    sidebar_desktop.classList.add('open')
    animation_background.classList.remove('deactive')
    animation_background.classList.add('coming')
    animation_background.addEventListener('animationend', e=>{
        animation_background.classList.remove('coming')
    }, {once:true})
    // body_section__left.classList.add('narrow')
    // tables.style.gridTemplateColumns = 'repeat(2, 1fr)'
})
exit_sidebar.addEventListener('click', e=>{
    sidebar_desktop.classList.remove('open')
    animation_background.classList.add('leaving')
    animation_background.addEventListener('animationend',e=>{
        animation_background.classList.remove('leaving')
        animation_background.classList.add('deactive')
    }, {once: true})
    // body_section__left.classList.remove('narrow')
    // tables.style.gridTemplateColumns = 'repeat(3, 1fr)'
})

change_chat_size.addEventListener('click', e=>{
    chat_box.classList.toggle('maximise')
    tables_container.classList.toggle('minimise')
    if(change_chat_size.classList.contains('maximise')){
        change_chat_size.classList.remove('maximise')
        change_chat_size.classList.add('minimise')
    }
    else{
        change_chat_size.classList.add('maximise')
        change_chat_size.classList.remove('minimise')
    }
})

halls_button.addEventListener('click', e=>{
    hall_section.classList.remove('deactive')
    hall_section.classList.add('coming')
    animation_background.classList.remove('deactive')
    animation_background.classList.add('coming')
    hall_section.addEventListener('animationend', e=>{
        hall_section.classList.remove('coming')
        animation_background.classList.remove('coming')
    }, {once: true})
})

leave_halls_button.addEventListener('click', e=>{
    hall_section.classList.add('leaving')
    animation_background.classList.add('leaving')
    hall_section.addEventListener('animationend',e=>{
        hall_section.classList.remove('leaving')
        hall_section.classList.add('deactive')
        animation_background.classList.remove('leaving')
        animation_background.classList.add('deactive')
    }, {once: true})
})




profile_button.addEventListener('click', ()=>{
    sidebar_desktop.style.zIndex = '9'
    profile_box.classList.remove('deactive')
    profile_box.classList.add('coming')
    animation_background.classList.remove('deactive')
    animation_background.classList.add('coming')
    profile_box.addEventListener('animationend', ()=>{
        profile_box.classList.remove('coming')
        animation_background.classList.remove('coming')
    }, {once:true})
})
exit_profile_box.addEventListener('click', ()=>{
    sidebar_desktop.style.zIndex = ''
    animation_background.classList.add('leaving')
    profile_box.classList.add('leaving')
    profile_box.addEventListener('animationend', ()=>{
        animation_background.classList.add('deactive')
        animation_background.classList.remove('leaving')
        profile_box.classList.remove('leaving')
        profile_box.classList.add('deactive')
    }, {once:true})
})
animation_background.addEventListener('click', (e)=>{
    if(window.getComputedStyle(hall_section).display !== 'none'){
        hall_section.classList.add('leaving')
        animation_background.classList.add('leaving')
        hall_section.addEventListener('animationend',()=>{
            hall_section.classList.remove('leaving')
            hall_section.classList.add('deactive')
            animation_background.classList.remove('leaving')
            animation_background.classList.add('deactive')
        }, {once:true})
    }
    else if(window.getComputedStyle(profile_box).display !== 'none'){
        sidebar_desktop.style.zIndex = ''
        profile_box.classList.add('leaving')
        animation_background.classList.add('leaving')
        profile_box.addEventListener('animationend',()=>{
            profile_box.classList.remove('leaving')
            profile_box.classList.add('deactive')
            animation_background.classList.remove('leaving')
            animation_background.classList.add('deactive')
        }, {once:true})
    }
    else if(window.getComputedStyle(sidebar_top).display !== 'none' ){
        animation_background.classList.add('leaving')
        sidebar_desktop.classList.remove('open')
        animation_background.addEventListener('animationend',e=>{
            animation_background.classList.remove('leaving')
            animation_background.classList.add('deactive')
        }, {once: true})
    }
})

edit_profile_button.addEventListener('click', e=>{
    profile_content.classList.add('leaving')
    profile_content.addEventListener('animationend', ()=>{
        profile_content.classList.remove('leaving')
        profile_content.classList.add('deactive')
        profile_edit.classList.remove('deactive')
        profile_edit.classList.add('coming')
    }, {once:true})
    profile_edit.addEventListener('animationend', ()=>{
        profile_edit.classList.remove('coming')
    }, {once:true})
})
back_to_profile_content.addEventListener('click',()=>{
    profile_edit.classList.remove('coming')
    profile_edit.classList.add('leaving')
    profile_edit.addEventListener('animationend', ()=>{
        profile_content.classList.add('coming')
        profile_edit.classList.remove('leaving')
        profile_edit.classList.add('deactive')
        profile_content.classList.remove('deactive')
    }, {once:true})
    profile_content.addEventListener('animationend', ()=>{
        profile_content.classList.remove('coming')
    }, {once:true})
})


const input = document.getElementById("imgInput");
const preview = document.getElementById("preview");
const removeBtn = document.getElementById("removeBtn");
const fontSelect = document.getElementById("fontSelect");
const nickColorInput = document.getElementById("nickColorInput");

input.addEventListener("change", function() {
const reader = new FileReader();
reader.onload = function() {
    preview.src = reader.result;
    preview.style.display = "block";
    removeBtn.style.display = "inline-block";
    input.previousElementSibling.innerHTML = input.files[0].name;
};
reader.readAsDataURL(input.files[0]);
});

removeBtn.addEventListener("click", function() {
preview.src = "#";
preview.style.display = "none";
removeBtn.style.display = "none";
input.value = "";
input.previousElementSibling.innerHTML = "Choose File";
});

fontSelect.addEventListener("change", function() {
preview.style.fontFamily = fontSelect.value;
});

nickColorInput.addEventListener("change", function() {
preview.style.color = nickColorInput.value;
});