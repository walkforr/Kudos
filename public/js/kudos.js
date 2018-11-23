const render = function(kudosList) {
    $('.row').empty();
    for (let i = 0; i < kudosList.length; i++) {
        $('.row').append(` <div class="column">
        <strong><p>To: Karen</p></strong>
        <p>
        ${kudosList[i].body}
        </p>
        <strong><p>From: Sinigo</p></strong>
    </div>`)
    }
}

const getKudos = function(){
    const userId = sessionStorage.getItem('token');
    console.log(userId);

    $.get(`/api/user/${userId}`).then(function(data){
        console.log(data);
        render(data[0].kudos)
    })
}

getKudos();

const postKudos = function(e) {
    e.preventDefault();

    const userId = sessionStorage.getItem('token');
    const kudosBody = $('.message').val().trim();
    $('.message').val('');
    $.post('api/kudos', {userId: userId, body: kudosBody})
    .then(function(data) {
        getKudos();
    })
}

$('.post').on('click', postKudos);