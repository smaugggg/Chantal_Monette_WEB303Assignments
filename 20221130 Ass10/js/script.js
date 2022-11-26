$(document).ready(function() { 

let submit = document.getElementById('submit');
    submit.disabled = true;
    submit.className = 'disabled';

matchingPassword();
passwordLength();

$.ajax({
    type: "Get",
    url:  "js/" + 'countries.js',
    dataType: "script",
    success: function (data) {


        var populate;
        // let select = document.getElementById('defaultOption');
        let select = `<option value="defaultOption" selected>Select your country</option>`;
        
        populate = select;
        countries.forEach(element => {
            populate += `<option value=${(element.code)}>${element.name}</option>`;
        });
        options.innerHTML = populate;

    },
    error: function () {
        alert("file cannot be opened.....");
    }
});


});

function passwordLength() {
    let password = document.getElementById('password');
    if(password.val().length >= 12) {
        submit.disabled = false;
    }
}

function matchingPassword() {
    let password = document.getElementById('password');
    let confirmpassword = document.getElementById('password2');

    $('password, .password2').on('keyup', function() {
        if(password.val() === confirmpassword.val()) {
            $('password, .password2').css("background-color:#97FFB6");
            console.log('it matches');
            submit.disabled = false;
            submit.className = 'enabled';
        } else {
            $('password, .password2').css("background-color:#FF9797");
        }
    });
}

function countries() {
    let countrySelector = document.getElementById('country');
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'js/countries.js');

    xhr.onload = function() {
        if(xhr.status === 200) {
            countries.foreach(e => {
                let countryList;
                countryList += `<option value=${(e.code)}>${e.name}</option>`    
            });
            countrySelector.append()
        }
    }
}



