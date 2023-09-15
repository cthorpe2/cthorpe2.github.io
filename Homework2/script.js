var main = function() 
{
    "use strict";
    
    var lyrics = [
        "O say can you see by the dawn's early light",
        "What so proudly we hailed at the twilight's last gleaming",
        "Whose broad stripes and bright stars through the perilous fight",
        "O'er the ramparts we watched, were so gallantly streaming?",
        "And the rocket's red glare, the bombs bursting in air",
        "Gave proof through the night that our flag was still there",
        "O say does that star-spangled banner yet wave",
        "O'er the land of the free and the home of the brave"
    ];

    var currentIndex = 0;

    function updateSong() {
        $("#song").fadeOut(500, function() {
            $(this).text(lyrics[currentIndex]);
        }).fadeIn(500);

        currentIndex = (currentIndex + 1) % lyrics.length;
    }

    setInterval(updateSong, 4000);

    var images = [
        'ConnorHeadshot.jpeg',
        'ConnorTutor1.jpeg',
        'ConnorTutor2.jpeg'
    ];

    var randomIndex = Math.floor(Math.random() * images.length);

    var randomImage = $('<img>').attr('src', images[randomIndex]);

    $('#randomImageContainer').append(randomImage);

    $('#popupButton').on('click', function() {
        alert('Hello there!');
    });

    var addComment = function()
    {
        if ($(".comment-input input").val() !== "")
        {
            var $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    }

    $(".comment-input button").on("click",function(event)
    {
         addComment();
    });
    $(".comment-input input").on("keypress", function(event)
    {
        if ($(".comment-input input").val() !=="" && event.keyCode==13)
        {
            addComment();
        } 
    });
    
};

$(document).ready(main);

