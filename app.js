let age = document.querySelector(".input-age");
let ageimage = document.querySelector(".age-img");
let form = document.querySelector(".form-submit");
let text = document.querySelector(".p");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    if (isNaN(age.value)){
    text.innerHTML = "Iltimos son kiriting.....";
    text.style.fontFamily = "Arial";
    return;
    };
    if (age.value <= 0){
    text.innerHTML = "Iltimos 0 dan katta son kiriting.....";
    text.style.fontFamily = "Arial";
    return;
    };
    text.innerHTML = "Sizning yoshingiz: " + age.value;
    
    let ages = age.value;
    if(ages >= 1 && ages <= 5){
    chaqaloq();
    }else if(ages >= 6 && ages <= 10){
    bola();
    }else if(ages >= 11 && ages <= 18){
    osbirin();
    }else if(ages >= 19 && ages <= 30){
    kattaodam();
    }else if(ages >= 31 && ages <= 70){
    kattaodam2();
    }else if(ages >= 71 && ages <= 100){
    chol();
    }else if(ages >= 100){
    oldingiz();
    };
});

const chaqaloq = () =>{
    ageimage.classList.remove( "bola", "osbirin", "kattaodam", "kattaodam2","chol", "oldingiz");
    ageimage.classList.add("chaqaloq");
};

const bola = () =>{
    ageimage.classList.remove("chaqaloq", "bola", "osbirin", "kattaodam", "kattaodam2","chol", "oldingiz");
    ageimage.classList.add("bola");
};

const osbirin = () =>{
    ageimage.classList.remove("chaqaloq", "bola", "osbirin", "kattaodam", "kattaodam2","chol", "oldingiz");
    ageimage.classList.add("osbirin");
};

const kattaodam = () =>{
    ageimage.classList.remove("chaqaloq", "bola", "osbirin", "kattaodam", "kattaodam2","chol", "oldingiz");
    ageimage.classList.add("kattaodam");
};

const kattaodam2 = () =>{
    ageimage.classList.remove("chaqaloq", "bola", "osbirin", "kattaodam", "kattaodam2","chol", "oldingiz");
    ageimage.classList.add("kattaodam2");
};

const chol = () =>{
    ageimage.classList.remove("chaqaloq", "bola", "osbirin", "kattaodam", "kattaodam2", "chol", "oldingiz")
    ageimage.classList.add("chol")
};

const oldingiz = () =>{
    ageimage.classList.remove("chaqaloq", "bola", "osbirin", "kattaodam", "kattaodam2", "chol", "oldingiz");
    ageimage.classList.add("oldingiz");
};