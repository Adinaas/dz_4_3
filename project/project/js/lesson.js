const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

let currentIndex = 0
let autoSwitchInterval

const hideTabContent = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = 'none'
    }) 
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
    currentIndex = i 
}

const startAutoSwitch = () => {
    autoSwitchInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % tabs.length
        hideTabContent()
        showTabContent(nextIndex)
    }, 3000) 
}

const resetAutoSwitch = () => {
    clearInterval(autoSwitchInterval)
    startAutoSwitch()
}

hideTabContent()
showTabContent()
startAutoSwitch() 

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if(tab.innerText === event.target.innerText) { 
                hideTabContent()
                showTabContent(tabIndex)
                resetAutoSwitch() 
            }        
        })
    }
}

// convertor 

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')

const getCurrency = (element, target) => {
    const xhr = new XMLHttpRequest ()
    xhr.open('GET', '../data/convertor.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.onload = () => {
        const data = JSON.parse(xhr,response)
        element.oninput = () => {
            if (element.id === 'som') {
                target.value = (element.value / data.usd).toFixed(2)
            }
             if (element.id === 'usd') {
                target.value = (element.value / data.som).toFixed(2)
            }
            if (element.value ===  )
        }x
    }
}

getCurrency(somInput, usdInput)
getCurrency(usdInput, somInput)

// somInput.oninput = () => {
    // const xhr = new XMLHttpRequest ()
    // xhr.open('GET', '../data/convertor.json')
    // xhr.setRequestHeader('Content-type', 'application/json')
    // xhr.send()

    // xhr.onload = () => {
//         const data = JSON.parse(xhr.response)
//         usdInput.value = (somInput * data.som).toFixed(2)
//     }
// }

// usdInput.oninput = () => {
//     const xhr = new XMLHttpRequest ()
//     xhr.open('GET', '../data/convertor.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()

//     xhr.onload = () => {
//         const data = JSON.parse(xhr.response)
//         somInput.value = (usdInput * data.usd).toFixed(2)
//     }
// }