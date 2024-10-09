window.onload = pageLoad;

function pageLoad(){

	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;


}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย


    
     //is passwords match

    //alert("Summited!");
	var password = document.forms["myRegister"]["password"];
    var firstname = document.forms["myRegister"]["firstname"];
    var lastname = document.forms["myRegister"]["lastname"];
    var gender = document.forms["myRegister"]["gender"];
    var bday = document.forms["myRegister"]["bday"];
    var email = document.forms["myRegister"]["email"];
    var username = document.forms["myRegister"]["username"];


    var errorMsg = document.getElementById("errormsg");

    if(password[0].value !== password[1].value){
        alert("Password do not match");
        errorMsg.textContent = "Passwords do not match. Please try again.";
        return false; // Prevent form submission
    }

   
    // is all awnser 
	if(!firstname.value ||!lastname.value || !gender.value || !bday.value || !email.value || !username.value){
        alert("Please fill all");
        errorMsg.textContent = "Please fill all";
        return false; // Prevent form submission
    }


   

}