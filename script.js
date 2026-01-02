const mostrar=(numero)=>{
  const idProjects = document.querySelector("#Projects")
  const idAbout = document.querySelector("#About")
  const idContact = document.querySelector("#Contact")
  switch(numero){
    case 1:
      idProjects.style.display = "block"
      idAbout.style.display = "none"
      idContact.style.display = "none"
    break;
    case 2:
      idProjects.style.display = "none"
      idAbout.style.display = "block"
      idContact.style.display = "none"
    break;
    case 3:
      idProjects.style.display = "none"
      idAbout.style.display = "none"
      idContact.style.display = "block"
    break;
  }

}

window.addEventListener("load",()=>{
  const botonProjects = document.querySelector("#botonProjects")
  const botonAbout = document.querySelector("#botonAbout")
  const botonContact = document.querySelector("#botonContact")

  botonProjects.addEventListener("click",()=>{mostrar(1)})
  botonAbout.addEventListener("click",()=>{mostrar(2)})
  botonContact.addEventListener("click",()=>{mostrar(3)})
})