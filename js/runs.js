//JESUS IS LORD
//import emailjs from "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

const frm = document.getElementById("frm")
window.onload = function(){

    frm.addEventListener("submit",async function(event){
        event.preventDefault();
        const name= document.getElementById("name").value;
        const email= document.getElementById("email").value;
        const title= document.getElementById("title").value;
        const number= document.getElementById("number").value;
        const message= document.getElementById("message").value;
        const py = {
            name: name,
            email: email,
            title: title,
            se: number,
            message: message
        };
        try {
            const res = await fetch("https://oasis-backend-server-ndlo.vercel.app/api/send-mail",
                {
                    method: "POST",
                    headers: {
                        'content-type':'application/json'
                    },body: JSON.Stringify(py)
                }
            );
            const r = await res.json();
            console.log(r);
         } catch (error) {
            console.log(error);
            
        };
    })
}
