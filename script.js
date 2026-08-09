/* =====================================================
   LOVE FOR HALIMA
   Clean script.js
===================================================== */

"use strict";


/* =====================================================
   ELEMENTS
===================================================== */

const loader = document.getElementById("loader");
const startExperience = document.getElementById("startExperience");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const hero = document.getElementById("hero");
const story = document.getElementById("story");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const reasons = document.getElementById("reasons");
const surprise = document.getElementById("surprise");
const question = document.getElementById("question");
const ending = document.getElementById("ending");

const hearts = document.getElementById("hearts");
const particles = document.getElementById("particles");



/* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;


/* Play music */

function playMusic() {

    if (!music) return;

    music.play()
        .then(() => {

            musicPlaying = true;

            if (musicBtn) {
                musicBtn.textContent = "⏸️";
            }

        })
        .catch(() => {

            console.log("Music playback was blocked.");

        });

}


/* Pause music */

function pauseMusic() {

    if (!music) return;

    music.pause();

    musicPlaying = false;

    if (musicBtn) {
        musicBtn.textContent = "🎵";
    }

}


/* Toggle music */

function toggleMusic() {

    if (musicPlaying) {

        pauseMusic();

    } else {

        playMusic();

    }

}


if (musicBtn) {

    musicBtn.addEventListener("click", toggleMusic);

}


/* =====================================================
   LOADING SCREEN
===================================================== */

if (startExperience) {

    startExperience.addEventListener("click", () => {

        /* Start music after user interaction */
        playMusic();


        /* Hide loader */

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }

    });

}



/* =====================================================
   HERO
===================================================== */

if (hero) {

    hero.innerHTML = `

        <div class="card">

            <h3>
                Made With ❤️
            </h3>

            <h1>
                For<br>
                Halima Alhaji Saleh
            </h1>

            <p id="heroTyping"></p>

            <br>

            <button id="beginStory">
                Begin Our Journey ❤️
            </button>

        </div>

    `;

}



/* =====================================================
   HERO TYPEWRITER
===================================================== */

const heroMessage = `Hello Halima ❤️

I built this little website especially for you.

Every click reveals another piece of my heart.

I hope it makes you smile.

— Al-Ameen Umar`;


function typeText(element, text, speed = 40) {

    if (!element) return;

    element.innerHTML = "";

    let index = 0;


    function write() {

        if (index >= text.length) {
            return;
        }


        if (text[index] === "\n") {

            element.innerHTML += "<br>";

        } else {

            element.innerHTML += text[index];

        }


        index++;

        setTimeout(write, speed);

    }


    write();

}


const heroTyping = document.getElementById("heroTyping");

typeText(heroTyping, heroMessage, 40);



/* =====================================================
   STORY
===================================================== */

if (story) {

    story.innerHTML = `

        <div class="card">

            <h2>
                🌹 Our Story
            </h2>

            <p>

                Every beautiful story begins with one hello.

                <br><br>

                Sometimes a simple person entering your life
                can make ordinary moments feel special.

                <br><br>

                This little website is my way of creating
                something meaningful for you.

                <br><br>

                I hope every page makes you smile.

                <br><br>

                ❤️

            </p>

        </div>

    `;

}



/* =====================================================
   BEGIN STORY BUTTON
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "beginStory") {

        if (story) {

            story.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

});



/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart() {

    if (!hearts) return;


    const heart = document.createElement("div");

    heart.textContent = "❤️";


    heart.style.position = "absolute";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        18 + Math.random() * 22 + "px";

    heart.style.opacity =
        0.4 + Math.random() * 0.6;

    heart.style.pointerEvents = "none";

    heart.style.transition =
        "transform 8s linear, opacity 8s linear";


    hearts.appendChild(heart);


    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-120vh) rotate(${Math.random() * 360}deg)`;

        heart.style.opacity = "0";

    });


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


setInterval(createHeart, 450);



/* =====================================================
   SPARKLES
===================================================== */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.textContent = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        12 + Math.random() * 14 + "px";

    sparkle.style.opacity = "0.8";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "1";


    document.body.appendChild(sparkle);


    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}


setInterval(createSparkle, 700);



/* =====================================================
   LOVE LETTER
===================================================== */

if (letter) {

    letter.innerHTML = `

        <div class="card">

            <h2>
                💌 A Letter For You
            </h2>

            <div
                id="envelope"
                style="
                    font-size:100px;
                    cursor:pointer;
                "
            >
                📩
            </div>


            <div
                id="letterBox"
                style="display:none;"
            >

                <p id="letterText"></p>

                <br>

                <button id="galleryBtn">
                    Continue ❤️
                </button>

            </div>

        </div>

    `;

}



