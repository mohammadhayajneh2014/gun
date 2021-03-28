//alert("email is (mohammad)");

//var email = prompt('enter your email');
//alert("age is (25)");
//var age = prompt('enter your age');
//if (email == "mohammad") {
//    document.write("your email is correct");
//}
//else {

  //  document.write("your email is wrong");
//}
//if (age == "25") {
  //  document.write("your age is correct");
//}
//else {

  //  document.write("your age is wrong");
//}


//document.write('<h3>'+email+'</h3>');
 
//document.write('<h3>'+age+'</h3>');

 alert("your password is mohammad");
  var Password = prompt('git your password');
 var password = 'mohammad';
 while(Password !== password){ 
     Password = prompt('Please enter password')
}

alert("YOUR WEAPONS IS M16,AKM,M416");



var favWeapon = prompt('Whats your fav weapon?');
while (favWeapon !== "M16" && favWeapon !== "M416" && favWeapon !== "AKM") {
 favWeapon = prompt('Whats your fav weapon?');
    
} 
console.log(favWeapon)
// m4,m16
var weapons = prompt('How many WEAP0NS would you like to see?');
console.log(weapons)
/// number


var image = ' '; 


for(var i = 1 ; i <=weapons; i++ ){
    if(favWeapon === 'M16'){
        image = image + '<img src="javascript/PHOTO/M16.jpg"/>';
    }else if(favWeapon === 'AKM'){
        image = image + '<img src="javascript/PHOTO/AKM.jpg"/>';
    }else if(favWeapon === 'M416'){
        image = image + '<img src="javascript/PHOTO/M416.jpg"/>';
    }
}
console.log(image);
document.write(image);

