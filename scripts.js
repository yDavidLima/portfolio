document.getElementById("show-icons").addEventListener("click", function() {
    let contactIcons = document.getElementById("contact-icons");
    contactIcons.classList.toggle("show");
    console.log("certo")
    
});




const button = document.querySelector(".ver-mais")
const verMaisbutton = document.querySelector(".card-position-dois")
const verMaisbuttontres = document.querySelector(".card-position-tres")
let trueFalse = false


function verMais(){
    
    if(trueFalse){
        verMaisbutton.style.display = "none"
        verMaisbuttontres.style.display = "none"
    } else{
        verMaisbutton.style.display = "flex"
        verMaisbutton.style.margin= "100px"

        verMaisbuttontres.style.display = "flex"
        verMaisbuttontres.style.margin= "100px"

    }
    
    trueFalse = !trueFalse

}



const list = document.querySelector(".menu-list")
list.style.maxHeight = "0px"

function menuVisible(){
    if(list.style.maxHeight == "0px"){
        list.style.maxHeight = "287px"
    } else{
        list.style.maxHeight = "0px"
    }



}


// const botaoDownload = document.getElementById("download");

// botaoDownload.addEventListener("click", function() {
//   const urlCurriculo = "https://github.com/yDavidLima/meu-curriculo/blob/main/curr%C3%ADculo.pdf";

//   const tempLink = document.createElement("a");
//   tempLink.href = urlCurriculo;
//   tempLink.download = "Curriculo_David_Lima.pdf";
//   tempLink.click();
//   document.body.removeChild(tempLink);
// });



