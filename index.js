var submitButton = document.querySelector('button[type="submit"]');
function check(radioButtons){
    
    var selectedValue = null;
    radioButtons.forEach(function(radioButton) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
        }
    });
    return selectedValue;
}
function unCheck(radioButtons){
    radioButtons.forEach(function(radioButton) {
        if (radioButton.checked) {
            radioButton.checked = false;
        }
    });
}


function reset() {
    document.getElementById('fname').value='';
    document.getElementById('email').value='';
    document.getElementById('text').value='';
    //imp1
    const radioGroup1=document.getElementById('imp1');
    let radioButtons1 = radioGroup1.querySelectorAll('input[type="radio"]');
    unCheck(radioButtons1);
    //imp2
    const radioGroup2=document.getElementById('imp2');
    let radioButtons2 = radioGroup2.querySelectorAll('input[type="radio"]');
    unCheck(radioButtons2);
    //imp3
    const radioGroup3=document.getElementById('imp3');
    let radioButtons3 = radioGroup3.querySelectorAll('input[type="radio"]');
    unCheck(radioButtons3);
}


submitButton.addEventListener('click', function() {
    const name=document.getElementById('fname').value;
    const email=document.getElementById('email').value;
 const text=document.getElementById('text').value;
 // for imp1 
    const radioGroup1=document.getElementById('imp1');
    let radioButtons1 = radioGroup1.querySelectorAll('input[type="radio"]');
    const ans1=check(radioButtons1);
 // for imp2
     const radioGroup2=document.getElementById('imp2');
     let radioButtons2 = radioGroup2.querySelectorAll('input[type="radio"]');
     const ans2=check(radioButtons2);
 //for imp3
     const radioGroup3=document.getElementById('imp3');
     let radioButtons3 = radioGroup3.querySelectorAll('input[type="radio"]');
     const ans3=check(radioButtons3);
 
 //finel msg
 if(name&&email&&ans1&&ans2&&ans3&&text)
 {
     var message = "Name: " + name + "\n" + "Email: "+email +"\n"+"Is this the first Time you are using our products & Products: "+ans1+ "\n"+"Would you suggestion to your friend and collouges: "+ans2+"\n"+"How to satisfied of our comapny and overall: "+ans3+"\n"+"Suggestions: "+text;
    alert(message);
    reset();
 }
 else  alert("Please fill all the fields");
 });


var submitButton = document.querySelector('button[type="reset"]');
submitButton.addEventListener('click', function() {
reset();
});