---
layout: 3col
title: microblog
emoji: ☕
permalink: /microblog/
menu: about
---

<center>👀 See my entire feed at <a target="_blank" href="https://status.cafe/users/lostletters">Status.Cafe</a></center>
<hr>
<div id='feed-reader'></div>
<script>
    const feedURL = 'https://status.cafe/users/lostletters.atom';
    fetch(feedURL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const entries = data.querySelectorAll("entry");
        let html = ``;
        entries.forEach(el => {
        let title = el.querySelector("title").innerHTML.slice(11, 14).trim();
        let content = el.querySelector("content").textContent.trim();
        let dateString = el.querySelector("published").innerHTML.slice(0,10);
        html += `
            <p><b>${dateString}</b> ${title}: ${content}</p>
            <hr>
        `;
        })
        document.getElementById("feed-reader").innerHTML = html;
    })
</script>
<br>
This page was created by following <a target="_blank" href="https://bechnokid.neocities.org/resources/tut_statuscafefeed">Bechno Kid's tutorial</a>
