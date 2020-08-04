// ============== Pin-Matcher-Master  JavaScript   ===================  //
        
        const pinBtn = document.querySelector("#pinGenerator");
        pinBtn.addEventListener("click", function(){
        const pin = Math.random() * (9999 - 1000) + 1000;
        const newPin = Math.floor(pin);
        document.querySelector("#pinShow").value = newPin;
            })
       document.querySelector("#pinShow").value = "";

// ============== pin generate part  ===================  //

        var pinSubmit = document.querySelector('#pinSubmit');
                function value(data){
                switch (data){
                    case 'c': 
                    pinSubmit.value = "";
                    break;
                    case '<':
                    pinSubmit.value = pinSubmit.value.substr(0, pinSubmit.value.length - 1);
                    break;
                    default:
                    pinSubmit.value += data;
                    break;
                }
             }       
        document.querySelector("#pinSubmit").value = "";

// ============== keyboard part  ===================  //

            const submitBtn = document.querySelector('#submitButton');
            submitBtn.addEventListener('click', function(){
        
            let pinShow =  document.querySelector("#pinShow").value;
            let pinSubmit = document.querySelector("#pinSubmit").value;
       
       
          if (pinSubmit === pinShow) {
            let notifySuccess = document.querySelector("#notifySuccess");
            notifySuccess.style.display = "block";
            let notifyFail = document.querySelector("#notifyFail");
            notifyFail.style.display = " none";
            document.querySelector("#pinSubmit").value = "";
            document.querySelector("#pinShow").value = "";
                
  }
      
        else{
            let notifyFail = document.querySelector("#notifyFail");
            notifyFail.style.display = " block";
            let notifySuccess = document.querySelector("#notifySuccess");
            notifySuccess.style.display = "none";
            document.querySelector("#pinSubmit").value = "";
            document.querySelector("#pinShow").value = "";
        
        }  
            
});


