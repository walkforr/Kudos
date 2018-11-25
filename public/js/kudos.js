//rendering kudos message
const render = function() {
        $.get('/api/kudos', function(dbKudos) {
            $('.main-content').empty();
            for (let i = 0; i < dbKudos.length; i++) {
                $(`<div class="row">
                <div class="column">
                <h4>${dbKudos[i].title}</h4>
                <p> ${dbKudos[i].body} </p>
                <strong><p>To: ${dbKudos[i].to} </p></strong>
                <strong><p>From: ${dbKudos[i].from} </p></strong>
                </div>
            </div>`).appendTo('.main-content');
            }
        });
}

const displayUsers = function(){
    $.get('/api/users').then(function(dbUsers){
        console.log(dbUsers);
        console.log(dbUsers.length);
        $('#to').empty();
        $('#from').empty();
        $('#to').append(`<OPTION value="">Select Sender</OPTION>`) 
            $('#from').append(`<OPTION value="">Select Reciever</OPTION>`)
        for (let i = 0; i < dbUsers.length; i++){
            $('#to').append(`<OPTION value="${dbUsers[i]._id}">${dbUsers[i].name}</OPTION>`);
            $('#from').append(`<OPTION value="${dbUsers[i]._id}">${dbUsers[i].name}</OPTION>`)
        }
    });
}

$('#myBtn').on('click', displayUsers);

const postKudos = function(e) {
    e.preventDefault();
    const title = $('#title').val();
    const to = $('#to').val();
    const from = $('#from').val();
    const kudosBody = $('.message').val().trim();
    $('.message').val('');
    $.post('api/kudos', {title: title, body: kudosBody, to: to, from: from})
    .then(function(data) {
        render();
    })
}

$('.post').on('click', postKudos);