---
layout: 3col
title: about the site
emoji: 🪲
permalink: /site/
menu: site
---

<article>
    <h1>Technical Notes</h1>
    <p>
        My static site is generated using <a target="_blank" href="https://jekyllrb.com/">Jekyll</a>. I am hosted by <a target="_blank" href="https://neocities.org/">Neocities</a>. I push my code from my computer to Neocities with  <a target="_blank" href="https://github.com/bcomnes/deploy-to-neocities">Bret Comnes’ deploy-to-neocities workflow</a>, and I followed <a target="_blank" href="https://jonathanchang.org/blog/deploying-your-static-site-to-neocities-using-github-actions/">this guide to set that up</a>. For the non-technical, Jekyll-curious, <a href="/2022/11/02/jekyll.html">I wrote out every single step I took to set up Jekyll for this site</a> as a complete beginner, including creating a Github account though I have changed a few things since that was written.
    </p>
    <p>
        My <a href="/tag/webmastery/">blog posts</a> on web dev include all the sources I found and used while working on technical aspects of this site and creating my ideal developer environment. I felt like it was most useful to attribute those in context, so please refer to individual posts for those sources. It's important to me to give credit to the folks who have generously provided code snippets and free-to-use assets to create this site, so my CSS files contain credit comments in line.
    </p>
