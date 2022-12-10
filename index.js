function sendmail(){
var params = {
    name: document.getElementById("name").value,
    email:document.getElementById("email").value,
   message: document.getElementById("message").value,
   subject: document.getElementById("subject").value,

};


const serviceID="service_lonzyqk";
const templateID="template_cnzov4q";
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        
        alert("your message sent succesfully");
    }
)
.catch(err=>console.log(err))
}