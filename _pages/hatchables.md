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
        <a target="other" href='https://dragcave.net/view/GU9C6#middle'><img src='https://dragcave.net/image/GU9C6.gif' style='border-width: 0'/></a>
        <a target="other" href='https://dragcave.net/view/yyW2B#middle'><img src='https://dragcave.net/image/yyW2B.gif' style='border-width: 0'/></a>
        <a target="other" href='https://dragcave.net/view/8D5eo#middle'><img src='https://dragcave.net/image/8D5eo.gif' style='border-width: 0'/></a>
        <a target="other" href='https://dragcave.net/view/ypecH#middle'><img src='https://dragcave.net/image/ypecH.gif' style='border-width: 0'/></a>
        <a target="other" href="http://magistream.com/creature/14204334#page-body"><img src="http://magistream.com/img/14204334.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14204335#page-body"><img src="http://magistream.com/img/14204335.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14204332#page-body"><img src="http://magistream.com/img/14204332.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14204333#page-body"><img src="http://magistream.com/img/14204333.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14203656#page-body"><img src="http://magistream.com/img/14203656.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14203586#page-body"><img src="http://magistream.com/img/14203586.gif"/></a>
        <a target="other" href='https://finaloutpost.net/view/K0VQS#main'><img src='https://finaloutpost.net/s/K0VQS1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/qadKQ#main'><img src='https://finaloutpost.net/s/qadKQ1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/88q3D#main'><img src='https://finaloutpost.net/s/88q3D1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/szPN3#main'><img src='https://finaloutpost.net/s/szPN31.png'></a>
        <a target="other" href='https://finaloutpost.net/view/2pGvm#main'><img src='https://finaloutpost.net/s/2pGvm1.png'></a>
        <a target="other" href='https://dragcave.net/view/374HG#middle'><img src='https://dragcave.net/image/374HG.gif' style='border-width: 0' /></a>
        <a target="other" href='https://dragcave.net/view/25sX5#middle'><img src='https://dragcave.net/image/25sX5.gif' style='border-width: 0' /></a>
        <a target="other" href='https://dragcave.net/view/1YQ5c#middle'><img src='https://dragcave.net/image/1YQ5c.gif' style='border-width: 0' /></a>
        <a target="other" href='https://dragcave.net/view/2QiOP#middle'><img src='https://dragcave.net/image/2QiOP.gif' style='border-width: 0' /></a>
        <a target="other" href='https://finaloutpost.net/view/9WHoZ#main'><img src='https://finaloutpost.net/s/9WHoZ1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/JkFIS#main'><img src='https://finaloutpost.net/s/JkFIS1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/GNcMV#main'><img src='https://finaloutpost.net/s/GNcMV1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/ekFdC#main'><img src='https://finaloutpost.net/s/ekFdC1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/LumqA#main'><img src='https://finaloutpost.net/s/LumqA1.png'></a>
        <a target="other" href='https://finaloutpost.net/view/yUVxa#main'><img src='https://finaloutpost.net/s/yUVxa1.png'></a>
        <a target="other" href="http://magistream.com/creature/14203588#page-body"><img src="http://magistream.com/img/14203588.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14203351#page-body"><img src="http://magistream.com/img/14203351.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14203554#page-body"><img src="http://magistream.com/img/14203554.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14202717#page-body"><img src="http://magistream.com/img/14202717.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14202368#page-body"><img src="http://magistream.com/img/14202368.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14202306#page-body"><img src="http://magistream.com/img/14202306.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14202298#page-body"><img src="http://magistream.com/img/14202298.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14201186#page-body"><img src="http://magistream.com/img/14201186.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14200541#page-body"><img src="http://magistream.com/img/14200541.gif"/></a>
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
    <br>
    <h2>my favorite fully grown pets</h2>
        <a target="_blank" href="https://magistream.com/user/lostletters/Completed">Magistream</a> | <a target="_blank" href="https://finaloutpost.net/visit/lostletters/37592">The Final Outpost</a> | <a target="_blank" href="https://dragcave.net/user/lostletters">Dragon Cave</a>
        <br>
        <a target="other" href="http://magistream.com/creature/14200163#page-body"><img src="http://magistream.com/img/14200163.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14192587#page-body"><img src="http://magistream.com/img/14192587.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14192588#page-body"><img src="http://magistream.com/img/14192588.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14192584#page-body"><img src="http://magistream.com/img/14192584.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14201318#page-body"><img src="http://magistream.com/img/14201318.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14199389#page-body"><img src="http://magistream.com/img/14199389.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14201225#page-body"><img src="http://magistream.com/img/14201225.gif"/></a>
        <a target="other" href='https://finaloutpost.net/view/ohzHb#main'><img src='https://finaloutpost.net/s/ohzHb1.png'></a>
        <a target="other" href="http://magistream.com/creature/14200372#page-body"><img src="http://magistream.com/img/14200372.gif"/></a>
        <a target="other" href='https://finaloutpost.net/view/6tZ5z#main'><img src='https://finaloutpost.net/s/6tZ5z3.png'></a>
        <a target="other" href="http://magistream.com/creature/14202326#page-body"><img src="http://magistream.com/img/14202326.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14201199#page-body"><img src="http://magistream.com/img/14201199.gif"/></a>
        <a target="other" href="http://magistream.com/creature/14199388#page-body"><img src="http://magistream.com/img/14199388.gif"/></a>
</center>