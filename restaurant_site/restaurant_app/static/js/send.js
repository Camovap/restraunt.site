$('#login-button').click(function() {
    const username = $('#username').val();
    const password = $('#password').val();
    const firstName = $('#first-name').val();
    const lastName = $('#last-name').val();
    const phoneNumber = $('#Phone-Number').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val();
    const loginButton = $(this);

    if(!login) {
        alert('Пожалуйста, введите логин');
        return;
    }

    if(!password) {
        alert('Пожалуйста, введите пароль');
        return;
    }

    $.ajax({
        url: '/auth/',
        type: 'POST',
        data: {
            'csrfmiddlewaretoken': csrf
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data);
        },

        error: function(error) {
            console.error('Error: ', error);
        }
    })   
});

$('#reg-button').click(function() {
    const username = $('#username').val();
    const password = $('#password').val();
    const firstName = $('#first-name').val();
    const lastName = $('#last-name').val();
    const email = $('#email').val();
    const csrf = $('[name=csrfmiddlewaretoken]').val();
    const loginButton = $(this);

    if(!login) {
        alert('Пожалуйста, введите логин');
        return;
    }

    if(!password) {
        alert('Пожалуйста, введите пароль');
        return;
    }

    $.ajax({
        url: '/reg/',
        type: 'POST',
        data: {
            'username': username,
            'password': password,
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'csrfmiddlewaretoken': csrf
        },
        dataType: 'json',
        
        success: function(data) {
            console.log('Success: ', data);
        },

        error: function(error) {
            console.error('Error: ', error);
        }
    })   
});