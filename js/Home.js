let all = document.getElementById("all")
let lunch = document.getElementById("lunch")
let dinner = document.getElementById("dinner")
let dessert = document.getElementById("dessert")
let main = document.getElementById("main")   

let dish_all = document.getElementById("dish-all")
let dish_lunch = document.getElementById("dish-lunch")
let dish_dinner = document.getElementById("dish-dinner")
let dish_dessert = document.getElementById("dish-dessert")
let dish_main = document.getElementById("dish-main")

function All(){       
    /* PROPERTY DISPLAY LIST*/
    if(lunch.classList.contains('disappears') == false){
        lunch.classList.add('disappears')  
    }  
    if(dinner.classList.contains('disappears') == false){
        dinner.classList.add('disappears')  
    } 
    if(dessert.classList.contains('disappears') == false){
        dessert.classList.add('disappears')  
    } 
    if(main.classList.contains('disappears') == false){
        main.classList.add('disappears')  
    } 
    all.classList.remove('disappears')
    /* PROPERTY DISPLAY LIST*/

    /* PROPERTY ACTIVE LI */
    dish_all.classList.remove('dish-active')
    dish_lunch.classList.remove('dish-active')
    dish_dinner.classList.remove('dish-active')
    dish_dessert.classList.remove('dish-active')
    dish_main.classList.remove('dish-active')

    dish_all.classList.add('dish-active')
    /* PROPERTY LI */


}

Lunch = () => {
    if(all.classList.contains('disappears') == false){
        all.classList.add('disappears')  
    }  
    if(dinner.classList.contains('disappears') == false){
        dinner.classList.add('disappears')  
    } 
    if(dessert.classList.contains('disappears') == false){
        dessert.classList.add('disappears')  
    } 
    if(main.classList.contains('disappears') == false){
        main.classList.add('disappears')  
    } 
    lunch.classList.remove('disappears')

    dish_all.classList.remove('dish-active')
    dish_lunch.classList.remove('dish-active')
    dish_dinner.classList.remove('dish-active')
    dish_dessert.classList.remove('dish-active')
    dish_main.classList.remove('dish-active')

    dish_lunch.classList.add('dish-active')
    
}

Dinner = () => {
    if(all.classList.contains('disappears') == false){
        all.classList.add('disappears')  
    }  
    if(lunch.classList.contains('disappears') == false){
        lunch.classList.add('disappears')  
    } 
    if(dessert.classList.contains('disappears') == false){
        dessert.classList.add('disappears')  
    } 
    if(main.classList.contains('disappears') == false){
        main.classList.add('disappears')  
    } 
    dinner.classList.remove('disappears')

    dish_all.classList.remove('dish-active')
    dish_lunch.classList.remove('dish-active')
    dish_dinner.classList.remove('dish-active')
    dish_dessert.classList.remove('dish-active')
    dish_main.classList.remove('dish-active')

    dish_dinner.classList.add('dish-active')
    
}

Dessert = () => {
    if(all.classList.contains('disappears') == false){
        all.classList.add('disappears')  
    }  
    if(lunch.classList.contains('disappears') == false){
        lunch.classList.add('disappears')  
    } 
    if(dinner.classList.contains('disappears') == false){
        dinner.classList.add('disappears')  
    } 
    if(main.classList.contains('disappears') == false){
        main.classList.add('disappears')  
    } 
    dessert.classList.remove('disappears')

    dish_all.classList.remove('dish-active')
    dish_lunch.classList.remove('dish-active')
    dish_dinner.classList.remove('dish-active')
    dish_dessert.classList.remove('dish-active')
    dish_main.classList.remove('dish-active')

    dish_dessert.classList.add('dish-active')
}

Main = () => {
    if(all.classList.contains('disappears') == false){
        all.classList.add('disappears')  
    }  
    if(lunch.classList.contains('disappears') == false){
        lunch.classList.add('disappears')  
    } 
    if(dinner.classList.contains('disappears') == false){
        dinner.classList.add('disappears')  
    } 
    if(dessert.classList.contains('disappears') == false){
        dessert.classList.add('disappears')  
    } 
    main.classList.remove('disappears')


    dish_all.classList.remove('dish-active')
    dish_lunch.classList.remove('dish-active')
    dish_dinner.classList.remove('dish-active')
    dish_dessert.classList.remove('dish-active')
    dish_main.classList.remove('dish-active')

    dish_main.classList.add('dish-active')
}

let reservation = document.getElementById("reserve")
let reserve_form = document.getElementById("reverse-form")
Reservation = () => {
    reservation.classList.remove('disappears')
}

DisReverse = () => {
    reservation.classList.add('disappears');
}

function Stop(event){
    event.stopPropagation();
}

let our_menu = document.getElementById("our-menu")
let our_menu_form = document.getElementById("our-menu-form")
Our_menu = () => {
    our_menu.classList.remove('disappears')
}
DisOur_menu = () => {
    our_menu.classList.add('disappears');
}
