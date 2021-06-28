// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates1 = ["06/29/2021", "07/2/2021", "07/29/2021"];
var unavailableDates2 = ["07/03/2021", "07/04/2021", "07/05/2021"];
var unavailableDates3 = ["07/06/2021", "07/07/2021", "07/08/2021"];

const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    if (selectedDoctor == 0) {
        return [unavailableDates1.indexOf(string) === -1]
    } else if (selectedDoctor == 1) {
        return [unavailableDates2.indexOf(string) === -1]
    } else {
        return [unavailableDates3.indexOf(string) === -1]
    }
}



// HERE, JQuery "LISTENING" starts
$(document).ready(function() {

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function() {
        if (!validatePhone("phone")) {
            alert("Wrong format for phone");
            $("#phone").val("(xxxx)");
            $("#phone").addClass("error");
        } else {
            $("#phone").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/

    $("#dateInput").datepicker({
        dateFormat: setDateFormat,
        minDate: new Date(),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function() {
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function() {
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
});

function showOrHide(name, valid) {
    if (valid) {
        $(name).removeClass("hide")
    } else {
        $(name).addClass("hide")
    }
}

function calculatePrice() {
    let totalPriceBeforeTax = 0;
    for (let i = 0; i < 5; i++) {
        totalPriceBeforeTax += serviceSelections[i] * prices[i]
    }
    let totalPrice = totalPriceBeforeTax * 1.15

    $("#price-before-tax").text(totalPriceBeforeTax.toFixed(2) + "$")
    $("#price-total").text(totalPrice.toFixed(2) + "$")
}

let choiceValid = false;
let nameValid = false;
let phoneValid = false;
let emailValid = false;
let dateValid = false;
let cardValid = false;
let selectedDoctor = 0;
let serviceSelections = [false, false, false, false, false]
let prices = [100, 200, 400, 500, 50]

$(function() {
    $("input[name='restricted-input-3-num']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, '').substring(0, 3));
    });

    $("input[name='restricted-input-4-num']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, '').substring(0, 4));
    });

    $("input[name='credit-card-number-restriction']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, '').substring(0, 16));

        let regex = /^\d{12}/
        let txt = $("input[name='credit-card-number-restriction']").val()
        let valid = regex.test(txt) && txt.length == 16
        showOrHide("#price-error", !valid)
        cardValid = valid;

    });

    $("#name").on('input', function() {
        let valid = $(this).val().length > 0
        nameValid = valid;
        showOrHide("#name-error", !valid)
    });

    $(".phone-input").on("input", function() {
        let valid = true;
        elements = document.getElementsByClassName("phone-input")
        for (let i = 0; i < elements.length; i++) {
            if (i < 2) {
                valid = valid && elements[i].value.length == 3
            } else {
                valid = valid && elements[i].value.length == 4
            }
        }
        phoneValid = valid
        showOrHide("#phone-error", !valid)

    });

    $("#email").on("input", function() {
        let email = $("#email").val()
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(String(email).toLowerCase())
        emailValid = valid
        showOrHide("#email-error", !valid)
    })

    $("#dateInput").on("propertychange change keyup paste input", function() {
        var dateRegex = /^\d{2}([/])\d{2}\1\d{4}$/
        let valid = $("#dateInput").val().length == 10 && dateRegex.test($("#dateInput").val())
        dateValid = valid;
        showOrHide("#date-error", !valid)
    })

    $("#checkout-button").click(function() {
        let everythingValid = choiceValid && nameValid && phoneValid && emailValid && dateValid
        showOrHide("#overall-error", !everythingValid)
        showOrHide("#price-container", everythingValid)
    })

    $("#email").on("input", function() {
        let email = $("#email").val()
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(String(email).toLowerCase())
        emailValid = valid
        showOrHide("#email-error", !valid)
    })

    $("#pay-button").click(function() {
        let everythingValid = choiceValid && nameValid && phoneValid && emailValid && dateValid
        showOrHide("#overall-error", !everythingValid)
        showOrHide("#price-container", everythingValid)

        let payValid = everythingValid && cardValid;

        showOrHide("#pay-error", !payValid)
        showOrHide("#confirmation-container", payValid)

    })

    $("input[name='doctor-selection']").on('input', function(e) {
        buttons = document.getElementsByClassName("doctor-selection-input")

        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].checked) {
                selectedDoctor = i;
            }
        }

    });

    $("input[name='service-selection']").on('input', function(e) {
        let selections = document.getElementsByClassName("service-selection-input")
        let valid = false;
        for (let i = 0; i < selections.length; i++) {
            serviceSelections[i] = selections[i].checked;
            if (selections[i].checked) {
                valid = true;
            }
        }

        choiceValid = valid;

        showOrHide("#choice-service-error", !choiceValid)

        calculatePrice()
    });
});