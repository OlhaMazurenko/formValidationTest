class form_checker {
    constructor(sSelector) {
        this.form = $(sSelector);


        this.gender = this.form.find(".gender");
        this.fields = this.form.find(".textfield");
        this.createEvents();

    }
    check(event) {
        event.preventDefault();
        var bFormError = false;


        this.fields
            .each(
                (i, oField) => {
                    let jqField = $(oField);


                    if (!jqField.val()) {
                        jqField.addClass('textfield_error');
                        bFormError = true;
                    } else {
                        jqField.removeClass('textfield_error');
                    }
                }
            );
        if (!this.form.find('.gender:checked').val()) {
            this.gender.addClass('textfield_error');
            bFormError = true;
        } else {
            this.gender.removeClass('textfield_error');
        }

        if (bFormError) {
            this.form.find('.form__message_error').slideDown()
        } else {

            this.form.find('.form__message_error').slideUp()
        }

        if (!bFormError) {
            alert(
                'Validation passed successfully. Your data:' + ('\nFirst name: ') + this.form.find('#name').val() + ('\nLast name: ') + this.form.find("#lastName").val() + ('\nBirthday: ') + this.form.find('#birthday').val() + ('\nGender: ') + this.form.find('.gender:checked').val() + ('\nCountry: ') + this.form.find("#country>option:selected").html() + ('\nEmail: ') + this.form.find("#email").val() + ('\nPassword: ') + this.form.find('#userPassword').val() + ('\nAdress: ') + this.form.find('#adress').val() + ('\nComments: ') + this.form.find('#notes').val());
        }
    }


    createEvents() {
        this.form.submit(this.check.bind(this));


    }

}