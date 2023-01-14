let data = []

let mainCont = document.getElementById('main-container')

function addMore() {
    let div = document.createElement('div')
    let randomId = Math.floor(Math.random ()* 1000 + Date.now() )
    div.setAttribute('id',randomId)
    div.className = 'd-flex mt-3 flex-row card p-3 rounded position-relative'
    let text1 = document.createElement('input')
    text1.setAttribute('class','form-control p-3')
    text1.setAttribute('placeholder','Name')

    let text2 = document.createElement('input')
    text2.setAttribute('class','form-control mx-2 p-3')
    text2.setAttribute('placeholder','Email')

    let text3 = document.createElement('input')
    text3.type = 'number'
    text3.setAttribute('class','form-control p-3')
    text3.setAttribute('placeholder','Phone Number')

    let cross = document.createElement('span')
    cross.innerHTML = 'X'
    cross.style.background='red'
    cross.style.cursor='pointer'

    cross.style.right='0px'
    cross.style.top='0px'
    cross.style.padding = '2px 9px'
    cross.style.borderRadius = '50%'

    cross.addEventListener('click',()=>{
       
        let remDiv = document.getElementById(randomId)
        remDiv.parentNode.removeChild(remDiv)
    })

    cross.className = 'position-absolute text-white'



    div.appendChild(cross)

    div.appendChild(text1)
    div.appendChild(text2)
    div.appendChild(text3)


    mainCont.appendChild(div)


}

document.getElementById('handleSubmit').addEventListener('click',()=>{
    let mnC = document.getElementById('main-container')
    let obj = {}
    for (let k = 0; k < mnC.children[0].children.length; k++) {
        data.push( mnC.children[0].children[k].value);
    }
    obj[0]=[data]
    console.log(obj);
    // console.log(mnC.children[0].children.length);
    for (let i = 1; i < mnC.children.length; i++) {
        for (let j = 1; j < mnC.children[i].children.length; j++) {
            
            data.push(mnC.children[i].children[j].value)
            obj[i]=[data[j]]
        }
    }
    // alert(JSON.stringify(data))
    alert(JSON.stringify(obj))
    
})