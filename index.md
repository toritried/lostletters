---
layout: 3col-no-wm
title: home
emoji: 🏠
---

<article>
    <div style="display: inline-block;">
        <p>
            <img class="theme-image"/>
            You have found Lost Letters, a personal site and nostalgic tribute to girls' early 2000s-era online subcultures. I hope that this website inspires fellow web dev amateurs to see themselves as creators of a delightful and fun future internet that is inclusive, brimming with personality, and divorced from corporate social media monopolies.
        </p>
        <p>
            <b title="last updated: 2023-10-22">Website Disclaimers</b>: 
            <br>
            <img src="/graphics/toy/emoticons/warning-watercolor.gif" alt=""> This site is <b>safe for work</b>, but only intended for adults. <b>DNI and leave if you're under 18</b>.
            <br>
            <img src="/graphics/toy/emoticons/cellphone-watercolor.gif" alt=""> This website is <b>responsive and mobile-friendly</b> because >90% of internet users access the internet using a mobile phone (<a target="_blank" href="https://explodingtopics.com/blog/mobile-internet-traffic#percentage-of-mobile-traffic">learn more</a>), and <b>being vehemently mobile-hostile is ableist and classist</b> by willfully excluding folks who many not be able to easily access the web via other means.
            <br>
            <img src="/graphics/toy/emoticons/alert-deer.gif" alt=""> Content warnings (CW) are used for discussions of mental health, swearing, etc.
            <br>
            <img src="/graphics/toy/emoticons/distracted-moomin.gif" alt=""> This site uses Javascript for the theme switcher, navigation, webmentions, tool tips, cursor effects, guestbook, blog post reactions, and more.
            <br>
            <img src="/graphics/toy/emoticons/hearts-2-watercolor.gif" alt=""> <b>There will never be auto-playing music</b> on this site because screen readers are critical to an inclusive web (<a target="_blank" href="https://accessibility.its.uconn.edu/auto-playing-media-and-multimedia/">learn more</a>).
        </p>
    </div>
</article>
<div class="buttons-index">
    {% include layout/button-wall.html %}
</div>
<hr>
<div class="col-wrapper">
    <div class="two-col">
        <div id="latest-blog">
            <img class="theme-stamp" align="right" style="margin: 0 20px;">
            <article>
                <h2>Latest Blog Post</h2>
                <h3 style="margin-bottom: 0;"><a href="{{ site.posts.first.url }}">{{ site.posts.first.title }}</a></h3>
                <img class="index-svg" src="/graphics/phosphoricons/calendar-dots.svg"><text style="border-bottom: 1px dotted;">{{ site.posts.first.date | date: "%-d %B %Y"}}</text> | <img class="index-svg" src="/graphics/phosphoricons/clock.svg">{% include post/reading_time.html text=site.posts.first.content %}
                {{ site.posts.first.excerpt }} <i><a href="{{ site.posts.first.url }}">continue reading...</a></i>
            </article>
        </div>
        <div id="mastofeed">
            <article>
                <div id="mastodon_timeline">
                    <h1>Latest Mastodon Post</h1>
                    <p>My mastodon feed is loading...</p>
                </div>
            </article>
        </div>
    </div>
</div>
