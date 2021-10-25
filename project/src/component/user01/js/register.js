import $ from 'jquery'

$("body").on("click", "#agree", function () {
    var isChecked = $(this).is(":checked");
    var submitBtn = document.getElementById("submitBtn")
    if ($("#agree").prop("checked")) {
        submitBtn.classList.remove("disabled")
    } else {
        submitBtn.classList.add("disabled")
    }
});