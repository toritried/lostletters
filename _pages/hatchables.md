---
layout: default2
title: hatchery
emoji: 🐣
permalink: /hatch/
menu: about
---
<center>
    <h2>virtual pet hatchery</h2>
    <div class="hatchery">
        <a target="other" href='https://finaloutpost.net/view/9Z1vj#main'>
            <img src='https://finaloutpost.net/s/9Z1vj.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/cY7UP#main'>
            <img src='https://finaloutpost.net/s/cY7UP.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/fgoZb#main'>
            <img src='https://finaloutpost.net/s/fgoZb.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/sogYi#main'>
            <img src='https://finaloutpost.net/s/sogYi.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/zbzhh#main'>
            <img src='https://finaloutpost.net/s/zbzhh.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/rxO33#main'>
            <img src='https://finaloutpost.net/s/rxO33.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/CCG9D#main'>
            <img src='https://finaloutpost.net/s/CCG9D.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/qfQAj#main'>
            <img src='https://finaloutpost.net/s/qfQAj.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/YcVe3#main'>
            <img src='https://finaloutpost.net/s/YcVe3.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/buP5i#main'>
            <img src='https://finaloutpost.net/s/buP5i.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/xx65G#main'>
            <img src='https://finaloutpost.net/s/xx65G.png'>
        </a>
        <a target="other" href="https://dragcave.net/view/7HcCV#middle">
            <img src="https://dragcave.net/image/7HcCV.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/exCR3#middle">
            <img src="https://dragcave.net/image/exCR3.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/Jfkad#middle">
            <img src="https://dragcave.net/image/Jfkad.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/xQlPL#middle">
            <img src="https://dragcave.net/image/xQlPL.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/0eae8#middle">
            <img src="https://dragcave.net/image/0eae8.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/qGswj#middle">
            <img src="https://dragcave.net/image/qGswj.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/xwykB#middle">
            <img src="https://dragcave.net/image/xwykB.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/9sSLQ#middle">
            <img src="https://dragcave.net/image/9sSLQ.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/iKCpJ#middle">
            <img src="https://dragcave.net/image/iKCpJ.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/Lri95#middle">
            <img src="https://dragcave.net/image/Lri95.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/T7mnQ#middle">
            <img src="https://dragcave.net/image/T7mnQ.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/M88lc#middle">
            <img src="https://dragcave.net/image/M88lc.gif" style="border-width:0"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14238674#page-body">
            <img src="http://magistream.com/img/14238674.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14238679#page-body">
            <img src="http://magistream.com/img/14238679.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14237797#page-body">
            <img src="http://magistream.com/img/14237797.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14234838#page-body">
            <img src="http://magistream.com/img/14234838.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14234839#page-body">
            <img src="http://magistream.com/img/14234839.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14234844#page-body">
            <img src="http://magistream.com/img/14234844.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14235441#page-body">
            <img src="http://magistream.com/img/14235441.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14235444#page-body">
            <img src="http://magistream.com/img/14235444.gif"/>
        </a>
        <div class="hatchery-status">
            ♡ please click on each of my pets above to help them evolve ♡
        </div>
        <iframe src="/hatchable.txt" name="other" width="95%" height="350px"></iframe>
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
    <br>
    <h2>my favorite fully grown pets</h2>
    <a target="_blank" href="https://magistream.com/user/lostletters/Completed">Magistream</a> | 
    <a target="_blank" href="https://finaloutpost.net/visit/lostletters/37592">The Final Outpost</a> | 
    <a target="_blank" href="https://dragcave.net/user/lostletters">Dragon Cave</a>
    <br>
    <br>
        <a target="other" href="https://dragcave.net/view/gpSa9#middle">
            <img src="https://dragcave.net/image/gpSa9.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/mMntk#middle">
            <img src="https://dragcave.net/image/mMntk.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/PCf1e">
            <img src="https://dragcave.net/image/PCf1e.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/OVsMx#middle">
            <img src="https://dragcave.net/image/OVsMx.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/yLmgd#middle">
            <img src="https://dragcave.net/image/yLmgd.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/aZAqo#middle">
            <img src="https://dragcave.net/image/aZAqo.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/spPTJ#middle">
            <img src="https://dragcave.net/image/spPTJ.gif" style="border-width:0"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14201225#page-body">
            <img src="http://magistream.com/img/14201225.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14211781">
            <img src="http://magistream.com/img/14211781.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14213565">
            <img src="http://magistream.com/img/14213565.gif"/>
        </a>
        <a target="other" href='https://finaloutpost.net/view/ohzHb#main'>
            <img src='https://finaloutpost.net/s/ohzHb1.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/6XO96#main'>
            <img src='https://finaloutpost.net/s/6XO96.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/6tZ5z#main'>
         <img src='https://finaloutpost.net/s/6tZ5z3.png'>
        </a>
    <br>
    <br>
    📝 If you want to start collecting virtual pets like these, read <a href="/2022/11/25/virtual-pets.html">my guide to various pixel art virtual pet sites</a>!
</center>