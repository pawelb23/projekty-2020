'use strict';

console.log('rejestracja użytkownika');

var sectionSubmit = $('form');

var loginInput = $('.text-input');

var passwordInput = $('.password-input');

var signCheck = 0;

function checkPassword(passwordKey) {

    if (passwordInput.val().length > 3) {

        $('.div-three-colors :first-child').addClass('orange-color');

        $('#hidden-password-strength span').text('weak');

        $('#hidden-password-strength').css({
            'left': '53.5%'
        });

        if (passwordInput.val().length > 7 && (passwordInput.val().match(/[A-Z]/) || passwordInput.val().match(/[0-9]/))) {

            $('.div-three-colors :nth-child(2)').addClass('yellow-color');

            $('#hidden-password-strength span').text('avarage');

            $('#hidden-password-strength').css({
                'left': '66%'
            });

            if (passwordInput.val().length > 11 && passwordInput.val().match(/[0-9]/) && passwordInput.val().match(/[A-Z]/) && passwordInput.val().match(/[a-z]/)) {

                $('.div-three-colors :last-child').addClass('green-color');

                $('#hidden-password-strength span').text('strong');

                $('#hidden-password-strength').css({
                    'left': '81.5%'
                });

            } else {

                $('.div-three-colors :last-child').removeClass('green-color');

            }

        } else {

            $('.div-three-colors :nth-child(2)').removeClass('yellow-color');

            $('.div-three-colors :last-child').removeClass('green-color');

        }

    } else {

        $('.div-three-colors :first-child').removeClass('orange-color');

        $('.div-three-colors :nth-child(2)').removeClass('yellow-color');

        $('.div-three-colors :last-child').removeClass('green-color');

        $('#hidden-password-strength span').text('');

    }

}

sectionSubmit.on({
    'submit': function (e) {

        e.preventDefault();

        var loginValue = loginInput.val();

        var passwordValue = passwordInput.val();

        console.log(loginValue, passwordValue);

    }

})

passwordInput.on({
    'keyup': function (keyPush) { //warto używać zdarzenia keyup --- najlepiej działa

        var passwordValue = passwordInput.val();

        if (keyPush) {
            checkPassword($(this).val());

            //                console.log('działa');

        }

    }

})