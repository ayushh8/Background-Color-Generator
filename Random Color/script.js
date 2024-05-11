const getcolor=()=>{

    // hex code
    const randomnumer = Math.floor(Math.random()*1677215);
    const randomCode="#"+randomnumer.toString(16);
    console.log(randomnumer,randomCode)
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;
    navigator.clipboard.writeText(randomCode)
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//initial call
getcolor();