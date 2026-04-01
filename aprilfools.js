// =====================================================
// APRIL FOOLS 2026 - MAXIMUM CHAOS ENGINE
// Mr. Garcia's Logic & Computation - garciacode.com
// "I see no bugs here, only features"
// =====================================================

(function() {
    'use strict';

    // ===== MARQUEE BANNER =====
    const marquee = document.createElement('div');
    marquee.id = 'cursed-marquee-top';
    marquee.innerHTML = `<marquee behavior="alternate" scrollamount="8">
        &#127881; WELCOME TO MR. GARCIA'S TOTALLY NORMAL WEBSITE &#127881;
        &#9731; NOW WITH 200% MORE COMIC SANS &#9731;
        &#128640; BEST VIEWED ON NETSCAPE NAVIGATOR 4.0 &#128640;
        &#127790; THIS SITE IS TACO-APPROVED &#127790;
    </marquee>`;
    document.body.prepend(marquee);

    // ===== UNDER CONSTRUCTION BANNER =====
    const construction = document.createElement('div');
    construction.id = 'under-construction';
    construction.innerHTML = `
        <img src="https://web.archive.org/web/2009/http://www.animatedgif.net/underconstruction/5consbar2_e0.gif" alt="under construction"
             onerror="this.outerHTML='&#128679;'"/>
        <span>&nbsp; UNDER CONSTRUCTION - PLEASE PARDON OUR DUST &nbsp;</span>
        <img src="https://web.archive.org/web/2009/http://www.animatedgif.net/underconstruction/5consbar2_e0.gif" alt="under construction"
             onerror="this.outerHTML='&#128679;'"/>
    `;
    // Insert after the marquee, before main content
    const firstHeading = document.querySelector('h1');
    if (firstHeading) {
        firstHeading.parentNode.insertBefore(construction, firstHeading);
    } else {
        document.body.insertBefore(construction, document.body.children[1]);
    }

    // ===== VISITOR COUNTER =====
    const fakeCount = Math.floor(Math.random() * 900000) + 100000;
    const footer = document.createElement('div');
    footer.id = 'cursed-footer';
    footer.innerHTML = `
        <span>&#128293; You are visitor #<span id="visitor-counter">${fakeCount}</span> &#128293;</span>
        <span>&bull;</span>
        <span>Made with &#10084;&#65039; and questionable decisions</span>
        <span>&bull;</span>
        <span>&#169; 1997 GeoCities Webring</span>
    `;
    document.body.appendChild(footer);

    // Increment visitor counter for fun
    setInterval(function() {
        const counter = document.getElementById('visitor-counter');
        if (counter) {
            counter.textContent = parseInt(counter.textContent) + Math.floor(Math.random() * 3) + 1;
        }
    }, 2000);

    // ===== SPARKLE CURSOR TRAIL =====
    const sparkles = ['&#10024;', '&#11088;', '&#127775;', '&#128171;', '&#127790;', '&#128640;', '&#129412;', '&#127881;'];
    let sparkleThrottle = 0;

    document.addEventListener('mousemove', function(e) {
        sparkleThrottle++;
        if (sparkleThrottle % 3 !== 0) return; // Don't spawn too many

        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        document.body.appendChild(sparkle);

        setTimeout(function() { sparkle.remove(); }, 1000);
    });

    // ===== CLIPPY HELPER =====
    const clippyMessages = [
        "It looks like you're trying to learn Java! Would you like me to make it harder?",
        "Did you know? Comic Sans was designed in 1994. Best year for fonts!",
        "TIP: Have you tried turning your Turing Machine off and on again?",
        "It looks like you're trying to submit homework! Have you considered... not?",
        "FUN FACT: This website is 100% W3C non-compliant!",
        "Did you remember to submit to logichomework@outlook.com? Just checking!",
        "ALERT: Your binary tree is looking a little... unbalanced today.",
        "Have you tried solving this recursively? And by that I mean: have you tried solving this recursively?",
        "Mr. Garcia's cooking tip: You can't compile pasta.",
        "WARNING: Exposure to Comic Sans may cause spontaneous eye twitching.",
        "This website has been optimized for Internet Explorer 6.",
        "Pro tip: The homework is due yesterday. Good luck!",
        "I see you're browsing Mr. Garcia's website. Excellent life choices!",
        "Remember: In Java, everything is an object. Even your problems.",
        "DFA stands for 'Definitely Fun Assignment' right?",
    ];

    const clippy = document.createElement('div');
    clippy.id = 'clippy-helper';
    clippy.innerHTML = `<b>&#128206; Clippy says:</b><br><br><span id="clippy-text">${clippyMessages[0]}</span>`;
    document.body.appendChild(clippy);

    // Rotate Clippy messages
    let clippyIndex = 0;
    setInterval(function() {
        clippyIndex = (clippyIndex + 1) % clippyMessages.length;
        const clippyText = document.getElementById('clippy-text');
        if (clippyText) {
            clippyText.style.opacity = '0';
            setTimeout(function() {
                clippyText.textContent = clippyMessages[clippyIndex];
                clippyText.style.opacity = '1';
            }, 300);
        }
    }, 5000);

    // ===== SIGN MY GUESTBOOK BUTTON =====
    const guestbook = document.createElement('a');
    guestbook.id = 'guestbook-btn';
    guestbook.href = '#';
    guestbook.innerHTML = '&#128214; Sign My Guestbook!';
    guestbook.addEventListener('click', function(e) {
        e.preventDefault();
        alert('GUESTBOOK ERROR 404:\n\nThe guestbook is hosted on a Geocities server that no longer exists.\n\nPlease send your guestbook entry via carrier pigeon to:\nMr. Garcia, Room 209\n\n(This is an April Fools joke. Happy April 1st! 🎉)');
    });
    document.body.appendChild(guestbook);

    // ===== RANDOM PAGE TITLE CHANGES =====
    const cursedTitles = [
        document.title + ' (NOW IN COMIC SANS!)',
        document.title + ' - Best Viewed at 800x600',
        document.title + ' [UNDER CONSTRUCTION]',
        document.title + ' - A Geocities Production',
        document.title + ' feat. Comic Sans',
    ];
    document.title = cursedTitles[Math.floor(Math.random() * cursedTitles.length)];

    // ===== KONAMI CODE EASTER EGG =====
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // up up down down left right left right B A
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                konamiIndex = 0;
                document.body.classList.toggle('konami-activated');
                alert('🎮 KONAMI CODE ACTIVATED! 🎮\n\nYou found the secret! The page will now vibrate.\nPress the code again to stop it.\n\n...why did you even try this?');
            }
        } else {
            konamiIndex = 0;
        }
    });

    // ===== RANDOM ROTATION ON PARAGRAPHS =====
    document.querySelectorAll('p').forEach(function(p) {
        const rotation = (Math.random() - 0.5) * 4; // -2 to 2 degrees
        p.style.transform = 'rotate(' + rotation + 'deg)';
    });

    // ===== SPARKLE DIVIDERS =====
    // Add sparkle dividers between major sections
    document.querySelectorAll('p + p').forEach(function(p, i) {
        if (i % 2 === 0) {
            const divider = document.createElement('div');
            divider.className = 'sparkle-divider';
            divider.innerHTML = '&#10024; &#11088; &#10024; &#11088; &#10024; &#11088; &#10024;';
            p.parentNode.insertBefore(divider, p);
        }
    });

    // ===== RANDOMLY REPLACE SOME WORDS =====
    // (Subtle chaos - only on visible text, not links or code)
    function cursedReplace(text) {
        return text
            .replace(/\bJava\b/g, 'Java\u2122\u00AE\u00A9')
            .replace(/\bhomework\b/gi, 'FUN CHALLENGE')
            .replace(/\bDue\b/g, '~vibes by~')
            .replace(/\blab\b/gi, 'EPIC QUEST')
            .replace(/\bsubmit\b/gi, 'YEET');
    }

    // Only replace in direct text nodes of paragraphs (not in links or code)
    document.querySelectorAll('p').forEach(function(p) {
        p.childNodes.forEach(function(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = cursedReplace(node.textContent);
            }
        });
    });

    // ===== FLOATING EMOJIS =====
    function spawnFloatingEmoji() {
        const emojis = ['&#127790;', '&#128187;', '&#129412;', '&#128640;', '&#127881;', '&#128293;', '&#129302;', '&#127829;'];
        const emoji = document.createElement('div');
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            font-size: ${20 + Math.random() * 30}px;
            pointer-events: none;
            z-index: 99997;
            animation: float-up ${5 + Math.random() * 5}s linear forwards;
        `;
        document.body.appendChild(emoji);
        setTimeout(function() { emoji.remove(); }, 10000);
    }

    // Add the float-up animation
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float-up {
            0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-120vh) rotate(720deg); opacity: 0; }
        }
    `;
    document.head.appendChild(floatStyle);

    // Spawn floating emojis periodically
    setInterval(spawnFloatingEmoji, 3000);
    // Spawn a few immediately
    for (let i = 0; i < 3; i++) {
        setTimeout(spawnFloatingEmoji, i * 500);
    }

    // ===== CUSTOM RIGHT-CLICK FLAVOR TEXT =====
    document.addEventListener('contextmenu', function(e) {
        // Don't block the menu, just add flavor
        console.log('%c 🌮 INSPECTING MR. GARCIA\'S CURSED CODE? BRAVE. 🌮',
            'font-size: 20px; color: #ff00ff; font-family: Comic Sans MS;');
        console.log('%c This website is best experienced with your eyes closed.',
            'font-size: 14px; color: #00ff00;');
    });

    // ===== CONSOLE EASTER EGGS =====
    console.log('%c' + `
    ╔══════════════════════════════════════════╗
    ║  🌮 MR. GARCIA'S CURSED WEBSITE v2026  ║
    ║  "It's not a bug, it's a feature"       ║
    ║                                          ║
    ║  Happy April Fools! 🎉                  ║
    ║  Try the Konami Code for a surprise...   ║
    ║  ↑↑↓↓←→←→BA                             ║
    ╚══════════════════════════════════════════╝
    `, 'font-family: monospace; color: #ff00ff; font-size: 14px;');

})();
