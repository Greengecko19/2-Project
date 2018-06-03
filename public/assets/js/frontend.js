$(function() {

    $('#signInBtn').on('click', (event) => {
        event.preventDefault();
        console.log('I have been clicked')
        $.ajax('/signin', {
            type: 'GET',
            cache: false
        }).done((data) => {
            console.log('shall have been routed to SignIn page now');
            $('body').html(data);
        }).catch((err) => console.log(err));
    });

    $('#signUpBtn').on('click', (event) => {
        event.preventDefault();
        console.log('I have been clicked')
        $.ajax('/signup', {
            type: 'GET',
            cache: false
        }).done((data) => {
            console.log('shall have been routed to SignUp page now')
            $('body').html(data);
        }).catch((err) => console.log(err));
    })

});

