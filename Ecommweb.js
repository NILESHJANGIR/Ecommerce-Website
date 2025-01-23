let dataArr = []
async function getData(params) {
    let url = 'https://fakestoreapi.com/products'
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    dataArr = data
    console.log(dataArr)
    cardprint(data)
}
getData()
function cardprint(print) {
    
    let ele = ''
    print.forEach((e) => {
        // console.log(e)
        ele += `
            <div class='card'>
            <div class='image'><img src="${e.image}" alt=""></div>
            
            <h4 style="font-weight: 500; padding-top:25px;">${e.title.slice(0, 17)}....</h4>
            <h5 style="padding:10px 0px 10px 0px;">Price:-${e.price}$</h5>
            
            
            <p><span>${e.category}</span> Diescripation:-${e.description.slice(0, 27)}....</p>
            <div class="buttons">
            <button class="cart" onclick="addcart()">Add to cart</button>
            <button class="buypro" onclick="porjuctbuy()">Buy</button>
            </div>
            </div>
            `
        });
        document.querySelector('.cards').innerHTML = ele
    }


let inp = document.querySelector('#search-bar')
function searchbar() {
    let searchfilter = dataArr.filter((e)=>{
        return  (e.title.toLowerCase().includes(inp.value))
    })
    // console.log(searchfilter)
    cardprint(searchfilter)
}

let rang = document.querySelector('#ranges')
console.log(rang)
rang.addEventListener('input',(q)=>{
    let pricevalue = q.target.value
    console.log(pricevalue)

    let assume = true
    if(assume){
        let filterprice = dataArr.filter((e)=>{
            return(e.price >=pricevalue)
        })
        // console.log(filterprice)
        cardprint(filterprice)
    }
})

let select = document.querySelector('#select')
function selectProduct() {
    let selectBar = dataArr.filter((e)=>{
        return(e.category.toLowerCase().includes(select.value))
    })
    console.log(selectBar)
    cardprint(selectBar)
}