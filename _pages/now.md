---
layout: space
title: now
emoji: 🔮
permalink: /now/
menu: about
---

<a class="weatherwidget-io" href="https://forecast7.com/en/35d69139d69/tokyo/" data-label_1="🗼 東京 🏮" data-label_2="Tokyo Weather" data-theme="weather_one" >Tokyo Weather</a>

<script>
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
</script>
<br>
<div class="container">
    <div class="flex-item">
        🍵 <b>Status Cafe</b>
        <br> 
        <div id="statuscafe-username"></div>&nbsp;&nbsp;<div id="statuscafe-content"></div>
        <script src="https://status.cafe/current-status.js?name=lostletters" defer></script>
    </div>
    <div class="flex-item">
        <b>Find Me Elsewhere</b>
        <br>
        <a target="_blank" href="https://cutie.city/@lostletters" rel="me">Mastodon</a> (most active), 
        <a target="_blank" href="https://neocities.org/site/lostletters">Neocities profile</a>, 
        <a target="_blank" href="https://github.com/toritried/lostletters">Github</a>, 
        <a target="_blank" href="https://app.thestorygraph.com/profile/lostletters" rel="me">StoryGraph</a>, 
        <a target="_blank" href="https://finaloutpost.net/visit/lostletters" rel="me">The Final Outpost</a>, 
        <a target="_blank" href="https://dragcave.net/user/lostletters" rel="me">Dragon Cave</a>, 
        <a target="_blank" href="https://www.pixelcatsend.com/profile&id=5618" rel="me">Pixel Cat's End</a>, 
        <a target="_blank" href="https://neopets.com/userlookup.phtml?user=waterfish57" rel="me">Neopets</a>, 
        <a target="_blank" href="https://www.fallenlondon.com/profile/Reina%20Hanwin" rel="me">Fallen London</a>
    </div>
    <div class="flex-item" style="width: 100%;">
        <span title="inspired by https://daintye.co/"><b>Life Counters</b></span>
        <br>
        🐇 played <a target="_blank" href="https://www.neopets.com/userlookup.phtml?user=waterfish57">Neopets</a> for <span id="counter1"></span>
        <br>
        🌱 been plant-based for <span id="counter2"></span>
        <br>
        🦋 been in love for <span id="counter3"></span>
        <br>
        👯 lived with my girlfriend for <span id="counter4"></span>
        <script> /** Thanks to Justin Wright for this javascript that I modified https://stackoverflow.com/a/48918684 **/
            var targetDate1 = new Date("2003-11-20T00:00:00");
            var targetDate2 = new Date("2016-01-28T00:00:00");
            var targetDate3 = new Date("2020-06-28T00:00:00");
            var targetDate4 = new Date("2021-08-01T00:00:00");
            setInterval(updateCounters, 1000);
            function updateCounters() {
                var currentDate = new Date();
                updateCounter(targetDate1, "counter1");
                updateCounter(targetDate2, "counter2");
                updateCounter(targetDate3, "counter3");
                updateCounter(targetDate3, "counter4");
                function updateCounter(targetDate, counterId) {
                    var duration = currentDate - targetDate;
                    var years = Math.floor(duration / 3.154e+10);
                    var durationMinusYears = duration - (years * 3.154e+10);
                    var months = Math.floor(duration / 2.628e+9) % 12;
                    var durationMinusMonths = durationMinusYears - (months * 2.628e+9);
                    var days = Math.floor(durationMinusMonths / 8.64e+7);
                    var hours = Math.floor(duration / 3.6e+6 ) % 24;
                    var mins = Math.floor(duration / 60000 ) % 60;
                    var secs = Math.floor(duration / 1000 ) % 60;
                    document.getElementById(counterId).innerHTML = years + " years, " + days + " days, " + hours % 24 + " hours, " + mins % 60 + " minutes, " + secs % 60 + " seconds";
                }
            }
        </script>
    </div>
    <div class="flex-item">
        <b>What are you up to now?</b>
        <iframe src="https://www3.cbox.ws/box/?boxid=3527399&boxtag=Yz5LVz" width="100%" height="450" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" style="border-radius:10px;"></iframe>
    </div>
</div>
