'use strict';

console.log('Kalkulator');

var inputActionString = document.getElementById('wynik');

function dzial(btn) {

    if (inputActionString.value.length > 10) {

        document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

        //        document.querySelector('button.procent').setAttribute('onclick', "dzial('')");

        if (btn == '=') {

            document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

            document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

            document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

            document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

            document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

            document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

            // --- ZNAK RÓWNANIA --- po naciśnięciu wykonuje dziłanie widoczne w <input id="wynik">
            if (document.getElementById('wynik').value.match(/[\-,\+,\*,\/]$/)) {
                //                                   console.log('znak ===');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/[\-,\+,\*,\/]$/, '');

                document.getElementById('wynik').value = eval(document.getElementById('wynik').value)

            } else {

                document.getElementById('wynik').value = eval(document.getElementById('wynik').value);

            }

            // --- ZNAK DEL ---
        } else if (btn == 'del') {

            document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");

            document.getElementById('wynik').value = '0';

            document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

            document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

            document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

            document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

            document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

            document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

            return inputActionString.value = inputActionString.value = '0';

        } else if (btn == '%') {

            //                        console.log('%%%');

            document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

            document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

            document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

            document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

            document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

            document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

            if (document.getElementById('wynik').value.match(/[\-,\+,\*,\/]$/)) {

                //                console.log('znak %%%');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/[\-,\+,\*,\/]$/, '');

                document.getElementById('wynik').value = eval(document.getElementById('wynik').value)

            }

            //zamiana na procenty
            document.getElementById('wynik').value = eval(document.getElementById('wynik').value);

        } else {

            return inputActionString.value = inputActionString.value;

        }

    }

    // --- ZNAK RÓWNANIA ---
    if (btn == '=') {

        //        console.log('=====');

        document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

        document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

        document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

        document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

        // --- ZNAK RÓWNANIA --- po naciśnięciu wykonuje dziłanie widoczne w <input id="wynik">
        //                document.getElementById('wynik').value = eval(document.getElementById('wynik').value);

        if (document.getElementById('wynik').value.match(/[\-,\+,\*,\/]$/)) {

            //            console.log('znak ===');

            document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/[\-,\+,\*,\/]$/, '');

            document.getElementById('wynik').value = eval(document.getElementById('wynik').value)

        } else {

            //            console.log('==3');

            // --- ZNAK RÓWNANIA --- po naciśnięciu wykonuje dziłanie widoczne w <input id="wynik">            
            document.getElementById('wynik').value = eval(document.getElementById('wynik').value)

            if (document.getElementById('wynik').value == 'undefined') {

                return document.getElementById('wynik').value = '';

            } else if (document.getElementById('wynik').value == 'Infinity' || document.getElementById('wynik').value == '-Infinity') {

                //                console.log('===2');

                document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('0')");

                //document.querySelector('button.rowna-sie').classList.add('rowna-sie-na-zero');

                return document.getElementById('wynik').value = 'ERROR';

                //                    } else if (document.getElementById('wynik').value == 'ERROR') {
                //            
                //                        document.getElementById('wynik').value = '0';

            }

        }

        // --- ZNAK DEL ---
    } else if (btn == 'del') {

        document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

        document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");

        document.getElementById('wynik').value = '0';

        document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

        document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

        document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

        // --- ZNAK PROCENT ---
    } else if (btn == '%') {

        //        console.log('%%%');

        document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

        document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

        document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

        if (document.getElementById('wynik').value.match(/[\-,\+,\*,\/]$/)) {

            //            console.log('znak %%%');

            document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/[\-,\+,\*,\/]$/, '');

            document.getElementById('wynik').value = eval(document.getElementById('wynik').value)

        }

        //zamiana na procenty
        document.getElementById('wynik').value = eval(document.getElementById('wynik').value);

        document.getElementById('wynik').value = (document.getElementById('wynik').value) / 100;

        //        document.querySelector('button.kropka').setAttribute('onclick', "dzial('')");

        document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

        document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

        document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

        // --- WARTOŚĆ ZERO ---
    } else if (btn == '0') {

        //        console.log('...');

        //        document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

        document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");

        document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

        document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

        document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

        //                     console.log('0.0');

        if (document.getElementById('wynik').value === '') {

            //                         console.log('0.1');

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === '0') {

            document.getElementById('wynik').value = '';

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === '-0') {

            document.getElementById('wynik').value = '-';

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === 'ERROR') {

            document.getElementById('wynik').value = '';

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value !== '') {

            //                        console.log('Spr/0');

            if (document.getElementById('wynik').value.match(/\/0/)) {

                //                                console.log('mat /');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\/0$/, '/');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\*0/)) {

                //                                console.log('mat *');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\*0$/, '*');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\+0/)) {

                //                                console.log('mat +');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\+0$/, '+');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\-0/)) {

                //                                console.log('mat -');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\-0$/, '-');

                return document.getElementById('wynik').value += btn;

            } else {

                return document.getElementById('wynik').value += btn;

            }

        } else {

            return document.getElementById('wynik').value += btn;

        }

        // --- WARTOSCI OD 1 DO 9 ---
    } else if (btn == '1' || btn == '2' || btn == '3' || btn == '4' || btn == '5' || btn == '6' || btn == '7' || btn == '8' || btn == '9') {

        document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");

        document.querySelector('button.procent').setAttribute('onclick', "dzial('%')");

        document.querySelector('button.plus').setAttribute('onclick', "dzial('+')");

        document.querySelector('button.minus').setAttribute('onclick', "dzial('-')");

        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('*')");

        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('/')");

        //                     console.log('1.0');

        if (document.getElementById('wynik').value === '0' || document.getElementById('wynik').value == 'ERROR' || document.getElementById('wynik').value == 'NaN') {

            document.getElementById('wynik').value = '';

            document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === '-0') {

            document.getElementById('wynik').value = '-';

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value !== '') {

            //                        console.log('Spr/0');

            if (document.getElementById('wynik').value.match(/\/0/)) {

                //                                console.log('mat /');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\/0$/, '/');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\*0/)) {

                //                                console.log('mat *');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\*0$/, '*');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\+0/)) {

                //                                console.log('mat +');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\+0$/, '+');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\-0/)) {

                //                                console.log('mat -');

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\-0$/, '-');

                return document.getElementById('wynik').value += btn;

            } else {

                return document.getElementById('wynik').value += btn;

            }

        } else {

            return document.getElementById('wynik').value += btn;

        }

        // --- ZNAK MINUS ---
    } else if (btn == '-') {

        //        console.log('ac');

        document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

        //        document.querySelector('button.procent').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.plus').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.minus').setAttribute('onclick', "dzial('')");
        //
        //        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('')");
        //        //
        //        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('')");

        if (document.getElementById('wynik').value === '0' || document.getElementById('wynik').value === 'ERROR' || document.getElementById('wynik').value === 'NaN') {

            document.getElementById('wynik').value = '';

            document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value.match(/[\+,\-,\*,\/,\.]$/)) {

            //            console.log('znak ---');

            return document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/[\+,\-,\*,\/,\.]$/, '-');

        } else {
            //            console.log('btn');
            document.getElementById('wynik').value += btn;

        }

        // --- ZNAKI PLUS, MNOŻENIE, DZIELENIE ---
    } else if (btn == '+' || btn == '*' || btn == '/') {
        //        console.log('prb...');
        document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

        //        document.querySelector('button.procent').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.plus').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.minus').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('')");

        if (document.getElementById('wynik').value) {

            if (document.getElementById('wynik').value === '') {

                document.getElementById('wynik').value = '';

            } else if (document.getElementById('wynik').value === 'NaN' || document.getElementById('wynik').value === 'ERROR') {

                //                console.log('prb..2');

                return document.getElementById('wynik').value;

            } else if (document.getElementById('wynik').value.match(/[\+,\-,\*,\/,\.]$/)) {

                //                console.log('znak ---');

                if (document.getElementById('wynik').value.match(/[\+,\*,\/,\.]$/)) {

                    document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/[\+,\*,\/,\.]$/, '');

                    document.getElementById('wynik').value += btn;

                } else if (document.getElementById('wynik').value == '-') {

                    document.getElementById('wynik').value == '-';

                    //                    console.log('znak ---2');

                } else {
                    document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/[\-]$/, '');

                    document.getElementById('wynik').value += btn;

                    console.log('i tuu');

                }

            } else {

                document.getElementById('wynik').value += btn;

            }

        }

        // --- ZNAK KROPKA ---
    } else if (btn == '.') {

        //                console.log('---2');

        document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

        //        document.querySelector('button.procent').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.plus').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.minus').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.mnozenie').setAttribute('onclick', "dzial('')");

        //        document.querySelector('button.dzielenie').setAttribute('onclick', "dzial('')");

        if (document.getElementById('wynik').value === '') {

            document.getElementById('wynik').value = '';

        } else if (document.getElementById('wynik').value !== '') {

            //                        console.log('---3');

            document.querySelector('button.kropka').setAttribute('onclick', "dzial('')");

            //                        console.log('Spr/0');
            if (document.getElementById('wynik').value.match(/\/$/)) {
                //                                                console.log('mat /');
                document.getElementById('wynik').value += btn;

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\/\.$/, '/');

                document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

                return document.getElementById('wynik').value;

            } else if (document.getElementById('wynik').value.match(/\*$/)) {
                //                                                console.log('mat *');
                document.getElementById('wynik').value += btn;

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\*\.$/, '*');

                document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");


                return document.getElementById('wynik').value;

            } else if (document.getElementById('wynik').value.match(/\+$/)) {
                //                                                console.log('mat +');

                document.getElementById('wynik').value += btn;

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\+\.$/, '+');

                document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");


                return document.getElementById('wynik').value;

            } else if (document.getElementById('wynik').value.match(/\-$/)) {
                //                                                console.log('mat -');

                document.getElementById('wynik').value += btn;

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\-\.$/, '-');

                document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

            } else if (document.getElementById('wynik').value.substring(0, inputActionString.value.length) == document.getElementById('wynik').value.match(/[0-9]{1,}\.[0-9]{1,}/)) {

                //                        console.log('kropka...');

                document.getElementById('wynik').value += btn;

                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\.$/, '');

                document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

            } else {

                //                console.log('else...');

                document.getElementById('wynik').value += btn;

                //                            document.querySelector('button.kropka').setAttribute('onclick', "dzial('.')");

            }

        }

    } else {

        //odpowiada za to co widzimy w <input id="wynik">
        document.getElementById('wynik').value += btn;
        //                console.log(btn);

    }

}