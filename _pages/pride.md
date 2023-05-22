---
title: pride
emoji: 🏳️‍🌈
permalink: /pride/
menu: about
---
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pan Pride</title>
        <link href="/graphics/favicon/pan-favicon.ico" rel="icon" type="image/x-icon" />
        <style>
            body {
                background-image: url('/graphics/layout/pride/pride.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-color: #61abe0;
                margin: auto;
                position: relative;
                font-family: 'Noto Sans', Arial;
                line-height: 1.3em;
                overflow-x: hidden;
                overflow-y: hidden;
                height: 100vh;
            }
            a {
                color: #7afcff;
            }
            /* latin */
            @font-face {
                font-family: 'Noto Sans';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/notosans/v28/o-0IIpQlx3QUlC5A4PNr5TRA.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            @font-face {
                font-family: 'Mali';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/mali/v10/N0bV2SRONuN4QN7nGlNQJA.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
            /* ------- Text Customization ------- */
            h1 {
            font-weight:normal;
            font-style:normal;
            padding: 9px 0 13px 0;
            }
            .welcome {
            font-weight: normal;
            }
            h2{
            font-weight: normal;
            padding-bottom: 0.4em;
            }
            /* mobile styles */
            body {
            font-size: 1.2em;
            }
            h1{
            font-size: 1.8em;
            }
            h2 {
            font-size: 1.3em;
            }
            .box1{
            margin: 1em 0 1em 0;
            padding: 0.7rem;
            width: 90%;
            }
            /* tablet styles */
            @media screen and (min-width: 768px) {
                body {
                    font-size: 1.2em;
                }
                h1{
                font-size: 1.8em;
                }
                h2 {
                font-size: 1.3em;
                }
                .box1{
                margin: 0;
                padding: 2.5rem;
                width: 90%;
                margin-top: 2em;
                }
            }
            /* desktop styles */
            @media screen and (min-width: 1024px) {
                body {
                    font-size: 1.2em;
                }
                h1{
                font-size: 2em;
                }
                h2 {
                font-size: 1.5em;
                }
                .box1 {
                margin: 2em 0 15px 0;
                padding: 2.5rem;
                width: 80%;
                margin-top: 2em;
                }
            }
            ol {
            list-style: decimal inside;
            margin: 0.2em 0 0px -0.5em;
            }
            ul {
            list-style: '♡  ';
            }
            ol {
            margin: 0 0 0 -1em;
            }
            .postit { /* Draggable post-it notes were inspired by https://isaacfish.neocities.org/ */
                width:230px;
                height:230px;
                position:absolute;
                padding-left:15px;
                padding-right:15px;
                padding-top:-10px;
                padding-bottom:5px;
                cursor:move;
                box-shadow: 5px 5px 7px rgba(33,33,33,.7);
                font-size: 12px;
                font-family: 'Mali', cursive;
                line-height: 1.4em;
                color: #000;
                display: inline-block;
                vertical-align: middle;
                -webkit-transform: perspective(1px) translateZ(0);
                transform: perspective(1px) translateZ(0);
                -webkit-transition-duration: 0.3s;
                transition-duration: 0.3s;
                -webkit-transition-property: transform;
                transition-property: transform;
            }
            .postit:hover, .postit:focus, .postit:active{
                box-shadow:8px 8px 7px rgba(0,0,0,.7);
                -webkit-transform: scale(1.05) rotate(2deg);
                transform: scale(1..05) rotate(2deg);
            }
            .postit a {
                color: #1d00ff;
                position:relative;
                text-decoration: none;
                margin: 3px;
                padding-inline: 5px;
            }
            .postit a:before{ /* https://codepen.io/alvarotrigo/pen/dyJbjMX - Circle Sketch CSS Highlight Text Effect */
                content:"";
                z-index:-1;
                left:-0.5em;
                top:-0.1em;
                border-width:2px;
                border-style:solid;
                border-color:#000;
                position:absolute;
                border-right-color:transparent;
                width:100%;
                height:1.2em;
                transform:rotate(2deg);
                opacity:0.7;
                border-radius:50%;
                padding:0.1em 0.25em;
            }
            .postit a:after{
                content:"";
                z-index:-1;
                left:-0.5em;
                top:0.1em;
                padding:0.1em 0.25em;
                border-width:2px;
                border-style:solid;
                border-color:#000;
                border-left-color:transparent;
                border-top-color:transparent;
                position:absolute;
                width:100%;
                height:1.2em;
                transform:rotate(-1deg);
                opacity:0.7;
                border-radius:50%;
            }
            .pink {
                background-color:#ff65a3;
            }
            .yellow {
                background-color:#fff740;
            }
            .cyan {
                background-color:#7afcff;
            }
            .row1{top:50px;}
            .row2{top:240px;}
            .row3{top:360px;}
            .row4{top:460px;}
            .row5{top:610px;}
            .column1{left:20px;}
            .column2{left:130px;}
            .column3{left:360px;}
            .column4{left:470px;}
            .column5{left:540px;}
            .column6{left:670px;}
            * {
                box-sizing: border-box;
            }
            .wrapper {
                display: flex;
                flex-direction: row;
                min-height: 100vh;
                height: auto;
                width: 100vw;
                color: #ffd01e;
            }
            .sidebar { /*https://github.com/ntwgeeksville/Sidebar_Menu_Checkbox - Sidebar code by ntwgeeksville */
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 300px;
                background-color: #720054e3;
                height: 100%;
                min-height: 700px;
                position: fixed;
                left: -300px;
                transition: left 0.5s;
                z-index: 1; /* Stay on top */
                overflow-x: hidden; /* Disable horizontal scroll */
                padding-top: 60px;
                padding-left: 20px;
                padding-right: 20px;
            }
            /* Open and Close Btn */
            input, label {
                z-index: 20;
                position: fixed;
                top: 25px;
                left: 25px;
            }
            #openCloseBtn {
                top: -9999px;
            }
            #openCloseBtnLabel {
                transition: left 0.5s;
                display: block;
                font-size: 1.6rem;
                color: #fff;
                transform: rotate(45deg);
                transition: left 0.5s, transform 0.5s;
                cursor: pointer;
            }
            #openCloseBtnLabel::before,#openCloseBtnLabel::after { /* glowing border animation from https://github.com/hosseinnabi-ir/Glowing-Border-Animation-with-CSS*/
                content: '';
                z-index: -1;
                position: absolute;
                width: 1.9em;
                height: 1.9em;
                top: -11px;
                left: -17px;
                background: linear-gradient(45deg,
                    #ffff00, #00ff00, #0099ff, #001aff, #a200ff, #ff0055, #ff0000,
                    #ff0055, #ff0000, #ffff00, #00ff00, #0099ff, #001aff, #a200ff
                );
                background-size: 200%;
                animation: border 12s linear infinite;
                border-radius: 50%;
            }
            #openCloseBtnLabel::after {
                filter: blur(3px);
            }
            @keyframes border {
                0%, 100% {
                    background-position: 0 0;
                }
                50% {
                        background-position: 300%;
                }
            }
            #openCloseBtn:checked ~ .sidebar {
                left: 0px;
            }
            #openCloseBtn:checked ~ .content {
                margin-left: 320px;
                width: calc(100% - 320px);
            }
            #openCloseBtn:checked + #openCloseBtnLabel {
                left: 275px;
                transform: rotate(360deg);
            }
            .mobileShow { display: none;}
                /* Smartphone Portrait and Landscape */
                @media only screen
                and (min-device-width : 320px)
                and (max-device-width : 480px){ .mobileShow { display: inline;}
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <!-- Open and Close Btn -->
            <input type="checkbox" name="openCloseBtn" id="openCloseBtn">
            <label for="openCloseBtn" id="openCloseBtnLabel">&times;</label>
            <div class="sidebar">
                <div class="mobileShow">
                    <b>Disclaimer: Sorry that the mobile experience is janky. I promise that the desktop version is better! It's my first time trying to make js work for mobile. 🙇‍♀️</b>
                    <br>
                    <br>
                    <hr>
                    <br>
                </div>
                <text>
                    This was created for the <a target="_blank" href="https://32bit.cafe/pride23/">32-bit cafe's Pride 2023 event</a>!
                    <br>
                    <br>
                    This interactive work focuses on my pansexuality, but also explores themes of self-love / self-determination, intersectional identities, and queer allyship. 
                    <br>
                    <br>
                    You can drag the post-its to explore specific memories, thoughts, and quotes that relate to three themes organized by color. Try creating the <a target="_blank" href="https://en.wikipedia.org/wiki/Pansexual_flag">pansexual flag</a> or alternative arrangements!
                    <br>
                    <br>
                    I chose post-its because I have various memories and experiences that directly relate or intersect with my queer identity, and the endless possible arrangements of them can inspire new interpretations and deepen my understanding of myself.
                    <br>
                    <br>
                    <center>
                        <a href="/">Return to Lost Letters</a>
                    </center>
                    <br>
                    <hr>
                    <br>
                    <center>
                        <a target="_blank" href="https://32bit.cafe/pride23/"><img src="/graphics/linkout/32bitcafe-pride.png" title="click here to see more of the 32-bit cafe pride event"></a>
                    </center>
                    <br>
                    Background by <a target="_blank" href="https://www.vecteezy.com/free-vector/pansexual">Vecteezy</a>
                    <br>
                    Favicon by <a target="_blank" href="https://www.favicon.cc/?action=icon&file_id=829096">MxNoncompliant</a>
                    <br>
                    <br>
                </text>
            </div>
            <div class="content">
                <div id="div1" class="postit yellow row1 column1">
                    <p>
                        Growing up multi-racial, one of my earliest memories is being asked, "What are you?" It's such a broad question that disappointingly gets sharped to a point with peoples' repugnant racial gaze, but I feel like I've only explored a small fraction of its actual infinite and ever-changing answers. 
                    </p>
                </div>
                <div id="div2" class="postit cyan row1 column3">
                    <p>
                        Me @ 12 y/o: I wish my brother was gay. I think we'd be closer siblings if he was.
                        <br>
                        Mother: Don't wish that on anyone! It's so hard being gay.
                        <br>
                        <br>
                        At the time, these words were so confusing because my mother had always been vocally supportive of gays, but it was years before I understood how problematic she was.
                    </p>
                </div>
                <div id="div3" class="postit pink row4 column1">
                    <p>
                        "if acquiring my self-determination is part of a worldwide, inevitable and righteous movement, then I should be willing and able to embrace more and more of the whole world without fear and also without self-sacrifice." 
                        <br>
                        - <a target="_blank" href="https://biblioteca-alternativa.noblogs.org/files/2010/09/where_is_the_love.pdf">June Jordan</a>
                    </p>
                </div>
                <div id="div4" class="postit yellow row3 column3">
                    <p>
                        As a fat, mixed-race queer woman, I can recognize society's expectations are rooted in white supremacy, patriarchy, and capitalism, but I still struggle to resist them and cultivate love for myself. I still have so much shadow work left to do that it feels overwhelming most days. I know love is resistance, so I hold out hope.
                    </p>
                </div>
                <div id="div5" class="postit pink row2 column5">
                    <p>
                        All of a sudden I realized I wasn't bi. I could be attracted to anyone if I just got to know them (regardless of their gender). That would have been jarring if it hadn't burst straight from the assuredness of my very core. Now, it feels like I'm bragging when I tell people I'm pan because it's just so awesome to be able to connect so deeply with so many people. 
                    </p>
                </div>
                <div id="div6" class="postit yellow row5 column2">
                    <p>
                        "Part of the way that the system oppresses people is by degrading people and wearing them down mentally, so that they internalize self-hatred. [...] It's hard to be truly committed to collective liberation when we don't see ourselves or others as worthwhile or significant." 
                        <br>
                        - <a target="_blank" href="https://loneberry.files.wordpress.com/2010/03/queerhapa21.pdf">Jackie Wang</a>
                    </p>
                </div>
                <div id="div7" class="postit cyan row5 column4">
                    <p>
                        Diary excerpt from high school: <i>"At the lockers in between classes, R told me he was bi. I smiled and told him that was pretty cool, then we went to our next period. He was pretty shocked that I wasn't shocked, but I'd hope we'd be good enough friends by now that we can just share that sort of thing. I mean we've known each other since I was four. :P"</i>
                    </p>
                </div>
                <div id="div8" class="postit cyan row2 column2">
                    <p>
                        Me @ 29 y/o: Yeah, so my girlfriend is trans, so please exclusively use she/her pronouns to refer to her going forward. Also, I realized I'm pansexual--I just like people regardless of gender...
                        <br>
                        Dad: That's great kiddo, as long as you're both happy--that's what matters.
                        <br>
                        Me: 🥰🥰🥰
                    </p>
                </div>
                <div id="div9" class="postit pink row4 column6">
                    <p>
                        Nurse: Do you want to come into the operating room?
                        <br>
                        Me: Yes, of course. Can I hold her hand?
                        <br>
                        <i>Later</i>
                        <br>
                        Me: You're doing great. Just breathe with me. It's going to be over soon, and you'll be so happy with the result.
                    </p>
                </div>
            </div>
        </div>
    <script> //script for making post-its draggable DESKTOP
        dragElement(document.getElementById("div1"));
        dragElement(document.getElementById("div2"));
        dragElement(document.getElementById("div3"));
        dragElement(document.getElementById("div4"));
        dragElement(document.getElementById("div5"));
        dragElement(document.getElementById("div6"));
        dragElement(document.getElementById("div7"));
        dragElement(document.getElementById("div8"));
        dragElement(document.getElementById("div9"));
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                elmnt.onmousedown = dragMouseDown;
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    </script>
    <script> //script for making post-it's draggable on MOBILE from: https://codepen.io/deepakkadarivel/pen/LrGEdL
        window.onload = function() {
            // find the elements that you want to drag.
            const postits = document.getElementsByClassName('postit');
            for (const postit of postits) {
                /* listen to the touchMove event,
                every time it fires, grab the location
                of touch and assign it to box */
                postit.addEventListener('touchmove', function(e) {
                    // grab the location of touch
                    var touchLocation = e.targetTouches[0];
                    // assign box new coordinates based on the touch.
                    postit.style.left = touchLocation.pageX + 'px';
                    postit.style.top = touchLocation.pageY + 'px';
                })
                /* record the position of the touch
                when released using touchend event.
                This will be the drop position. */
                postit.addEventListener('touchend', function(e) {
                    // current box position.
                    var x = parseInt(postit.style.left);
                    var y = parseInt(postit.style.top);
                })
            }
        }
    </script>
