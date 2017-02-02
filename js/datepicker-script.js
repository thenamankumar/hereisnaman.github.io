(function($) {
    "use strict";

    /*************************
          Add calendar Events
    *************************/
    var events = [{
            Title: "On Leave",
            Date: new Date("05/13/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("05/24/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("06/05/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("06/22/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("07/11/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("07/26/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("07/30/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("08/02/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("08/28/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("09/20/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("10/26/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("10/10/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("11/26/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("12/02/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("12/28/2016")
        },
        {
            Title: "On Leave",
            Date: new Date("01/13/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("01/24/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("02/05/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("03/22/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("04/02/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("05/13/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("05/24/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("06/05/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("07/11/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("07/26/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("08/02/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("08/28/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("09/20/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("10/26/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("11/11/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("11/26/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("12/02/2017")
        },
        {
            Title: "On Leave",
            Date: new Date("12/28/2017")
        }
    ];
    $("#datepicker").datepicker({
        dateFormat: 'DD, d MM, yy',
        beforeShowDay: function(date) {

            var result = [true, '', null];
            var matching = $.grep(events, function(event) {
                return event.Date.valueOf() === date.valueOf();
            });

            if (matching.length) {
                result = [true, 'highlight', null];
            }
            var date = $(this).datepicker('getDate');
            $('#day').html($.datepicker.formatDate('DD', date));
            $('#mnt').html($.datepicker.formatDate('MM', date));
            $('#date').html($.datepicker.formatDate('d', date));
            return result;
        },
        onSelect: function(dateText) {
            var date,
                selectedDate = new Date(dateText),
                i = 0,
                event = null;

            while (i < events.length && !event) {
                date = events[i].Date;

                if (selectedDate.valueOf() === date.valueOf()) {
                    event = events[i];
                }
                i++;
            }
            if (event) {
                alert(event.Title);
            }
        }
    });


})(jQuery);
