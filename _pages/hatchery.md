---
layout: default2
title: hatchery
emoji: 🐣
permalink: /hatch/
menu: pages
---
<center>
    <h2>virtual pet hatchery</h2>
    Say hello to my little pets! Clicking on the eggs and hatchlings below will help them grow, boosting their growth rate, happiness, hardiness, and appearance. If you want to start collecting virtual pets too, check out <a href="/2022/11/25/virtual-pets.html">my guide to various pixel art virtual pet sites</a>.
    <br>
    <div class="hatchery">
        <a target="other" href='https://finaloutpost.net/view/VnD0S#main'>
            <img src='https://finaloutpost.net/s/VnD0S.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/WDMUI#main'>
            <img src='https://finaloutpost.net/s/WDMUI.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/JBZ3v#main'>
            <img src='https://finaloutpost.net/s/JBZ3v.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/bBmuT#main'>
            <img src='https://finaloutpost.net/s/bBmuT.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/lNotg#main'>
            <img src='https://finaloutpost.net/s/lNotg.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/TQ0fu#main'>
            <img src='https://finaloutpost.net/s/TQ0fu.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/7PcDM#main'>
            <img src='https://finaloutpost.net/s/7PcDM.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/gpFGq#main'>
            <img src='https://finaloutpost.net/s/gpFGq.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/WdQGI#main'>
            <img src='https://finaloutpost.net/s/WdQGI.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/ZhoHX#main'>
            <img src='https://finaloutpost.net/s/ZhoHX.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/Z8rgF#main'>
            <img src='https://finaloutpost.net/s/Z8rgF.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/4Sd6z#main'>
            <img src='https://finaloutpost.net/s/4Sd6z.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/eJrk1#main'>
            <img src='https://finaloutpost.net/s/eJrk1.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/xu6R3#main'>
            <img src='https://finaloutpost.net/s/xu6R3.png'>
        </a>
        <a target="other" href="https://dragcave.net/view/OLpNV#middle">
            <img src="https://dragcave.net/image/OLpNV.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/ANAkv#middle">
            <img src="https://dragcave.net/image/ANAkv.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/Vnzzq#middle">
            <img src="https://dragcave.net/image/Vnzzq.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/8iZb3#middle">
            <img src="https://dragcave.net/image/8iZb3.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/ShmHn#middle">
            <img src="https://dragcave.net/image/ShmHn.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/xh8iY#middle">
            <img src="https://dragcave.net/image/xh8iY.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/0vqj5#middle">
            <img src="https://dragcave.net/image/0vqj5.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/VxBti#middle">
            <img src="https://dragcave.net/image/VxBti.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/bdhSk#middle">
            <img src="https://dragcave.net/image/bdhSk.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/kb2Fo#middle">
            <img src="https://dragcave.net/image/kb2Fo.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/WDNGA#middle">
            <img src="https://dragcave.net/image/WDNGA.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/95L4W#middle">
            <img src="https://dragcave.net/image/95L4W.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/8HQE1#middle">
            <img src="https://dragcave.net/image/8HQE1.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/sOA7M#middle">
            <img src="https://dragcave.net/image/sOA7M.gif" style="border-width:0"/>
        </a>
        <a target="other" href="https://dragcave.net/view/0nJBe#middle">
            <img src="https://dragcave.net/image/0nJBe.gif" style="border-width:0"/>
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
        <a target="other" href='https://finaloutpost.net/view/9Z1vj#main'>
            <img src='https://finaloutpost.net/s/9Z1vj.png'>
        </a>
        <a target="other" href='https://finaloutpost.net/view/fgoZb#main'>
            <img src='https://finaloutpost.net/s/fgoZb.png'>
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
</center>