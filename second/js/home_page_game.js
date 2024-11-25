let t=setTimeout(function() {
  document.getElementById("myform").style.display="block";

}, 4000);


document.querySelector("#myform").onsubmit=(e)=>{
  e.preventDefault();
  
  const user_name=e.currentTarget.querySelector("#name").value;
  localStorage.setItem("userName",user_name);
  window.location.href ="second/html/game.html";
}
