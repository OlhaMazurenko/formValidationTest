function validation() {
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var birthdayDate = document.getElementById('birthday').value;
    var gender = document.getElementsByName('radio-buttons');
    var country = document.getElementById('country').value;
    var email = document.getElementById('email').value;
    var userPassword = document.getElementById('userPassword').value;
    var adress = document.getElementById('adress').value;
    var notes = document.getElementById('notes').value;
    var isValid = true;



    if (name == '') {
        document.getElementById('nameError').innerHTML = '***write your name';
    } else if (name != name.match(/^[^\'\"]+$/)) {
        document.getElementById('nameError').innerHTML = '***write your name correctly';
    } else {
        document.getElementById('nameError').innerHTML = '';
    }

    if (lastName == '') {
        document.getElementById('lastNameError').innerHTML = '***write your last name';
    } else if (lastName != lastName.match(/^[^\'\"]+$/)) {
        document.getElementById('lastNameError').innerHTML = '***write your last name correctly';
    } else {
        document.getElementById('lastNameError').innerHTML = '';

    }

    if (birthdayDate == '') {
        document.getElementById('birthdayError').innerHTML = '***write your birthday';
    } else if (birthdayDate != birthdayDate.match(/^\d{2}\/\d{2}\/\d{2,4}$/)) {
        document.getElementById('birthdayError').innerHTML = '***write your birthday correctly';
    } else {
        document.getElementById('birthdayError').innerHTML = '';

    }


    var genderValidation = function radioButton() {
        for (let i = 0; i < gender.length; i++) {
            if (!gender[i].checked) {
                document.getElementById('genderError').innerHTML = '***choose your gender';
            }

            if (gender[0].checked || gender[1].checked) {
                document.getElementById('genderError').innerHTML = '';
            }
        }
    };

    genderValidation();

    if (country == '') {
        document.getElementById('countryError').innerHTML = '***choose your country';
    } else {
        document.getElementById('countryError').innerHTML = '';
    }
    if (email == '') {
        document.getElementById('emailError').innerHTML = '***write your email';
    } else if (email != email.match(/^^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/)) {
        document.getElementById('emailError').innerHTML = '***wright your email correctly';
    } else {
        document.getElementById('emailError').innerHTML = '';

    }
    if (userPassword == '') {
        document.getElementById('userPasswordError').innerHTML = '***write your password';
    } else if (userPassword != userPassword.match(/^[^\'\"]+$/)) {
        document.getElementById('userPasswordError').innerHTML = '***write your password correctly';
    } else {
        document.getElementById('userPasswordError').innerHTML = '';

    }

    if (adress == '') {
        document.getElementById('adressError').innerHTML = '***write your adress';
    } else if (adress != adress.match(/^[^\'\"]+$/)) {
        document.getElementById('adressError').innerHTML = '***write your adresscorrectly';
    } else {
        document.getElementById('adressError').innerHTML = '';

    }


}