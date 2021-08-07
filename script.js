        let container = document.querySelector(".container");
        let btn = document.querySelector(".btn");
        let input = document.querySelector(".search");

        btn.addEventListener('click', ()=>{
            // container.classList.toggle('active');
            (container.className.includes('active'))?
                container.classList.remove('active')
                :
                container.classList.add('active');
        })
