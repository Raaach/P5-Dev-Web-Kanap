const urlProduit= new URLSearchParams(document.location.search);
const idProduit = urlProduit.get("id");
console.log(idProduit)