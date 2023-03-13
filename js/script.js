navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{

    navbar.classList.toggle('active');
    profile.classList.remove('active');

}

profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{

    profile.classList.toggle('active');
    // profile.classList.toggle('actives');
    navbar.classList.remove('active');
    // navbar.classList.remove('actives');
    

}

window.onscroll = () =>{

    navbar.classList.remove('active');
    profile.classList.remove('active');

}
