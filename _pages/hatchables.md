---
layout: default2
title: hatchery
emoji: 🐣
permalink: /hatch/
menu: pages
---
<center>
    <h2>virtual hatchery</h2>
    <div class="hatchery">
        <a target="other" href="http://magistream.com/creature/14199342#page-body"><img src="http://magistream.com/img/14199342.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14199388#page-body"><img src="http://magistream.com/img/14199388.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14199591#page-body"><img src="http://magistream.com/img/14199591.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14199343#page-body"><img src="http://magistream.com/img/14199343.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14199389#page-body"><img src="http://magistream.com/img/14199389.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14192528#page-body"><img src="http://magistream.com/img/14192528.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14192519#page-body"><img src="http://magistream.com/img/14192519.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14192587#page-body"><img src="http://magistream.com/img/14192587.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14192588#page-body"><img src="http://magistream.com/img/14192588.gif"/></a>
        <a target="other" href="https://flowergame.net/view/1105624#innercontent"><img src="https://img.flowergame.net/1105624.png" title="click to give sunshine to my Chanterelle" /></a>
        <a target="other" href="https://flowergame.net/view/1105719#innercontent"><img src="https://img.flowergame.net/1105719.png" title="click to give sunshine to my Porcini Mushroom"/></a>
        <a target="other" href="https://flowergame.net/view/1105316#innercontent"><img src="https://img.flowergame.net/1105316.png" title="click to give sunshine to my Pumpkin" /></a>
        <a target="other" href="https://flowergame.net/view/1106043#innercontent"><img src="https://img.flowergame.net/1106043.png" title="click to give sunshine to my Fly Agaric"/></a>
        <a target="other" href='https://finaloutpost.net/view/6tZ5z#6tZ5z'><img src='https://finaloutpost.net/s/6tZ5z1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/ohzHb#ohzHb'><img src='https://finaloutpost.net/s/ohzHb1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/lAb1C#lAb1C'><img src='https://finaloutpost.net/s/lAb1C1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/MnwlI#MnwlI'><img src='https://finaloutpost.net/s/MnwlI1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/4Xdag#4Xdag'><img src='https://finaloutpost.net/s/4Xdag1.png'></a>
        <div class="hatchery-status">
            ♡ please click on each of my pets above to help them evolve ♡
        </div>
        <iframe src="/hatchable.txt" name="other" width="100%" height="350px"></iframe>
    </div>
    <script>
        let isIframeLoadSet = false;
        document.querySelectorAll('a[target="other"]').forEach(el => {
            el.onclick = () => {
                document.querySelector('.hatchery-status').innerText = "loading...";
                if (!isIframeLoadSet) {
                    isIframeLoadSet = true;
                    document.getElementsByName("other")[0].onload = () => {
                        document.querySelector('.hatchery-status').innerText = "thank you!";
                    }
                }
            };
        });
    </script>
</center>