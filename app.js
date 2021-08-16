var fadeInSpeed = 1500;

$(document).ready(function () {
    fadeInName();
});

function fadeInName() {
    $("#name-tag").css("display", "none")
    $(".intro").fadeIn(fadeInSpeed, () => {
        $("#name-tag").fadeIn(fadeInSpeed);
    });
}