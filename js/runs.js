//JESUS IS LORD
//import emailjs from "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
(function(){
    emailjs.init({
        PublicKeyCredential:"DffGOUANLHoHxj1iI"
    })
})
window.onload = function(){
    const frm = document.getElementById("frm")

    frm.addEventListener("submit",(event)=>{
        event.preventDefalt();

        emailjs.sendForm("service_ttte4tm","template_g7uypn1",this)
            .then(()=>{
                this.alert("Thanks! Message Submitted.")
                frm.reset();
            }),
                (error)=>{
                    this.alert("Error! Message Submitted.")
                    console.error(error)
                }
    })
}
