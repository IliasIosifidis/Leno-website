document.addEventListener('DOMContentLoaded', function(){
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle')
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items')

    toggleButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    })

    // Video Modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button')
    const closeButton = document.querySelector('.modal__close-button')
    const videoPlayer = document.getElementById('videoPlayer')
    //Open the modal on click
    videoButton.addEventListener('click', function(){
        //Show Modal
        modal.style.display = 'block';
        //Replace src attribute with video url
        videoPlayer.src = 'https://cdn.naturettl.com/wp-content/uploads/2015/02/22015039/featured.jpg'
        //Close Modal with X button
        closeButton.addEventListener('click', function(){
            modal.style.display='none'
            videoPlayer.src =''
        })
        //Close Modal on outer click
        window.addEventListener('click', function(event){
            if (event.target == modal){
                modal.style.display='none'
                videoPlayer.src=''
            }
        })
    })
})

// Navigation Background
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar')
    if(window.scrollY > 0){
        navbar.classList.add('navbar--scroll')
    } else {
        navbar.classList.remove('navbar--scroll')
    }
})