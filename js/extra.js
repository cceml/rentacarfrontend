function myFunc(){
    
    if (flexCheckChecked.checked==1){
        document.getElementById('btnac').disabled = false;
    }
    else{
        document.getElementById('btnac').disabled = true;
    }
}

function myFunctwo() {

    if (flexCheckChecked2.checked == 1) {
        document.getElementById('btnac2').disabled = false;
    }
    else {
        document.getElementById('btnac2').disabled = true;
    }
}

function myFuncthree() {

    if (flexCheckChecked3.checked == 1) {
        document.getElementById('btnac3').disabled = false;
    }
    else {
        document.getElementById('btnac3').disabled = true;
    }
}

function myFuncfour() {

    if (flexCheckChecked4.checked == 1) {
        document.getElementById('btnac4').disabled = false;
    }
    else {
        document.getElementById('btnac4').disabled = true;
    }
}

function myFuncfive() {

    if (flexCheckChecked5.checked == 1) {
        document.getElementById('btnac5').disabled = false;
    }
    else {
        document.getElementById('btnac5').disabled = true;
    }
}

function myFuncsix() {

    if (flexCheckChecked6.checked == 1) {
        document.getElementById('btnac6').disabled = false;
    }
    else {
        document.getElementById('btnac6').disabled = true;
    }
}

function myFunc7() {

    if (flexCheckChecked7.checked == 1) {
        document.getElementById('btnac7').disabled = false;
    }
    else {
        document.getElementById('btnac7').disabled = true;
    }
}

function myFunceight() {

    if (flexCheckChecked8.checked == 1) {
        document.getElementById('btnac8').disabled = false;
    }
    else {
        document.getElementById('btnac8').disabled = true;
    }
    
}

function myFunc9() {

    if (flexCheckChecked9.checked == 1) {
        document.getElementById('btnac9').disabled = false;
    }
    else {
        document.getElementById('btnac9').disabled = true;
    }
}

function myFunc10() {

    if (flexCheckChecked10.checked == 1) {
        document.getElementById('btnac10').disabled = false;
    }
    else {
        document.getElementById('btnac10').disabled = true;
    }

}

function myFunc11() {

    if (flexCheckChecked11.checked == 1) {
        document.getElementById('btnac11').disabled = false;
    }
    else {
        document.getElementById('btnac11').disabled = true;
    }

}

function myFunc12() {

    if (flexCheckChecked12.checked == 1) {
        document.getElementById('btnac12').disabled = false;
    }
    else {
        document.getElementById('btnac12').disabled = true;
    }

}

function myFunc13() {

    if (flexCheckChecked13.checked == 1) {
        document.getElementById('btnac13').disabled = false;
    }
    else {
        document.getElementById('btnac13').disabled = true;
    }

}

function myFunc14() {

    if (flexCheckChecked14.checked == 1) {
        document.getElementById('btnac14').disabled = false;
    }
    else {
        document.getElementById('btnac14').disabled = true;
    }

}

function myFunc15() {

    if (flexCheckChecked15.checked == 1) {
        document.getElementById('btnac15').disabled = false;
    }
    else {
        document.getElementById('btnac15').disabled = true;
    }

}

function myFunc16() {

    if (flexCheckChecked16.checked == 1) {
        document.getElementById('btnac16').disabled = false;
    }
    else {
        document.getElementById('btnac16').disabled = true;
    }

}

function myFunc17() {

    if (flexCheckChecked17.checked == 1) {
        document.getElementById('btnac17').disabled = false;
    }
    else {
        document.getElementById('btnac17').disabled = true;
    }

}

function myFunc18() {

    if (flexCheckChecked18.checked == 1) {
        document.getElementById('btnac18').disabled = false;
    }
    else {
        document.getElementById('btnac18').disabled = true;
    }

}

function myFunc19() {

    if (flexCheckChecked19.checked == 1) {
        document.getElementById('btnac19').disabled = false;
    }
    else {
        document.getElementById('btnac19').disabled = true;
    }

}

function myFunc20() {

    if (flexCheckChecked20.checked == 1) {
        document.getElementById('btnac20').disabled = false;
    }
    else {
        document.getElementById('btnac20').disabled = true;
    }

}

function myFunc21() {

    if (flexCheckChecked21.checked == 1) {
        document.getElementById('btnac21').disabled = false;
    }
    else {
        document.getElementById('btnac21').disabled = true;
    }

}

function myFunc22() {

    if (flexCheckChecked22.checked == 1) {
        document.getElementById('btnac22').disabled = false;
    }
    else {
        document.getElementById('btnac22').disabled = true;
    }

}

function myFunc23() {

    if (flexCheckChecked23.checked == 1) {
        document.getElementById('btnac23').disabled = false;
    }
    else {
        document.getElementById('btnac23').disabled = true;
    }

}

function myFunc24() {

    if (flexCheckChecked24.checked == 1) {
        document.getElementById('btnac24').disabled = false;
    }
    else {
        document.getElementById('btnac24').disabled = true;
    }

}

function myFunc25() {

    if (flexCheckChecked25.checked == 1) {
        document.getElementById('btnac25').disabled = false;
    }
    else {
        document.getElementById('btnac25').disabled = true;
    }

}

function myFunc26() {

    if (flexCheckChecked26.checked == 1) {
        document.getElementById('btnac26').disabled = false;
    }
    else {
        document.getElementById('btnac26').disabled = true;
    }

}

function myFunc27() {

    if (flexCheckChecked27.checked == 1) {
        document.getElementById('btnac27').disabled = false;
    }
    else {
        document.getElementById('btnac27').disabled = true;
    }

}

function myFunc28() {

    if (flexCheckChecked28.checked == 1) {
        document.getElementById('btnac28').disabled = false;
    }
    else {
        document.getElementById('btnac28').disabled = true;
    }

}

function myFunc29() {

    if (flexCheckChecked29.checked == 1) {
        document.getElementById('btnac29').disabled = false;
    }
    else {
        document.getElementById('btnac29').disabled = true;
    }

}

function myFunc30() {

    if (flexCheckChecked30.checked == 1) {
        document.getElementById('btnac30').disabled = false;
    }
    else {
        document.getElementById('btnac30').disabled = true;
    }

}

function ibancopy() {

    var copyText = document.getElementById("iban");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(copyText.value);

    window.alert("Kopyalandı:" + copyText.value);
}
