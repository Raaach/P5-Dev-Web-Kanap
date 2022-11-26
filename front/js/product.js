const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const productId = urlParams.get('Id')


fetch('http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926')              
    .then((response)=> response.json())
    .then((res) => handleData(res))
    // tout ce qui suit est à l'intérieur du fetch
function handleData(Kanap){                                 //je récupère toute les donnéees du Kanap
    console.log({Kanap})
    const {altTxt, colors, description, imageUrl,name, price}= Kanap//et je les passe à make... de chacun d'esu
    makeImage(imageUrl, altTxt)
    makeColor(colors)
    makeDescription(description)
    makeTitle(name)
    makePrice(price)
}
function makeImage(imageUrl, altTxt){                       //pour chaque donnée respective je lui associe un élement corresponddant du html 
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altTxt
    const parent= document.querySelector(".item__img")
    parent.appendChild(image)
}
function makeTitle(name){
    const h1 = document.querySelector("#title")
    h1.textContent = name
}
function makePrice(price) {
    const span = document.querySelector("#price")               //attention le prix à ne pas mettre dans le localstorage
    const h3 = document.querySelector("#price")
    h3.textContent = price
}
function makeDescription(description){
    const p = document.querySelector("#description")
    p.textContent = description
}
function makeColor(colors){
    const select = document.querySelector("#colors")
    if (select != null){
        colors.forEach((color) =>{
            const option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
        })
    }
}


const button = document.querySelector("#addToCart")                 //le bouton panier on le relie via docuement querry
if (button != null){                                                // si le button est non null
    button.addEventListener("click",(e) => {                        //
        const color = document.querySelector("#colors").value
        const quantity = document.querySelector("#quantity").value
        if (color == null || color === '' || quantity == null || quantity == 0){
            alert("Séléctionnez la couleur et la quantité, Merci !")// si on a pas séléctionné le prix ou la couleur
        }                                                           // alors la popup affichera le message alerte
        localStorage.setItem(id,color)                              // on aura en local li id et la couleur
    })
}