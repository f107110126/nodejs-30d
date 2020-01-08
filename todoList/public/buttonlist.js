if (typeof window.requestDAta === 'undefined') requestData = {};
if (typeof window.baseUrl === 'undefined') {
    baseUrl = $('meta[name="baseUrl"]').attr('content');
    if (typeof baseUrl === 'undefined') baseUrl = '/';
    else baseUrl += '/';
}

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
    }
    if (/remove/.test(obj)) {
        itemid = obj.replace(/remove/gi, '');
        requestData = { moid: itemid };
        $.ajax({
            url: baseUrl + requestData.moid,
            type: 'delete',
            success: function (response) {
                let oneset = 'div#record' + requestData.moid;
                $(oneset).remove();
                alert(response);
            }
        });
    }
});
