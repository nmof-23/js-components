const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    const outsideZone = nav.pa

    burger.addEventListener('click' , (event) => {
        
        const withinBoundariesNav = event.composedPath().includes(nav) // true
      
        const withinBoundariesBurger = event.composedPath().includes(burger) // true

        if(withinBoundariesBurger === true && withinBoundariesNav === false ){
            nav.classList.toggle('nav-active');
            nav.classList.toggle('nav-links-mobile');
        
        }
     
        navLinks.forEach((link ,index) => {
            if(link.style.animation) {
                link.style.animation = ""
            }else{

                link.style.animation = `navLinksFade  0.5s forwards ${index/7 + .4}s` 
            }
        });

    });

};

navSlide();