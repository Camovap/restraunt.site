$('#login-button').click(function() {
    const login = $('#login').val();
    const password = $('#password').val();
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
            'login': login,
            'password': password,
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
