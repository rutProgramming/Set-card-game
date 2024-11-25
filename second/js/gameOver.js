let t = setTimeout(function () {
    document.getElementById("div").style.display = "block";

}, 2000);

const scores = () => {

    const n = localStorage.getItem("count");
    let currentPlayer = { name: "", scorePlayer: 0 }
    currentPlayer = JSON.parse(localStorage.getItem(`user${n}`));
    let arr = []
    console.log(n);

    for (let index = 1; index < n; index++) {
        arr[index] = JSON.parse(localStorage.getItem(`user${index}`));
    }
    arr.sort((a, b) => a.scorePlayer - b.scorePlayer);
    let current = document.querySelector("#current");
    let max = document.querySelector("#max");
    current.innerHTML = `${currentPlayer.name} your score is: ${currentPlayer.scorePlayer}`;
    max.innerHTML = `The player ${arr[n - 2].name} had the max score with ${arr[n - 2].scorePlayer} points!`;
    max.style.textAlign = "center"
    current.style.textAlign = "center"

}
scores();
document.querySelector("#return").onclick = () => {
    window.location.href = "../../home_page_game.html";
}