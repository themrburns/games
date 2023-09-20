$( document ).ready(() => {
    console.log("DOM Ready");
    $(".contentElement").on("click", function() {
        console.log("click");
        endpoint = $(this).data("endpoint");
        location.href = endpoint;
    });
});