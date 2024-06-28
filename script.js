const list = document.querySelector('ul')
const showItems = document.querySelector('.show-items')
const mapItems = document.querySelector('.map-items')
const sumItems = document.querySelector('.sum-items')
const filterItems = document.querySelector('.filter-items')



function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return newValue
}


function showAllItems(productsArray) {
    let myLi = ''
    productsArray.forEach( product => {
        
        
        myLi += 
        `
        <li>
        <img src= ${product.src}>
        <p> ${product.name} </p>
        <p class="item-price"> ${formatCurrency(product.price)} </p>
        </li>
        `
        
    })
    
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrice = menuOptions.map( (product) => ({
        ...product, //spread operator
        price: product.price * 0.9, //10% de desconto
        
    }))

    showAllItems(newPrice)

}

function sumAllItems() {
    const sumAll = menuOptions.reduce((acc, value) => {
        return  acc + value.price 
        
    }, 0)

    list.innerHTML =
    `
    <li>
        <p> O valor total dos produtos é R$ ${formatCurrency(sumAll)} </p>
    </li>
    
    `
}

function filterAllItems() {
    const veganItems = menuOptions.filter( (product) => product.vegan)
   

    showAllItems(veganItems)
}




showItems.addEventListener('click',  () => showAllItems(menuOptions)) //função vazia para chamar a função assim que o botão for clicado.
mapItems.addEventListener('click', mapAllItems)
sumItems.addEventListener('click', sumAllItems)
filterItems.addEventListener('click', filterAllItems)