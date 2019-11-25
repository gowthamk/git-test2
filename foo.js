/*some computation on data */

$.ajax({
    type: "POST",
    data: data,
    url: url,
    success: function(response) {
        console.log(response);
    }),
    dataType: "text"
});
