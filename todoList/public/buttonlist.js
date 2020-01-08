if (typeof window.requestDAta === 'undefined') requestData = {};

$('#itemset button').bind('click', function () {
    // gets the id of a clicked button
    let obj = $(this).attr('id');
    let itemid = '';
    if (/pencil/.test(obj)) {
        itemid = obj.replace(/pencil/gi, '');
        let spancs = '#itemset span.' + obj;
        let getmsg = $(spancs).text();
        $('#myModal').find($('#message-text')).val(getmsg);
        requestData = { moid: itemid, momsg: getmsg };
        console.log(requestData);
    }
    if (/remove/.test(obj)) {
        itemid = obj.replace(/remove/gi, '');
        requestData = { moid: itemid };
        $.ajax({
            url: '/restful/todo/' + requestData.moid,
            type: 'delete',
            success: function (response) {
                let oneset = 'div#record' + requestData.moid;
                $(oneset).remove();
                alert(response);
            }
        });
    }
});

$('#myModal #saveitem').on('click', function () {
    let postData = $('#myModal').find($('#message-text')).val();
    requestData.momsg = postData;
    $.ajax({
        url: '/restful/todo/' + requestData.moid,
        type: 'put',
        data: requestData,
        success: function (response) {
            let oneset = '#itemset div#record' + requestData.moid;
            $(oneset).html(response);
        }
    });
    $('#myModal').modal('hide');
})
