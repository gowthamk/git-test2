/*some computation on data */

$.ajax({
    type: "POST",
    data: data,
    url: url,
    success: function(response) {
        $(".result").html(response);
    }),
    dataType: "text"
});
