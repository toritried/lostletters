---
layout: flex-space-no-wm
title: guestbook
emoji: 💌
permalink: /guestbook/
menu: site
---

<link href="/guestbook.css" rel="stylesheet" type="text/css" media="all">
<center>
    <img src="/graphics/layout/v2_space/gb-spin.gif" class="sign-gb">
    <br>
    <br>
</center>
<!-- Guesbook Form -->
<div style="display: flex; justify-content: center;">
    <div class="gb-form-container">
        <div class="gb-meta">Send a letter &hearts;</div>
        <form action="https://formspree.io/f/mbjepqvo" method="POST" class="gb-form">
            <div class="field">
            <label for="site-name">Name *</label>
            <br>
            <input type="text" name="name" id="name" required>
            </div>
            <div class="field">
            <label for="site-url">Email</label>
            <br>
            <input type="text" name="email" id="email" placeholder="example@mail.com">
            </div>
            <div class="field">
            <label for="site-url">Site URL</label>
            <br>
            <input type="text" name="url" id="url" placeholder="https://site.neocities.org">
            </div>
            <div class="field">
            <label for="neocities-profile">Message *</label>
            <br>
            <textarea rows="6" name="message" id="message" placeholder="Not sure what to write? How about sharing how you found this site, something you like, or something we have in common. °˖✧◝(⁀ᗢ⁀)◜✧˖°"></textarea>
            </div>
            <button class="gb-button" type="submit">Send</button>
        </form>
    </div>
</div>
<br>
<br><!-- Control buttons -->
<script src="/guestbook.js"></script>
<center>
    <div id="myBtnContainer">
    <button class="btn" onclick="filterSelection('love')"> Love Letters</button>
    <button class="btn" onclick="filterSelection('tea')"> Afternoon Tea</button>
    <button class="btn" onclick="filterSelection('qna')"> Q & A</button>
    <button class="btn" onclick="filterSelection('other')"> Other</button>
    <button class="btn active" onclick="filterSelection('all')"> Show all</button>
    </div>