/* =====================================================
   LETTER TYPEWRITER
===================================================== */

const envelope = document.getElementById("envelope");
const letterBox = document.getElementById("letterBox");
const letterText = document.getElementById("letterText");


const loveLetter = `Dear Halima,

Thank you for taking the time to visit this little website.

I didn't want to give you something ordinary.

I wanted to create something that would always remind you
that you are worth time, effort, and creativity.

Every page was made with sincerity.

I hope it brings a beautiful smile to your face.

❤️

With respect and admiration,

Al-Ameen Umar`;


if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.style.display = "none";


        if (letterBox) {

            letterBox.style.display = "block";

        }


        if (letterText) {

            typeText(
                letterText,
                loveLetter,
                30
            );

        }

    });

}



/* =====================================================
   GALLERY CONTINUE
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "galleryBtn") {

        if (gallery) {

            gallery.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

});



/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const closeBtn =
    document.getElementById("close");


document.querySelectorAll(".gallery img")
    .forEach((image) => {

        image.addEventListener("click", () => {

            if (!lightbox || !lightboxImg) {
                return;
            }


            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

            lightboxImg.alt =
                image.alt || "Love Memory";

        });

    });



/* Close button */

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        if (lightbox) {

            lightbox.style.display = "none";

        }

    });

}



/* Close by clicking background */

if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}



/* =====================================================
   REASONS
===================================================== */

if (reasons) {

    reasons.innerHTML = `

        <div class="card">

            <h2>
                💖 Things I Admire About You
            </h2>

            <p>

                🌹 Your beautiful smile.

                <br><br>

                🌹 Your kindness.

                <br><br>

                🌹 Your confidence.

                <br><br>

                🌹 The happiness you bring.

                <br><br>

                🌹 The amazing person you are.

            </p>

            <br>

            <button id="surpriseBtn">
                One More Surprise 🎁
            </button>

        </div>

    `;

}



/* =====================================================
   GO TO SURPRISE
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "surpriseBtn") {

        if (surprise) {

            surprise.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

});



/* =====================================================
   SURPRISE
===================================================== */

if (surprise) {

    surprise.innerHTML = `

        <div class="card">

            <h2>
                🎁 One Last Surprise
            </h2>


            <div
                id="giftBox"
                style="
                    font-size:120px;
                    cursor:pointer;
                "
            >
                🎁
            </div>


            <div
                id="giftMessage"
                style="display:none;"
            >

                <h2>
                    Dear Halima ❤️
                </h2>

                <p>

                    Thank you for taking this journey
                    through this little world I created.

                    <br><br>

                    It isn't about expensive gifts.

                    <br><br>

                    Sometimes the greatest gift is simply
                    showing someone that they are worth
                    your time, effort, and creativity.

                    <br><br>

                    I'm grateful our paths crossed.

                    <br><br>

                    ❤️

                </p>

                <br>

                <button id="loveGameBtn">
                    One Final Question ❤️
                </button>

            </div>

        </div>

    `;

}



/* =====================================================
   GIFT OPEN
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "giftBox") {

        const giftMessage =
            document.getElementById("giftMessage");


        event.target.style.display = "none";


        if (giftMessage) {

            giftMessage.style.display = "block";

        }

    }

});



/* =====================================================
   FINAL QUESTION BUTTON
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "loveGameBtn") {

        if (question) {

            question.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

});



/* =====================================================
   LOVE QUESTION
===================================================== */

if (question) {

    question.innerHTML = `

        <div class="card">

            <h2>
                🥺 One Tiny Question...
            </h2>

            <h1>
                Do you love me? ❤️
            </h1>


            <div id="buttons">

                <button id="yesBtn">
                    YES ❤️
                </button>

                <button id="noBtn">
                    NO 😒
                </button>

            </div>


            <p id="answer"></p>

        </div>

    `;

}



/* =====================================================
   RUN-AWAY NO BUTTON
===================================================== */

let yesScale = 1;


document.addEventListener("mousemove", (event) => {

    const noBtn =
        document.getElementById("noBtn");

    const yesBtn =
        document.getElementById("yesBtn");

    const buttons =
        document.getElementById("buttons");

    const answer =
        document.getElementById("answer");


    if (
        !noBtn ||
        !yesBtn ||
        !buttons
    ) {
        return;
    }


    const rect =
        noBtn.getBoundingClientRect();


    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;


    const distanceX =
        event.clientX - centerX;

    const distanceY =
        event.clientY - centerY;


    const distance =
        Math.sqrt(
            distanceX * distanceX +
            distanceY * distanceY
        );


    if (distance < 75) {

        const maxX =
            buttons.clientWidth -
            noBtn.offsetWidth;

        const maxY =
            buttons.clientHeight -
            noBtn.offsetHeight;


        noBtn.style.left =
            Math.random() * Math.max(0, maxX) + "px";

        noBtn.style.top =
            Math.random() * Math.max(0, maxY) + "px";


        yesScale =
            Math.min(2.2, yesScale + 0.1);


        yesBtn.style.transform =
            `scale(${yesScale})`;


        const replies = [

            "🥺 Are you sure?",

            "😂 Nice try!",

            "❤️ Click YES instead!",

            "🌹 Nope!",

            "😜 I'm too fast!",

            "🥹 Pleaseeeee...",

            "💖 You almost got it!"

        ];


        if (answer) {

            answer.textContent =
                replies[
                    Math.floor(
                        Math.random() *
                        replies.length
                    )
                ];

        }

    }

});



