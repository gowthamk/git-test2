/*some computation on data */

$.ajax({
    type: "POST",
    data: sha256(data),
    url: url,
    success: function(response) {
        $(".result").html(response);
    }),
    dataType: "text"
});

pwdField = $('input#password');
pwd = pwdField.val();
data = data + "\n" + pwd;

$.ajax({
    type: "POST",
    data: sha256(data),
    url: url,
    success: function(response) {
        $(".result").html(response);
    }),
    dataType: "text"
});
