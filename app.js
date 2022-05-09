// reach out to the jsonplaceholder api - specifically the /posts route (ajax request)
// I want you to paint that data to the dom. Append to the cardList


const btn = document.querySelector('#btn')
const display = document.querySelector('#dataDisplay')
const singlePost = document.querySelector('#itemDisplay')


btn.addEventListener('click', getData)

function getData() {
    $.get('https://jsonplaceholder.typicode.com/posts/', function(data) {
        createElements(data)
    })
    
}

function createElements(arr) {
    for(let i = 0; i < arr.length; i++) {
        post(arr[i])
 
    }
    
}

function post(elem) {
    const div = document.createElement('div')

    div.textContent = elem.title
    div.id = elem.id
    display.appendChild(div)


    // addEventListener
    addEventListenerToDiv(div)
}

// add functionality to where if an item is clicked on, it creates a new dom element, and appends THAT to the itemDisplay


function addEventListenerToDiv(div) {
    div.addEventListener('click', function(event) {
        const id = event.target.id
        $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, function(data) {
            console.log(data)
            makeSinglePost(data)
        })
    })
}


function makeSinglePost(obj) {
    const div = document.createElement('div')
    div.textContent = obj.title
    div.className = 'test'
    console.log(div)
    singlePost.appendChild(div)
}





//  Jsonplacehoder url ----> https://jsonplaceholder.typicode.com/