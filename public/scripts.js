const card = document.querySelectorAll(".card")

for (let cards of card){
 cards.addEventListener("click",function(){
     const videoId =cards.getAttribute("id")
     window.location.href=`/course/${videoId}`
     })
}
