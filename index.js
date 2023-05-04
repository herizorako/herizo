const nom = document.getElementById("votre-nom");
const prenom = document.getElementById("votre-prenom");
const age = document.getElementById("votre-age");
const email = document.getElementById("votre-email");
const cin = document.getElementById("votre-numCIN");

const nameValue = document.getElementById("mon_nom")
const firstname = document.getElementById("mon_prenom")
const old = document.getElementById("mon_age")
const couriel = document.getElementById("mon_mail")
const identity = document.getElementById("mon_cin")


let mon = document.getElementById("nomm")
let monprenom = document.getElementById("prenomm")
let votreage = document.getElementById("monage")
let votremail = document.getElementById("monmail")
let votrecin = document.getElementById("moncin")


const boutton = document.getElementById("boutton")

nom.onkeyup = function(){
    nom.style.borderColor = ""
    nameValue.innerText = nom.value
}

prenom.onkeyup = function(){
    prenom.style.borderColor = ""
    firstname.innerText = prenom.value
}


age.onkeyup = function(){
    age.style.borderColor = ""
    old.innerText = age.value
}


email.onkeyup = function(){
    email.style.borderColor = ""
    couriel.innerText = email.value
}

cin.onkeyup = function(){
    cin.style.borderColor = ""
    identity.innerText = cin.value
}

boutton.onclick = function(){
    if(nom.value == ""){
        nom.style.borderColor = "red"
        mon.style.color = "red"
    }
    if(prenom.value == ""){
        prenom.style.borderColor = "red"
        monprenom.style.color = "red"
    }
    if(age.value == ""){
        age.style.borderColor = "red"
        votreage.style.color = "red"
    }
    if(email.value == ""){
        email.style.borderColor = "red"
        votremail.style.color = "red"
    }
    if(cin.value == ""){
        cin.style.borderColor = "red"
        votrecin.style.color = "red"
    }
}