(function () {
    // emailjs.init("enuKv7I_v-yhFbzrb");
    emailjs.init("wMUm6b6p2clpHubaY");
  })();
  
  var templateParams = {
    to_name: "login admin, super admin",
    from_name: "user",
    message: "!!HELP!!",
    reply_to:
      "arorakashish311@gmail.com,kashishar311@gmail.com,deepuphogat19@gmail.com,liza24.12drosary@gmail.com",
  };
  
   function callSOSEmail() {
     console.log("fn called");
     emailjs.send("service_8ocrxjd", "template_7c9io49", templateParams).then(
       function (response) {
         alert("SOS Message Sent!")
       },
       function (error) {      alert("Please try again!")
       }
     );
   }
  
  
  /*function callSOSEmail() {
      setTimeout(() => {
          alert("SOS Message Sent!")
      }, 1000);
    }*/
  