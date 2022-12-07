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
        <a target="other" href='https://finaloutpost.net/view/JgFiR#main'>
            <img src='https://finaloutpost.net/s/JgFiR.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/PnY6A#main'>
            <img src='https://finaloutpost.net/s/PnY6A.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/z42Vp#main'>
            <img src='https://finaloutpost.net/s/z42Vp.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/eFRnw#main'>
            <img src='https://finaloutpost.net/s/eFRnw.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/hIai7#main'>
            <img src='https://finaloutpost.net/s/hIai7.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/WjKQM#main'>
            <img src='https://finaloutpost.net/s/WjKQM.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/9U0Yy#main'>
            <img src='https://finaloutpost.net/s/9U0Yy.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/pqhka#main'>
            <img src='https://finaloutpost.net/s/pqhka.png'>
        </a>
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
        <a target="other" href='https://finaloutpost.net/view/rxO33#main'>
            <img src='https://finaloutpost.net/s/rxO33.png'>
        </a>
        <a target="other" href="https://dragcave.net/view/5U3LM#middle">
            <img src="https://dragcave.net/image/5U3LM.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/CbbEA#middle">
            <img src="https://dragcave.net/image/CbbEA.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/sgRWh#middle">
            <img src="https://dragcave.net/image/sgRWh.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/nY0RQ#middle">
            <img src="https://dragcave.net/image/nY0RQ.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/Oo5SG#middle">
            <img src="https://dragcave.net/image/Oo5SG.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/1qdkK#middle">
            <img src="https://dragcave.net/image/1qdkK.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/aM7wU#middle">
            <img src="https://dragcave.net/image/aM7wU.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/z874l#middle">
            <img src="https://dragcave.net/image/z874l.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/wB57J#middle">
            <img src="https://dragcave.net/image/wB57J.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/7HcCV#middle">
            <img src="https://dragcave.net/image/7HcCV.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/9yBR1#middle">
            <img src="https://dragcave.net/image/9yBR1.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/iojup#middle">
            <img src="https://dragcave.net/image/iojup.gif" style="border-width:0"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14241977#page-body">
            <img src="http://magistream.com/img/14241977.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14242301#page-body">
            <img src="http://magistream.com/img/14242301.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14241973#page-body">
            <img src="http://magistream.com/img/14241973.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14241985#page-body">
            <img src="http://magistream.com/img/14241985.gif"/>
        </a>
        <a target="other" href="http://magistream.com/creature/14237797#page-body">
            <img src="http://magistream.com/img/14237797.gif"/>
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
        <a target="other" href='https://finaloutpost.net/view/CCG9D#main'>
            <img src='https://finaloutpost.net/s/CCG9D.png'>
        </a>
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