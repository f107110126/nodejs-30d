if (typeof window.requestData === 'undefined') requestData = {};
if (typeof window.baseUrl === 'undefined') {
    baseUrl = $('meta[name="baseUrl"]').attr('content');
    if (typeof baseUrl === 'undefined') baseUrl = '/';
    else baseUrl += '/';
}

$('#plus').on('click', function () {
    requestData = { momsg: $('#MsgTB').val() };
    $.ajax({
        url: baseUrl,
        type: 'post',
        data: requestData,
        success: function (response) {
            alert('ok!');
            $('#itemset').html(response);
        }
    });
});

$('#search').on('click', function () {
    let term = $('#MsgTB').val();
    if (term) {
        requestData = { momsg: $('#MsgTB').val() };
        $.ajax({
            url: baseUrl + requestData.momsg,
            type: 'get',
            success: function (response) {
                $('#itemset').html(response);
            }
        });
    }
});

$('#myModal #saveitem').on('click', function () {
    let postData = $('#myModal').find($('#message-text')).val();
    requestData.momsg = postData;
    $.ajax({
        url: baseUrl + requestData.moid,
        type: 'put',
        data: requestData,
        success: function (response) {
            let oneset = '#itemset div#record' + requestData.moid;
            $(oneset).html(response);
        }
    });
    $('#myModal').modal('hide');
});