let requestData = {};

$('#plus').on('click', function () {
    requestData = { momsg: $('#MsgTB').val() };
    $.ajax({
        url: '/restful/todo',
        type: 'post',
        data: requestData,
        success: function (response) {
            alert('ok!');
            $('#itemset').html(response);
        }
    });
});

$('#search').on('click', function () {
    requestData = { momsg: $('#MsgTB').val() };
    $.ajax({
        url: '/restful/todo/' + requestData.momsg,
        type: 'get',
        success: function (response) {
            $('#itemset').html(response);
        }
    });
});