/* =====================================================
   MOBILE NO BUTTON
===================================================== */

document.addEventListener("touchstart", (event) => {

    const noBtn =
        document.getElementById("noBtn");

    const yesBtn =
        document.getElementById("yesBtn");

    const buttons =
        document.getElementById("buttons");

    const answer =
        document.getElementById("answer");


    if (
        !noBtn ||
        !yesBtn ||
        !buttons
    ) {
        return;
    }


    if (
        event.target !== noBtn
    ) {
        return;
    }


    const maxX =
        buttons.clientWidth -
        noBtn.offsetWidth;

    const maxY =
        buttons.clientHeight -
        noBtn.offsetHeight;


    noBtn.style.left =
        Math.random() *
        Math.max(0, maxX) + "px";


    noBtn.style.top =
        Math.random() *
        Math.max(0, maxY) + "px";


    yesScale =
        Math.min(2.2, yesScale + 0.1);


    yesBtn.style.transform =
        `scale(${yesScale})`;


    if (answer) {

        answer.textContent =
            "😂 Nice try! ❤️";

    }

});



/* =====================================================
   YES BUTTON
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id !== "yesBtn") {
        return;
    }


    heartConfetti();


    const answer =
        document.getElementById("answer");


    if (answer) {

        answer.innerHTML = `

            <h1>
                🥰❤️ YAYYYYY!! ❤️🥰
            </h1>

            <p>

                You just made this little
                website even more special.

                <br><br>

                Thank you, Halima. ❤️

                <br><br>

                I hope every smile you had
                while exploring this website
                was real.

            </p>

        `;

    }


    setTimeout(() => {

        if (ending) {

            ending.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 1500);

});



/* =====================================================
   HEART CONFETTI
===================================================== */

function heartConfetti() {

    for (let i = 0; i < 60; i++) {

        setTimeout(() => {

            createConfettiHeart();

        }, i * 35);

    }

}


function createConfettiHeart() {

    const heart =
        document.createElement("div");


    heart.textContent =
        ["❤️", "💖", "💕", "💗", "💓", "💞"][
            Math.floor(
                Math.random() * 6
            )
        ];


    heart.style.position =
        "fixed";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.top =
        "-30px";


    heart.style.fontSize =
        18 + Math.random() * 25 + "px";


    heart.style.pointerEvents =
        "none";


    heart.style.zIndex =
        "99999";


    heart.style.transition =
        "transform 4s linear, opacity 4s linear";


    document.body.appendChild(heart);


    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(${window.innerHeight + 100}px)
             rotate(${Math.random() * 720}deg)`;


        heart.style.opacity =
            "0";

    });


    setTimeout(() => {

        heart.remove();

    }, 4500);

}



/* =====================================================
   ENDING
===================================================== */

if (ending) {

    ending.innerHTML = `

        <div class="card">

            <div
                style="
                    font-size:120px;
                    animation:beat 1s infinite;
                "
            >
                ❤️
            </div>


            <h1>
                Thank You ❤️
            </h1>


            <h2>
                Halima Alhaji Saleh
            </h2>


            <p>

                Thank you for visiting
                this little world I created.

                <br><br>

                I hope it made you smile.

                <br><br>

                Maybe this isn't the end...

                <br><br>

                Maybe it's just the beginning.

                <br><br>

                🌹

                <br><br>

                With love,

                <br>

                <b>
                    Al-Ameen Umar
                </b>

            </p>


            <br>


            <button id="restartBtn">
                Back To The Beginning 🌹
            </button>

        </div>

    `;

}



/* =====================================================
   RESTART
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "restartBtn") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});



/* =====================================================
   KEYBOARD LIGHTBOX CLOSE
===================================================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        lightbox
    ) {

        lightbox.style.display = "none";

    }

});



/* =====================================================
   PAGE READY
===================================================== */

console.log(
    "❤️ Love For Halima loaded successfully."
);

console.log(
    "Made by Al-Ameen Umar (ANSIT)"
);