</center>
<br>
<br>
<div class="guestbook">
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#103 | October 03, 2023, 00:33 | <a target="_blank" href="http://surlybutterfly.net/">Surly Butterfly</a></div>
            <div class="gb-message">
                Hello! I'm so glad I came across your website - it inspired me to work on websites and fanlistings again. Thank you! I'd always wanted to join the qBee, and now I can join Afternoon Tea :) My cup is here: http://surlybutterfly.net/images/tea/01.gif and the URL is http://surlybutterfly.net/
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#102 | September 27, 2023, 01:44 | <a target="_blank" href="https://forgettablename.neocities.org/">katrina</a></div>
            <div class="gb-message">
                hey! i would like to let you know that I have linked to your site. if you are interested in becoming net neighbors with me, I have my two 88x31s in the bottom of my site (that's where I also put your button). awesome site!!
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#101 | September 23, 2023, 13:11 | <a target="_blank" href="https://forgettablename.neocities.org/">katrina</a></div>
            <div class="gb-message">
                heres my cup: https://files.catbox.moe/pvi20e.gif!! it tastes like a half empty water bottle drunk in the middle of the night. URL: https://forgettablename.neocities.org/
            </div>
        </div>
    </div>
    <div class="gb-entry other">
        <div class="gb-container">
            <div class="gb-meta">#100 | September 20, 2023, 02:50 | Diane</div>
            <div class="gb-message">
                In response to: ‘One thing that bothers me about this so far is that this all seems a bit “pull yourself up by your bootstraps”, so I want to seek out BIPOC and disabled perspectives on this to understand and acknowledge the role that systems of oppression play within this paradigm.’
                <br>
                <br>
                This might not be a 100% perfect match, but this reminded me of an Instagram post I saw recently. Maybe it could at least point you to some interesting leads: https://www.instagram.com/p/Co5t78-uMbt/
                <br>
                <br>
                (Also hello! Hope it’s not creepy that I dropped by! Love the light/dark theme!!)
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#99 | September 15, 2023, 03:35 | <a target="_blank" href="http://luvxury.neocities.org">Joanna</a></div>
            <div class="gb-message">
                Love your site so much! The colours, fonts, vibes make me so happy! Haha totally relate to being a goblin who loves weird things, even though I usually walk around like a normie Disney Princess most of the time - if a Disney Princess can be normie lol. So excited to discover the web revival community!! Thanks for sharing and inspiring!!! xoxo!!
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#98 | September 09, 2023, 10:44 | <a target="_blank" href="https://floral-tears.neocities.org/">floral-tears</a></div>
            <div class="gb-message">
                Hi! Hope you're doing well. I just wanted to share that I relate a lot to your most recent blog update. Me and "future me" almost feels like the latter invited me to their house but didn't tell how to get there lol. I even had the same video recommended to me a couple days before you shared your post. I really like your plan/takeaways specifically; I wish you the best!! Sorry if this is a weird message to send, but also I wanted you to know you're heard.
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#97 | September 08, 2023, 01:58 | <a target="_blank" href="https://bloopywoopy.neocities.org/">Bloop</a></div>
            <div class="gb-message">
                Heyo!! I've made a teacup :3
                <br>
                https://bloopywoopy.neocities.org/images/pixel-clubs/my-pixels/bloopywoopy-teacup.png
                <br>It tastes like hot chocolate, whipped cream, and marshmallows! :D
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#96 | September 01, 2023, 20:02 | <a target="_blank" href="http://creaturefeature.neocities.org/">Ghastly</a></div>
            <div class="gb-message">
                Hey I´ve read your tamagotchi shrine. you will love to know that someone made a tamagtochi fangame for the pc.
                <br>
                <br>
                I even reviewed it myself on my wordpress blog you can read it here: <a target="_blank" href="https://ghastlymirror.wordpress.com/2022/03/02/eternichi-a-tamagotchi-that-lives-on-your-pc/">https://ghastlymirror.wordpress.com/2022/03/02/eternichi-a-tamagotchi-that-lives-on-your-pc/</a>
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#95 | September 01, 2023, 15:53 | <a target="_blank" href="http://nicolettelim.com">nicolette</a></div>
            <div class="gb-message">
                I've been down a rabbit hole researching dollers and drawing pixel art in my free time, which lead to neocities and suggested doller websites. You and everyone in this sphere on neocities are so inspiring!!! I need to re-learn html so I can be a part of this! This is so healing thank you ໒꒰ྀིっ˕ -｡꒱ྀི১٨
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#94 | September 01, 2023, 15:53 | <a target="_blank" href="http://aquaticircus.neocities.org">christine</a></div>
            <div class="gb-message">
                Hello! 初めまして！ I found your site by searching for "stationery" on neocities and I was surprised at how similar we were! I also lived in Japan for many years and just recently returned to the US. I wasn't vegan, but as a vegetarian, I understand the struggles of ordering or even finding vegetarian food in the first place. I don't regret moving back, but I really really miss buying stationery off mercari, especially those uniball ones haha.
                <br>
                Anyway, we had so much in common that I had to reach out! Let me know if you want any Tokyo-insider knowledge on vegetarian places and little stationery shops!
                <br>
                (and excuse the under-construction-site- i just started on Thursday...)
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#93 | August 23, 2023, 00:21 | <a target="_blank" href="https://blissnet.neocities.org/">Ash</a></div>
            <div class="gb-message">
                I made a tea cup for your collection : https://i.imgur.com/cpbeItA.png, Hope you enjoy! You've been doing awesome work in terms of reviving the pixel art trading scene, keep vibin and thrivin
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#92 | August 23, 2023, 00:21 | <a target="_blank" href="https://jasm1nii.xyz/">jasmine</a></div>
            <div class="gb-message">
                love your site, especially the toybox page! 💜
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#91 | August 10, 2023, 23:39 | <a target="_blank" href="https://cloudcover.neocities.org/">Cloudy</a></div>
            <div class="gb-message">
                Hi! I've made a lil teacup- thank you for sharing this super cute idea!
                <br>
                https://cloudcover.neocities.org/cliques/tea/CloudcoverTeacup.png
                <br>
                "tastes like iced coffee with mint and brown sugar - made by Cloudy"
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#90 | August 10, 2023, 04:11 | <a target="_blank" href="https://antikrist.lol/">antikrist</a></div>
            <div class="gb-message">
                Absolutely love this clique. Here is my teacup! I'll be making more too!! https://antikrist.lol/images/afternoontea/orcateacup.gif
                <br>
                https://antikrist.lol/
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#89 | August 10, 2023, 01:24 | <a target="_blank" href="https://hellofrode.neocities.org/">Frode</a></div>
            <div class="gb-message">
                Hello! I love your site, the vibes are amazing!
                <br>
                I've made a teacup for afternoon tea ^-^ (https://hellofrode.neocities.org/Rambling/tea/Teacup.gif)
                <br>
                It tastes like a wet summer night <3
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#88 | August 7, 2023, 23:26 | <a target="_blank" href="https://bloopywoopy.neocities.org/">Bloop</a></div>
            <div class="gb-message">
                Your website is so cool!! I found it while looking for virtual pet sites to try out, someone linked your guide on a forum and it was super helpful! thank you :D
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#87 | August 2, 2023, 19:30 | NoIdeaHowIGotHere</div>
            <div class="gb-message">
                Hello from Kathmandu, Nepal!
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#86 | August 2, 2023, 11:44 | <a target="_blank" href="https://bechnokid.neocities.org">Bechno Kid</a></div>
            <div class="gb-message">
                Hello! I hope you're having a good day. I made a tea cup: https://bechnokid.neocities.org/images/cliques/tea_steak.png
                <br>
                "tastes like a well-done steak! mmm...so tasty! - made by Bechno Kid"
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#85 | June 30, 2023, 06:34am | <a target="_blank" href="http://sweetcharm.net/">Clover</a></div>
            <div class="gb-message">
                I saw your beautiful unicorn banner and I had to click ;o; so cute! Check my site out if you get some time, I've been working on it this summer.
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#84 | July 27, 2023, 12:41 | <a target="_blank" href="https://ashtreelane.neocities.com/">ciarán</a></div>
            <div class="gb-message">
                hi! i thought afternoon tea was really neat so i made a teacup. it tastes like blood and shards of broken ceramic. you can find it here: https://ashtreelane.neocities.org/pixelclubs
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#83 | June 29, 2023, 10:19 | <a target="_blank" href="https://mossforestdollz.neocities.org">Nemo</a></div>
            <div class="gb-message">
                Hello! I have made a teacup! https://mossforestdollz.neocities.org/images/clubs/blackcoffee.gif
                <br>
                "coffee as black as midnight on a moonless night - made by Nemo"
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#82 | June 26, 2023, 03:00 | <a target="_blank" href="https://dollarchive.neocities.org/">edie</a></div>
            <div class="gb-message">
                hello!! i love your site, i really like seeing your yarn projects. i made a teacup for afternoon tea! you can find it here: https://dollarchive.neocities.org/guilds/teacup1.png https://dollarchive.neocities.org/guilds
                <br>
                thanks for organizing this, it's really cool!!
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#81 | June 22, 2023, 13:14 | <a target="_blank" href="https://mouthsweets.neocities.org/">PJ [Mouthsweets]</a></div>
            <div class="gb-message">
                i love the afternoon tea club and i would love to join :+)
                <br>
                https://mouthsweets.neocities.org/mouthsweets-tea.png
                <br>
                "tastes like fresh garden flowers - made by Mouthsweets"
                <br>
                thank you very much ♥
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#80 | June 21, 2023, 04:29 | <a target="_blank" href="http://spiders.neocities.org">nico</a></div>
            <div class="gb-message">
                hiii i made a teacup! https://spiders.neocities.org/B/gifs/teeacup.png i've (randomly) decided it tastes like tomatoes
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#79 | June 21, 2023, 02:58 | <a target="_blank" href="https://solaria.neocities.org/">Solaria</a></div>
            <div class="gb-message">
                Hai!!
                <br>
                I was wondering if my teacup could be added to your Afternoon Tea Club! Heres the link to the pixel art on my site:
                <br>
                https://solaria.neocities.org/pixel/afternoontea/solariateacup.png
                <br>
                im honestly not sure how to describe the taste ^^; anyways my url is the same as provided in the form, but heres the page ill be displaying pixel art club pixels in: https://solaria.neocities.org/pixel/ thank you for starting this club!!!
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#78 | June 20, 2023, 23:34 | <a target="_blank" href="https://thegardenofmadeline.neocities.org/">webmaster m</a></div>
            <div class="gb-message">
                finally created my teacup for afternoon tea!! tastes like morning dew :)
                <br>
                <br>
                thank you for introducing me to the world of pixel clubs! I'm having an amazing time discovering new ones, I'd love to create one myself one day.
                <br>
                <br>
                https://thegardenofmadeline.neocities.org/images/pixelclubs/thegardenofmadeline_teacup.gif
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#77 | June 18, 2023, 06:19 | <a target="_blank" href="https://fizzsea.neocities.org/">Citrus</a></div>
            <div class="gb-message">
                https://fizzsea.neocities.org/assets/extras/teacup1.png
                <br>
                made a tea cup for afternoon tea! tastes like bit crushed sugar
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#76 | June 13, 2023, 22:52 | <a target="_blank" href="https://chickenham.art/">chickenham</a></div>
            <div class="gb-message">
                Hihi!! I hope your trip is going well :D I made three little chicken teacups for Afternoon Tea !! Here's the page they're on: https://chickenham.art/pixelclubs
                <br>
                This is such a fun idea, I'll definitely make more :)
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#75 | June 08, 2023, 00:53 | <a target="_blank" href="http://layercake.neocities.org/">June</a></div>
            <div class="gb-message">
                I have a teacup to add to the cup collection! it tastes like shadows, goo and... something else...? https://files.catbox.moe/p15tb8.gif
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#74 | June 07, 2023, 21:51 | <a target="_blank" href="https://slashdiv.neocities.org/home.html">Ziggy</a></div>
            <div class="gb-message">
                https://slashdiv.neocities.org/cliques/afternoon-tea.html
                https://slashdiv.neocities.org/assets/teacups/slashdiv-anim.webp
                https://slashdiv.neocities.org/assets/teacups/slashdiv.png
                https://i.postimg.cc/Cx0y5bpy/tea1.png
                https://i.postimg.cc/13BG612m/tea-animated.webp
                <br>
                here's my entry for the afternoon tea club! The page above displays outside of the iframe, so it might look better to link my homepage directly.
                <br>
                my tea tastes like crisp air and shimmering starlight! :DDD
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#73 | June 07, 2023, 18:57 | <a target="_blank" href="beelzebabe.wtf">✂--BEEZLEBABE--</a></div>
            <div class="gb-message">
                ✪ ω ✪ Its so cute here
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#72 | June 07, 2023, 00:55 | <a target="_blank" href="https://ziggybeeps.neocities.org">Ziggy</a></div>
            <div class="gb-message">
                Hey there! I've got a teacup to add to the club collection. It tastes like it was reheated in the microwave and forgotten a second time
                <a target="_blank" href="https://ziggybeeps.neocities.org/img/pxl/ziggycup.png">https://ziggybeeps.neocities.org/img/pxl/ziggycup.png</a>
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#71 | June 06, 2023, 15:29 | <a target="_blank" href="https://floral-tears.neocities.org/">floral-tears</a></div>
            <div class="gb-message">
                Hi! I read your post about crocheting- I'm excited to see how your top turns out, your yarn choice looks lovely! Also I would love to be a learning accountability buddy, I've been in a slump with drawing/painting lately, but found a video on composition (which I really struggle with) that inspired me. I think it would be fun to have weekly check ins :-)
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#70 | June 06, 2023, 21:31 | <a target="_blank" href="https://snals.neocities.org/">toha</a></div>
            <div class="gb-message">
                hiii !!!
                <br>
                heres my tea cup :DDD
                <br>
                <a target="_blank" href="https://snals.neocities.org/snals/snalscup.png">https://snals.neocities.org/snals/snalscup.png</a>
            </div>
        </div>
    </div>
    <div class="gb-entry other">
        <div class="gb-container">
            <div class="gb-meta">#69 | June 01, 2023, 23:58 | <a target="_blank" href="https://sanguineroyal.com/">Krish</a></div>
            <div class="gb-message">
                I was here! Reading your about was like I could've written it- I also got my start in html/css because of neopets, haha. I plan on joining your afternoon tea clique eventually. Also, the "powered by Bob" button on your homepage is by <a target="_blank" href="https://neocities.org/site/zanarkand">Zanarkand on neocities</a>!
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#68 | May 31, 2023, 09:19 | <a target="_blank" href="https://xandra.cc">alexandra</a></div>
            <div class="gb-message">
                after being on my to-do list for months, i've finally made my afternoon tea! it "tastes like broken hearts" :&#41; thank you for making the clique!!!
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#67 | May 30, 2023, 09:45 | <a target="_blank" href="https://nenrikido.neocities.org/">Rio</a></div>
            <div class="gb-message">
                This guestbook is so cute! I love the gradient headers. Your site is so cozy and inviting. Very excited to see what you do next!
            </div>
        </div>
    </div>
    <div class="gb-entry qna">
        <div class="gb-container">
            <div class="gb-meta">#66 | May 30, 2023, 12:05 | <a target="_blank" href="https://superkirbylover.neocities.org">SuperKirbylover</a></div>
            <div class="gb-message">
                oohh this guestbook is super pretty!! how did you set this up? :0 it doesn't look like you used 123guestbook or HTMLcomments!
            </div>
        </div>
        <div class="gb-reply-container">
            <div class="gb-reply-meta">May 30, 2023, 09:50 | Reply by Lost Letters</div>
            <div class="gb-message">
                Thanks so much! I made this guestbook by creating a <a target="_blank" href="https://formspree.io">Formspree form</a>, which emails me with the guestbook messages y'all submit on this page. I then transpose the messages into code for this page and push it live, so the submissions aren't immediate. All the styling is just CSS I wrote, which you can view either by inspecting the page or checking out my <a target="_blank" href="https://github.com/toritried/lostletters">public GitHub repo for the site</a>. Also, after you submitted this question, I added message filtering using a little JS and following <a target="_blank" href="https://www.w3schools.com/howto/howto_js_filter_elements.asp">this w3schools tutorial for filtering elements</a>. 
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#65 | May 29, 2023, 15:14 | <a target="_blank" href="http://ramses.neocities.org">ramses</a></div>
            <div class="gb-message">
                Thanks for your hard work in this site. I always come around and browse randomly, I love the atmosphere and all the little details that are taken care of so well 🙇🏻 thank you!
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#64 | May 29, 2023, 10:38 | <a target="_blank" href="https://magic-boots.xyz">Eva</a></div>
            <div class="gb-message">
                I just joined afternoon tea!
                <br>
                URL: https://magic-boots.xyz
                <br>
                Teacup Link: https://magic-boots.xyz/tea/magicboots-strawberryteacup.png
                <br>
                *(submitted later)*: I forgot to include the flavor! It's strawberry black tea.
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#63 | May 26, 2023, 17:18 | <a target="_blank" href="https://slashdiv.neocities.org">slashdiv</a></div>
            <div class="gb-message">
                hiyaa thank you for leaving that message on my site! yours looks pretty cool too!
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#62 | May 26, 2023, 11:19 | <a target="_blank" href="https://pinkgallica.com">mishi</a></div>
            <div class="gb-message">
                Your site is so much fun to browse! And I love this guest book design ^^
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#61 | May 25, 2023, 03:48 | <a target="_blank" href="https://nippoverse.xyz/">Nippo</a></div>
            <div class="gb-message">
                I am very interested in Japanese culture and the language. It was nice to read all of your various stories
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#60 | May 24, 2023, 23:02 | <a target="_blank" href="https://phantasmablahh.neocities.org/">Paloma</a></div>
            <div class="gb-message">
                I'm still new to the guestbook thing,, but your site is rad! :3
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#59 | May 22, 2023, 14:02 | May</div>
            <div class="gb-message">
                your website has such a cozy vibe to it &lt;3 the text is so visually appealing it makes my brain so happy
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#58 | May 22, 2023, 09:38 | <a target="_blank" href="https://paintkiller.neocities.org/">PAINTKILLER</a></div>
            <div class="gb-message">
            I made a new teacup!
            <br>
            <br>
            https://paintkiller.neocities.org/new/TEA/MINE/Paintkiller-Beercup.png
            <br>
            <br>
            Tastes like beer, because it's beer, but in a teacup that's part beer mug
            <br>
            <br>
            :&#41; 
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#57 | May 10, 2023, 01:17 | <a target="_blank" href="https://yourdevilfriends.art/">Bruno</a></div>
            <div class="gb-message">
            Ah, wasn't expecting to find my old &#171;Mask now!&#187; button in the wild! It reminded me that I really need to make my graphics page XD
            <br>
            <br>
            Anyways... I've been following your site for a bit, it's quite charming! Keep it up ^u^&#41; b
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#56 | May 03, 2023, 23:26 | <a target="_blank" href="http://kawaiiness.net">Mai</a></div>
            <div class="gb-message">
            I will join the Afternoon Tea Party, I love the idea. &lt;3
            </div>
        </div>
    </div>
    <div class="gb-entry tea">
        <div class="gb-container">
            <div class="gb-meta">#55 | April 27, 2023, 10:31 | <a target="_blank" href="https://paintkiller.neocities.org/">PAINTKILLER</a></div>
            <div class="gb-message">
            I joined The Afternoon Tea Party! My website is - https://paintkiller.neocities.org/ and the link to my teacup is - https://paintkiller.neocities.org/new/TEA/MINE/PaintkillerAFternoonTeaCup01.png and it tastes like formaldehyde - cheers!
            </div>
        </div>
    </div>
    <div class="gb-entry other">
        <div class="gb-container">
            <div class="gb-meta">#54 | April 25, 2023, 9:35 | <a target="_blank" href="https://alissocool.neocities.org/">alis</a></div>
            <div class="gb-message">
            OMG amos is also my favorite character from the expanse!!!! i loved the show. i need to read the books next :D
            </div>
        </div>
        <div class="gb-reply-container">
            <div class="gb-reply-meta">April 25, 2023, 17:35 | Reply by Lost Letters</div>
            <div class="gb-message">
            I'm so glad he got more time to shine and develop in the later seasons of The Expanse. He's really standout alongside the best dressed Chrisjen Avasarala. I'm almost finished with the first book in the series, and Amos didn't leave as much of an impression there compared to the show, so kudos to Wes Chatham for such a great performance. 
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#53 | April 21, 2023, 7:36 | <a target="_blank" href="http://cobyzaby.neocities.org/">Cobyzaby</a></div>
            <div class="gb-message">
            Hi! I'm a huge fan of journaling/stationery as well and it's super cool to see all your thoughts about it! Also you have a wonderful/chill website in general. Keep it up!
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#52 | April 17, 2023, 12:31 | <a target="_blank" href="https://sugarblush.neocities.org/">SugarBlush</a></div>
            <div class="gb-message">
            Oh my gosh, this guestbook is SO CUTE!!! I adore this layout, so funky and fresh &lt;3 Thanks for adding me on Afternoon Tea, I had fun designing my cup
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#51 | April 15, 2023, 2:28 | <a target="_blank" href="https://sidrdds.neocities.org/">ghoul</a></div>
            <div class="gb-message">
            OMGGG ur new guestbook is so cute!! : D
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#50 | April 12, 2023, 2:47 | <a target="_blank" href="http://dreamcloudz.net/">jonathan</a></div>
            <div class="gb-message">
            thank you so much for your sweet messages!! i'm just reliving my nostalgia just like a lot of other people, but i still want to make cute resources :D your website is so cute too! i love all of your backgrounds and your sites vibe. the little bows you made are rly cute too &#60;333
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-reply-container">
            <div class="gb-reply-meta">April 14, 2023, 12:35 | Reply by Lost Letters</div>
            <div class="gb-message">
            I really appreciate you stopping by and leaving such a kind comment on my site! I hope we can continue to enjoy the nostalgia trip for years to come. I love this part of the indie web.
            </div>
        </div>
    </div>
    <div class="gb-entry love">
        <div class="gb-container">
            <div class="gb-meta">#49 | April 10, 2023, 6:55 | <a target="_blank" href="https://3legged.neocities.org/">three</a></div>
            <div class="gb-message">
            I love your dnd ocs! And the dropdown navigation on your site is really satisfying for reasons I can't really pin down lmao
            </div>
        </div>
        <div class="gb-reply-container">
            <div class="gb-reply-meta">April 10, 2023, 14:50 | Lost Letters</div>
            <div class="gb-message">
            I tried a lot of different designs for the site navigation before I created something I was happy with, so I really appreciate your comment. I loved your portfolio full of so many awesome dnd characters. :D
            </div>
        </div>
    </div>
</div>
