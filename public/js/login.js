 const register = function(e) {
     e.preventDefault();
    const name = $('.username').val().trim();

    //add user to database upon signup
    $.post('/api/user', {
        name: name
    }).then(function(success) {
        console.log(success);
        if (success) {
            $('.username').val('');
            $('#myModal3').css('display', 'none');
            alert('Great! Your name is now added to the list of people who can send and recieve Kudos.')
        } else if ($('.username').val('')) {
            alert('You must enter a name to register');
        }
    })
 }

 $('.signUp').on('click', register);