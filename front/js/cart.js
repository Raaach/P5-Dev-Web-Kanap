const numberOfItems = localStorage.length                               //le nombre d'object dans le localStorage

for (let i = 0; i < numberOfItems; i++) {                                
    const item = localStorage.getItem(localStorage.key(i));
    const itemObject = JSON.parse(item)
}