var fadeInSpeed = 1500;

$(document).ready(function () {
    fadeInName();
});

function fadeInName() {
    $(".intro").fadeIn(fadeInSpeed, () => {
        $(".name").fadeIn(fadeInSpeed);
    });
}