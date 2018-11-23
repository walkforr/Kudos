 const register = function(e) {
     e.preventDefault();
    const username = $('.username').val().trim();
    const password = $('.password').val().trim();

    $.post('/api/user', {
        username: username, password: password
    }).then(function(data) {
        console.log(data);
    });
 }

 $('.signUp').on('click', register);

 const login = function(e) {
     e.preventDefault();
     const username = $('username').val().trim();
     const username = $('username').val().trim();

     $.post('/api/session', {
         username: username, password: password
     }).then(function(data) {
         if(data[0]._id){
            sessionStorage.setItem('token', data[0]._id)
         }
     })
 }

 $('.signIn').on('click', login);