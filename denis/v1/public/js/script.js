window.addEventListener('DOMContentLoaded', () => {
    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', e => {
        const target = e.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    // Modal

    const btn =  document.querySelector('.btn'),
        modal = document.querySelector('.modal');
    
        btn.addEventListener('click', openModal);
        document.addEventListener('keydown', e => {
            if(e.code === 'Escape' && modal.classList.contains('show')){
                closeModal();
            }
        });
        modal.addEventListener('click', e => {
            if(e.target === modal || e.target.getAttribute('data-close') == ''){
                closeModal();
            }
        })
    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // блокировка скрола
    }

    function closeModal(){
        modal.classList.remove('show');
        modal.classList.add('hidden');
        document.body.style.overflow = ''; //возврат скрола
    }

    // const openModalAuto = setTimeout(openModal, 1000)

});


// Slider 

const slides = document.querySelectorAll('.slider'),
    prev = document.querySelector('.prev-btn'),
    next = document.querySelector('.next-btn');
    
    let countSlides = 1;

    showSlides(countSlides);

    function showSlides(n){
        if(n > slides.length){
            countSlides = 1;
        }
        if(n < 1){
            countSlides = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');
        
        slides[countSlides - 1].style.display = 'block';
    }

    function plusSlides(n){
        showSlides(countSlides += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
        console.log(countSlides);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
        console.log(countSlides);
    })


