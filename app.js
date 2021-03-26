function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
};
function validateForm() {
    var fname = document.contactForm.fname.value;
    var lname = document.contactForm.lname.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var address = document.contactForm.address.value;
    var pincode = document.contactForm.pincode.value;
    var nameErr = lnameErr = emailErr = mobileErr = addressErr = pincodeErr = true;
    
    // Validate fname
    if(fname == "") {
        printError("nameErr", "Please enter your First Name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;   
        if(regex.test(fname) === false) {
            printError("nameErr", "Please enter a valid First Name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if(lname == "") {
        printError("lnameErr", "Please enter your Last Name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid Last Name");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        }
    }
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^([A-Za-z0-9.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
    	if(mobile<1000000000 || mobile>99999999999)
    		printError("mobileErr","Please enter valid 10 or 11 digit number");
    	else {
	        var regex = /^[7-9]\d{10}$/;
	        var regex1 = /^[7-9]\d{9}$/;
	        if(regex.test(mobile) === false && regex1.test(mobile)===false) {
	            printError("mobileErr", "Please enter a valid mobile number starting with 7,8 or 9");
	        } else{
	            printError("mobileErr", "");
	            mobileErr = false;
	        }
	    }
    }
    
    // Validate address
    if(address == "") {
        printError("addressErr", "Please enter your address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }
    
    // Validate pincode
    if(pincode == "") {
        printError("pincodeErr", "Please enter your pincode");
    } else {
    	var regex=/^\d{6}$/;
    	if(regex.test(pincode) === false)
    		printError("pincodeErr","Please enter valid 6 digit pin code");
    	else {
	    	var regex = /^[1-9]\d{5}$/;
	    	if(regex.test(pincode) === false) {
	        printError("pincodeErr", "Please enter vaid pin number not starting 0");
	    	}else{
	        	printError("pincodeErr", "");
	        	pincodeErr = false;
	        }
	    }
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || lnameErr || emailErr || mobileErr || addressErr || pincodeErr) == true) {
       return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + fname + " " + lname + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "address: " + address + "\n" +
                          "pincode: " + pincode + "\n";
        alert(dataPreview);
    }
};