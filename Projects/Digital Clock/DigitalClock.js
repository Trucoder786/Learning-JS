const clock = document.getElementById('clock')

const stringT = document.getElementById('banner')
stringT.style.fontSize = "30px"



setInterval(function(){
    const date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
    
    
},1000)
