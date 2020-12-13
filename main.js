$(document).ready(function () {
    var container = $('.container');

// console.log(new Date().getHours())

    // times
    function formatTime(i) {
    
        if (i === 12) {
            return `12PM`;
        }
    
    
        if (i > 12) {
            return `${i - 12}PM`;
        }
    
        return `${i}AM`;
    }

// time blocks
    for (let i = 9; i < 18; i++) {
        // console.log(i);

        const timeblock = $('<div></div>')
            .attr('id', `hour-${i}`)
            .addClass('row time-block past');

        timeblock.append($('<div></div>').addClass('col-md-1 hour').text(formatTime(i)));
        timeblock.append($('<textarea></textarea>').addClass('col-md-10 description'));
        timeblock.append($('<button></button>')
            .addClass('btn saveBtn col-md-1')
            .append($('<i></i>').addClass('fas fa-save')));

        container.append(timeblock)

        // local storage
        var input = document.getElementById(`hour-${i}`);
        localStorage.setItem("task", click());
        console.log(clickSave)
    }

  



});
