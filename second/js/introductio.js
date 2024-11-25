const introdaction = () => {

    let introdaction = document.querySelector("img");
    introdaction.style.Height = "100%";
    introdaction.style.Width = "100%";
    introdaction.style.marginLeft = "30%"
}
let arr = ["../../images/Instructions (1).jpg", "../../images/Instructions (4).jpg", "../../images/Instructions (3).jpg", "../../images/Instructions (2).jpg"], i = 1;
introdaction();
document.querySelector("#next").onclick = () => {
    if (i != 4)
        document.querySelector("img").src = arr[i++];
    else {
        i = 0;
        document.querySelector("img").src = arr[i++];
    }

}
document.querySelector("#return").addEventListener("click",()=>{
window.location.href="game.html";
});