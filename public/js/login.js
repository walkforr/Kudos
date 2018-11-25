 const register = function(e) {
     e.preventDefault();
    const username = $('.username').val().trim();
    const password = $('.password').val().trim();

    //add user to database upon signup
    $.post('/api/user', {
        username: username, password: password
    }).then(function(data) {
        console.log(data);
    });
 }

 $('.signUp').on('click', register);

 const login = function(e) {
     e.preventDefault();
     const username = $('username1').val();
     const password = $('password1').val();

     $.post('/api/session', {
         username: username, password: password
     }).then(function(data) {
         if(data[0]._id){
            sessionStorage.setItem('token', data[0]._id)
         }
     })
 }

 $('.signOut').on('click', login);

 const logout = function(e) {
    e.preventDefault();

    $.post('/api/session', {
        username: username, password: password
    }).then(function(data) {
        if(data[0]._id){
           sessionStorage.removeItem('token', data[0]._id)
        }
    })
}

$('.signIn').on('click', login)