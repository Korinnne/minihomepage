const submitbutton = document.getElementById("submitbutton");
const nickname = document.getElementById("nickname");
const listing = document.getElementById("listing");
const writing = document.getElementById("text2");
const myName = document.getElementById("name");
const iWrote = document.getElementById("iWrote");
const todatdate =document.getElementById("datetoday");

const date = new Date();

const today = date.getFullYear() + "." + ((date.getMonth())+1) + "." + date.getDate() +"." + date.getHours() + "." + date.getMinutes() ;

function writeList(){
      
      writing.innerText = listing.value;
      myName.innerText = nickname.value;
     todatdate.innerText = "(" + today +")";

      nickname.value ="";
      listing.value ="";

      iWrote.classList.remove("hidden");



}
submitbutton.addEventListener("click", writeList);