</article>
<hr>
<article>
    <h1>Past Layouts</h1>
    <h2>Version 4: Misc. Themes | Nov '23</h2>
    <div style="float: left; margin-right: .5em;" class="theme-switches">
        <div data-theme="sakura" class="switch" id="switch-6">🌸</div>
        <div data-theme="green" class="switch" id="switch-7">🌱</div>
    </div>
    <p>
        After a day full of fighting with git to deploy my site, I created two new themes to blow off steam. I've wanted a green theme for a while now since they're so easy on the eyes. I also felt like a cute pink theme was past due for a site that is partially dedicated to cute pixel art. Since I had recently recoded my original theme to leverage CSS border image slicing, I added a sakura background with CRT-inspired scan-lines to soften the contrast and give a retro vibe. The green theme is very similar except it a dark mode without a border image, making it a very pleasant mobile experience for nighttime.
    </p>
    <h2>Version 3: 3-Column Throwback |  Oct '23</h2>
    <a target="_new" href="/graphics/layout/purple-layout.png">
        <img src="/graphics/layout/purple-layout.png" align="right" style="padding: 10px; max-width: 200px;" title="click to open full size">
    </a>
    <div style="float: left; margin-right: .5em;" class="theme-switches">
        <div data-theme="purple" class="switch" id="switch-3" title="click to apply the preppy purple theme">💜</div>
        <div data-theme="mail" class="switch" id="switch-4" title="click to apply the trans love letter theme">💌</div>
        <div data-theme="spooky" class="switch" id="switch-5" title="click to apply the Halloween theme">🎃</div>
    </div>
    <p>
        I coded three new layouts over two days: Preppy Purple, Trans Love Letter (dedicated to <img src="/graphics/toy/emoticons/love-cat.gif">my partner), and Halloween. I did this while listening to Pain Hasn't Hit Me by The Crane almost exclusively, and the experience reminded me of listening to Burning by The Whitest Boy Alive in high school, browsing tumblrs of girls who were definitely cooler than me. Fitting with that nostalgia, I wanted to create desktop layouts that I don't see often anymore: the classic "holy grail" 3-column layout. I immediately went to <a target="_blank" href="https://matthewjamestaylor.com/holy-grail-layout">Matthew James Taylor's website</a> as it offers the bare bones code for literally any layout you could possibly want. As a bonus, they're all responsive for mobile, and he offers many different ways to approach the layouts using CSS grid, flex, or whatever you're comfortable with. There are so many sites on Neocities that could be mobile-friendly, and this is such an easy way to go about that. I hope more folks learn from this incredible resource.
    </p>
    <p>
        Once I had the code for my site structure, I wanted to add a theme switcher for Halloween. This is done easily just by switching out whatever you want to customize in your main CSS file by swapping in variables and having those defined in separate style sheets that some JS can point to. I followed <a target="_blank" href="https://www.studytonight.com/post/build-a-theme-switcher-for-your-website-with-javascript">this very easy tutorial</a> that provided all the code snippets needed, then I got busy, committing as many CSS crimes as I wanted. The entire effort took about two days, but the majority of that was spent tweaking the CSS to figure out fun combinations that worked well together and then leaving it alone for a while so I could view it with fresh eyes. One of the really helpful resources I used to develop cohesive color schemes for each layout was <a target="_blank" href="https://colorffy.com/css-generator">colorffy's CSS / SCSS color variables generator</a>. You just specify a HEX code for a color you like, and it spits out a family of related shades, which you can then evaluate to ensure you've got the right contrast ratios for your site.
    </p>
    <ul>
        <li>
            my guestbook is now powered by code from <a target="_blank" href="https://virtualobserver.moe/ayano/comment-widget">virtualobserver</a> with a h/t to <a target="_blank" href="https://frills.dev/">Frills</a> for pointing me their way and <a target="_blank" href="https://frills.dev/blog/231023-add-moderation-to-comment-widget/">creating moderation capabilities</a>
        </li>
        <li>
            recreated my original layout from <a target="_blank" href="https://foollovers.com/">Fool Lovers</a> using just a couple lines of code thanks to border-image css (Nov '23)
        </li>
    </ul>
    <h2>Version 2: Lost in Space!  |  Mar '23 - Oct '23</h2>
    <div style="float: left; margin-right: .5em;" class="theme-switches" title="click to apply this theme">
        <div style="display: inline;" data-theme="stars" class="switch" id="switch-2">🌠</div>
    </div>
    <p>
        With this layout, I simplified the elements of my first layout using the body styling from <a target="_new" href="https://palemomos.neocities.org/cool-layouts/">Pale's gorgeous Glassy layout</a>. I've been totally on a space kick, playing <a  href="/starforged/">Starforged</a>, reading Leviathan Wakes by James S. A. Corey, and watching The Expanse, which is based on that book. I think that probably explains why I went with the space background. It's hard to find something dark, but not too boring.
    </p>
    <ul>
        <li>
            Added this page (Mar '23), TTRPG section (Mar '23), Health section (May '23), reworked my toybox into a semi-shrine (Aug '23), tamagotchi shrine (Aug '23)
        </li>
        <li>
            Implemented high-contrast text colors for better accessibility
        </li>
    </ul>
    <h2>Version 1: Lace Letters  |  Oct '22 - Mar '23</h2>
    <a target="_new" href="/graphics/layout/v1_laceletter/screenshot.png">
        <img src="/graphics/layout/v1_laceletter/screenshot.png" align="right" style="padding: 10px; max-width: 200px;" title="click to open full size">
    </a>
    <div style="float: left; margin-right: .5em;" class="theme-switches" title="click to apply this theme">
        <div data-theme="lace" class="switch" id="switch-1">🎀</div>
    </div> <i>Note: This is a hidden theme because the sakura theme is an improved second version of this, but you can still view this layout by clicking the ribbon icon. The font has been adjusted for accessibility.</i>
    <p>
        This layout was adapted from a template by <a target="_blank" href="https://foollovers.com/">Fool Lovers</a>. They provided the lace header, lacy content container graphics and code, url hover sparkles, favicon, and bouncing sakura divider. I will always be extremely fond of this layout since it was the first one I tweaked to my liking to launch Lost Letters on Neocities. A lot of folks enjoyed the gorgeous pixel art based on the guestbook entries from that time. 
    </p>
    <ul>
        <li>
            Designed my beloved dropdown menu for site navigation
        </li>
        <li>
            Major new content sections: q*bee shrine, confessions, stationery
        </li>
    </ul>
    <hr>
    <h1>Assets & Snippets</h1>
    <ul>
        <li>
            Credit for fonts, index pixels, and stamps can all be found in-line within each CSS theme file
        </li>
        <li>
            <a target="_blank" href="http://pokyaron.fc2web.com/">Pokyaron</a> - 88x31 button base
        </li>
        <li>
            <a target="_blank" href="https://pixel-soup.tumblr.com/">pixel-soup</a> & <a target="_blank" href="https://lostsozai.tumblr.com/">lost-sozai</a> - in-line emoticons
        </li>
        <li>
            <a target="_blank" href="https://gifcities.org/">GifCities</a> - Guestbook gif
        </li>
        <li>
            <a target="_blank" href="https://web.badges.world/">web.badges.world</a> - tamagotchi and neopets badges
        </li>
        <li>
            <a target="_blank" href="https://pixels.elfwink.net/">Lou (Elfwink)</a> - chaotic good and pansexual badges
        </li>
        <li>
            I used this <a target="_blank" href="https://trovami.altervista.org/en/webmasters/makebutton">button maker tool</a> to create the trans rights, vegan always, and union member badges
        </li>
        <li>
            Implemented <a target="_blank" href="https://tinylytics.app/">tinylytics kudos on my blog posts</a> thanks to <a target="_blank" href="https://frills.dev/">Frills</a> for pointing me their way
        </li>
        <li>
            <a target="_blank" href="https://phosphoricons.com/">Phosphor icons</a>
        </li>
    </ul>
    <hr>
    <h1>Milestones</h1>
    <ul>
        <li>400 followers - 2024/09/05</li>
        <li>900,000 views - 2024/09/01</li>
        <li>600,000 views - 2024/03/13</li>
        <li>300 followers - 2024/03/01</li>
        <li>500,000 views - January 2024</li>
        <li>400,000 views - 2023/12/23</li>
        <li>300,000 views - 2023/11/06</li>
        <li>200 followers - 2023/10/22</li>
        <li>200,000 views - 2023/08/27</li>
        <li>100,000 views - 2023/06/05</li>
        <li>100 followers - 2023/04/20</li>
    </ul>
</article>
