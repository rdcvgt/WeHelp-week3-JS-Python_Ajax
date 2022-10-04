// import fetch from 'node-fetch';import fetch from 'node-fetch';

let url = 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json'

function fetchData (){
    fetch(url,{}).then(res => {
        return res.json();
    }).then(data => {
        getData(data);
    }).catch(err => {
        console.error(err)
    })
}

function getData (data){
    let sitesArr = data.result.results
    setPromo(sitesArr)
    setArticle(sitesArr)
}

function setPromo(sitesArr){
    const infoGroup = document.querySelector('.infoGroup')

    for (let i =0; i<2; i++){
        let siteName = sitesArr[i].stitle
        let jpgUrl = 'https'+sitesArr[i].file.split('https')[1] 

        const promodiv = document.createElement("div") 
        promodiv.classList.add(`promotion`, `pr-${i+1}`)
        infoGroup.appendChild(promodiv)

            const img = document.createElement("img")
            img.src = jpgUrl
            img.classList.add('promoImg')
            promodiv.appendChild(img)

            const div = document.createElement("div")  
            div.classList.add('promoText')
            div.innerText = siteName
            promodiv.appendChild(div)
        
    }
}

startNum =2

function setArticle(sitesArr){

    const infoGroup = document.querySelector('.infoGroup')
    console.log("before", startNum)
    for (let i =startNum; i<startNum+8; i++){
        
         let siteName = sitesArr[i].stitle
         let jpgUrl = 'https'+sitesArr[i].file.split('https')[1]

         const article = document.createElement("div") 
         article.classList.add("article")
         infoGroup.appendChild(article)

            const starImg = document.createElement("img")
            starImg.src = "image/star.png"
            starImg.classList.add('starImg')
            article.appendChild(starImg)


            // const imgDiv = document.createElement("div")  
            // imgDiv.classList.add('imgBox')
            // article.appendChild(imgDiv)
            // const imgBox = document.querySelector('.imgBox')
            
            const articleImg = document.createElement("img")
            articleImg.src = jpgUrl
            articleImg.classList.add('articleImg')
            article.appendChild(articleImg)

        
            const div = document.createElement("div")  
            div.classList.add('title')
            article.appendChild(div)

            const text = document.createElement("div")  
            text.classList.add('articleText')
            text.innerText = siteName
            div.appendChild(text)

    }
    
    startNum +=8
    console.log("after",startNum)
}startNum =2

function setArticle(sitesArr){
    
    const infoGroup = document.querySelector('.infoGroup')
    // console.log("before", startNum)
    for (let i =startNum; i<startNum+8; i++){

        if(sitesArr[i+9]== undefined){
            const row = document.querySelector('.row')
            row.removeChild(document.querySelector('.loadBtn'))
            const endLoad = document.createElement("div") 
            endLoad.classList.add('endLoad')
            endLoad.innerText = "沒有更多資料囉！"
            row.appendChild(endLoad)


        }
        
         let siteName = sitesArr[i].stitle
         let jpgUrl = 'https'+sitesArr[i].file.split('https')[1]

         const article = document.createElement("div") 
         article.classList.add("article")
         infoGroup.appendChild(article)

            const starImg = document.createElement("img")
            starImg.src = "image/star.png"
            starImg.classList.add('starImg')
            article.appendChild(starImg)


            // const imgDiv = document.createElement("div")  
            // imgDiv.classList.add('imgBox')
            // article.appendChild(imgDiv)
            // const imgBox = document.querySelector('.imgBox')
            
            const articleImg = document.createElement("img")
            articleImg.src = jpgUrl
            articleImg.classList.add('articleImg')
            article.appendChild(articleImg)

        
            const div = document.createElement("div")  
            div.classList.add('title')
            article.appendChild(div)

            const text = document.createElement("div")  
            text.classList.add('articleText')
            text.innerText = siteName
            div.appendChild(text)

    }
    
    startNum +=8
    // console.log("after",startNum)
}



fetchData ()
