

const contactButton = document.getElementById("toContactButton") as HTMLButtonElement;
const upButton = document.getElementById("toProyects") as HTMLButtonElement;
const rightButton = document.getElementById("toKnowleage") as HTMLButtonElement;
const academicButton = document.getElementById("toAcademicInfo") as HTMLButtonElement;


contactButton.addEventListener("click", ()=>{
    console.log("click down")
    const url= `/styles/contact/contact.html`
    console.log(url)
    window.location.assign(url)
})

upButton.addEventListener("click", ()=> {
    console.log("click up")
    window.location.href= "./styles/proyects/proyects.html"
})

rightButton.addEventListener("click", ()=> {
    console.log("click right")
    window.location.href= "/styles/knowleage/knowleage.html"
})

academicButton.addEventListener("click", ()=>{
    console.log("click left")
    window.location.href= "./styles/"
})
