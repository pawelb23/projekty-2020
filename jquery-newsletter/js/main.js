'use strict';

console.log('działa');

var newsletterForm = $('.newsletter');

var userName = $(newsletterForm.find('input').eq(0)); //--- zapis Jquery

//var userName = $(newsletterForm.user); // co w konsoli

var userEmail = $(newsletterForm.find('input').eq(1)); //--- zapis Jquery

//var userName = $(newsletterForm.email); // co w konsoli

newsletterForm.on('submit', function (event) {
   
    event.preventDefault();
    
    var name = userName.val();
    
    var email = userEmail.val();
    
    console.log(name,email);
    
});