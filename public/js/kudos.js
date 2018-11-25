//rendering all names to the to/from options

//what im trying to do here is after I get the response of all the Users
// back from /api/users, i want to load all the users into the to/from options drop downs.

(function() {
    $.get('/api/users').then(function(data) {
        console.log(data);
        let dbUsers = [];
        dbUsers.push(data);
        console.log(dbUsers[1]);
        for(let i = 0; i < dbUsers.length; i++) {
            let eachUser = dbUsers[i].username;
            console.log(eachUser);
            const select = document.getElementById('to');
            for(i in eachUser) {
                select.options[select.options.length] = new Option(newObject[i], i);
            }
        }
    });
})();

//rendering message
const render = function(dataList) {
        console.log(dataList.body);
            $(`<div class="row">
            <div class="column">
                <strong><p>To:${dataList._id}</p></strong>
                <p>${dataList.body}</p>
                <strong><p>From:${dataList._v}</p></strong>
            </div>
        </div>`).appendTo('.main-content');
}

const getKudos = function(){
    const userId = sessionStorage.getItem('token');
    console.log(userId);

    $.get(`/api/user/${userId}`).then(function(data){
        console.log(data);
        console.log(data[0].kudos);
        render(data[0].kudos)
    });
}

getKudos();

const postKudos = function(e) {
    e.preventDefault();

    const userId = sessionStorage.getItem('token');
    const to = $('#to').val();
    const kudosBody = $('.message').val().trim();
    $('.message').val('');
    $.post('api/kudos', {to: to, userId: userId, body: kudosBody})
    .then(function(data) {
        getKudos();
    })
}

$('.post').on('click', postKudos);