const btnNav = document.querySelector (".hamburger");
const img_Btn = btnNav.querySelector ("img");
const listNav = document.querySelector ("nav .list-nav");
const all_Li = listNav.querySelectorAll (".item-nav");
const fondu = document.querySelector (".fondu");
const nav = document.querySelector ("nav")

function is_Open (nav_el,class_name,btn_el,current_img,new_img) {
    nav_el.classList.toggle (class_name)        
        if (btn_el.src.includes(current_img)) {
            btn_el.src = "../images/"+ new_img;
            nav.style.background = "#f1f1f1"
            fondu.classList.add (class_name);
            
        } else {
            btn_el.src = "../images/"+ current_img;
            nav.style.background = "#fff"
            fondu.classList.remove (class_name);
       }

}


btnNav.addEventListener ("click",() => {
    is_Open (listNav,"active",img_Btn,"icon-hamburger.svg","icon-close.svg");
})



fondu.addEventListener ("click", () =>  {
    fondu.classList.remove ("active");
    listNav.classList.toggle ("active")
    img_Btn.src = "../images/icon-hamburger.svg";
    nav.style.background = "#fff"
})


all_Li.forEach (li => {
    li.addEventListener ("click",() => {
        is_Open (listNav,"active",img_Btn,"icon-hamburger.svg","icon-close.svg");
        nav.style.background = "#fff"
        fondu.classList.remove("active")

    })
})

