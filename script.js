/* =========================================
   LOVE FOR HALIMA
   script.js
   Clean V4
========================================= */

"use strict";

/* =========================================
   ELEMENTS
========================================= */

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


/* =========================================
   MUSIC
========================================= */

let musicPlaying = false;

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

            console.log("Music requires user interaction.");

        });
}


function pauseMusic() {

    if (!music) return;

    music.pause();

    musicPlaying = false;

    if (musicBtn) {
        musicBtn.textContent = "🎵";
    }

}


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


/* =========================================
   LOADING SCREEN
========================================= */

if (startExperience) {

    startExperience.addEventListener("click", () => {

        playMusic();

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }

    });

}


/* =========================================
   HERO
========================================= */

if (hero) {

    hero.innerHTML = `

        <div class="card">

            <h3>Made With ❤️</h3>

            <h1>
                For<br>
                Halima Alhaji Saleh
            </h1>

            <p id="typing"></p>

            <br>

            <button id="beginStory">
                Begin Our Journey ❤️
            </button>

        </div>

    `;

}


/* =========================================
   HERO TYPEWRITER
========================================= */

const heroMessage = `Hello Halima ❤️

I created this little website especially for you.

Every click reveals another little piece of my heart.

I hope it brings a smile to your face.

— Al-Ameen Umar`;

const typing = document.getElementById("typing");

function typeHero() {

    if (!typing) return;

    typing.innerHTML = "";

    let index = 0;

    function write() {

        if (index >= heroMessage.length) return;

        if (heroMessage[index] === "\n") {

            typing.innerHTML += "<br>";

        } else {

            typing.innerHTML += heroMessage[index];

        }

        index++;

        setTimeout(write, 40);

    }

    write();

}

typeHero();


/* =========================================
   STORY
========================================= */

if (story) {

    story.innerHTML = `

        <div class="card">

            <h2>🌹 Our Story</h2>

            <p>

                Every beautiful story begins with a simple hello.

                Sometimes, one person can make ordinary moments
                feel a little more special.

                This website is a small way of saying that I
                appreciate the opportunity to know you.

                ❤️

            </p>

        </div>

    `;

}


/* =========================================
   NAVIGATION
========================================= */

function goTo(id) {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


document.addEventListener("click", (event) => {

    if (event.target.id === "beginStory") {

        goTo("story");

    }

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.textContent = "❤️";

    heart.style.position = "absolute";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        18 + Math.random() * 20 + "px";

    heart.style.opacity =
        0.4 + Math.random() * 0.6;

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

setInterval(createHeart, 500);


/* =========================================
   SPARKLES
========================================= */

function createSparkle() {

    if (!particles) return;

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

    sparkle.style.transition =
        "opacity 2s, transform 2s";

    particles.appendChild(sparkle);

    requestAnimationFrame(() => {

        sparkle.style.opacity = "0";

        sparkle.style.transform =
            "scale(1.8)";

    });

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}

setInterval(createSparkle, 700);


/* =========================================
   LOVE LETTER
========================================= */

if (letter) {

    letter.innerHTML = `

        <div class="card">

            <h2>💌 A Letter For You</h2>

            <div id="envelope"
                 style="font-size:100px;cursor:pointer;">

                📩

            </div>

            <div id="letterBox"
                 style="display:none;">

                <p id="letterText"></p>

                <br>

                <button id="galleryBtn">
                    Our Memories ❤️
                </button>

            </div>

        </div>

    `;

}


const envelope =
    document.getElementById("envelope");

const letterBox =
    document.getElementById("letterBox");

const letterText =
    document.getElementById("letterText");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.style.display = "none";

        if (letterBox) {
            letterBox.style.display = "block";
        }

        if (!letterText) return;

        const letterMessage = `Dear Halima,

Thank you for taking the time to explore this little website.

I didn't want to give you something ordinary.

I wanted to create something that would always remind you that you are appreciated.

Every page was created with sincerity, time, effort, and a little bit of my heart.

I hope it brings a smile to your face.

❤️

With respect and admiration,

Al-Ameen Umar`;

        let index = 0;

        function writeLetter() {

            if (index >= letterMessage.length) return;

            if (letterMessage[index] === "\n") {

                letterText.innerHTML += "<br>";

            } else {

                letterText.innerHTML +=
                    letterMessage[index];

            }

            index++;

            setTimeout(writeLetter, 30);

        }

        writeLetter();

    });

}


/* =========================================
   GALLERY
========================================= */

if (gallery) {

    gallery.innerHTML = `

        <h2 class="gallery-title">
            📸 Our Beautiful Memories
        </h2>

        <p class="gallery-subtitle">

            Every picture tells another chapter
            of this little story. ❤️

        </p>

        <div class="gallery-grid">

            <div class="gallery-card">
                <img src="assets/images/Love1.jpg"
                     alt="Love 1">
                <div class="overlay">
                    🌹 A beautiful beginning.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love2.jpg"
                     alt="Love 2">
                <div class="overlay">
                    🌙 Every moment can become a memory.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love3.jpg"
                     alt="Love 3">
                <div class="overlay">
                    💖 Small moments, lasting memories.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love4.png"
                     alt="Love 4">
                <div class="overlay">
                    ✨ Every journey starts somewhere.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love5.jpg"
                     alt="Love 5">
                <div class="overlay">
                    🌸 Keep smiling.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love6.jpg"
                     alt="Love 6">
                <div class="overlay">
                    💞 Beautiful moments are worth remembering.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love7.jpg"
                     alt="Love 7">
                <div class="overlay">
                    🌹 A favorite chapter.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love8.jpg"
                     alt="Love 8">
                <div class="overlay">
                    ❤️ Written with the heart.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love9.jpg"
                     alt="Love 9">
                <div class="overlay">
                    💝 Another beautiful memory.
                </div>
            </div>

            <div class="gallery-card">
                <img src="assets/images/Love10.png"
                     alt="Love 10">
                <div class="overlay">
                    💍 Maybe this is only the beginning.
                </div>
            </div>

        </div>

        <br><br>

        <button id="reasonBtn">
            Continue ❤️
        </button>

    `;

}


/* =========================================
   GALLERY BUTTON
========================================= */

document.addEventListener("click", (event) => {

    if (event.target.id === "galleryBtn") {

        goTo("gallery");

    }

    if (event.target.id === "reasonBtn") {

        goTo("reasons");

    }

});


/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const closeBtn =
    document.getElementById("close");


document.addEventListener("click", (event) => {

    const image =
        event.target.closest(".gallery img, .gallery-card img");

    if (!image) return;

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";

    lightboxImg.src = image.src;

});


if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}


if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


/* =========================================
   REASONS
========================================= */

if (reasons) {

    reasons.innerHTML = `

        <div class="card">

            <h2>💖 Things I Admire About You</h2>

            <p>

                🌹 Your beautiful smile.

                <br><br>

                🌹 Your kindness.

                <br><br>

                🌹 Your strength.

                <br><br>

                🌹 The way you make moments special.

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


/* =========================================
   SURPRISE
========================================= */

if (surprise) {

    surprise.innerHTML = `

        <div class="card">

            <h2>🎁 One Last Surprise</h2>

            <div id="giftBox"
                 style="font-size:120px;cursor:pointer;">

                🎁

            </div>

            <div id="giftMessage"
                 style="display:none;">

                <h2>
                    ❤️ Dear Halima ❤️
                </h2>

                <p>

                    Thank you for taking this journey
                    through this little website.

                    <br><br>

                    It isn't about expensive gifts.

                    It's about showing that someone is
                    worth time, effort, and creativity.

                    <br><br>

                    I hope this little surprise
                    makes you smile.

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


/* =========================================
   SURPRISE EVENTS
========================================= */

document.addEventListener("click", (event) => {

    if (event.target.id === "surpriseBtn") {

        goTo("surprise");

    }


    if (event.target.id === "giftBox") {

        event.target.style.display = "none";

        const message =
            document.getElementById("giftMessage");

        if (message) {

            message.style.display = "block";

        }

    }


    if (event.target.id === "loveGameBtn") {

        goTo("question");

    }

});


/* =========================================
   LOVE QUESTION
========================================= */

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


/* =========================================
   NO BUTTON
========================================= */

let noMoveCount = 0;

document.addEventListener("mousemove", (event) => {

    const noBtn =
        document.getElementById("noBtn");

    const yesBtn =
        document.getElementById("yesBtn");

    const buttons =
        document.getElementById("buttons");

    const answer =
        document.getElementById("answer");

    if (!noBtn || !yesBtn || !buttons) return;

    const rect =
        noBtn.getBoundingClientRect();

    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;

    const distance =
        Math.sqrt(
            Math.pow(event.clientX - centerX, 2) +
            Math.pow(event.clientY - centerY, 2)
        );

    /* Keep at least 70px away */

    if (distance < 70) {

        const maxX =
            Math.max(
                0,
                buttons.clientWidth - noBtn.offsetWidth
            );

        const maxY =
            Math.max(
                0,
                buttons.clientHeight - noBtn.offsetHeight
            );

        noBtn.style.left =
            Math.random() * maxX + "px";

        noBtn.style.top =
            Math.random() * maxY + "px";

        noMoveCount++;

        const scale =
            Math.min(
                2,
                1 + noMoveCount * 0.08
            );

        yesBtn.style.transform =
            `scale(${scale})`;

        const replies = [

            "🥺 Are you sure?",

            "😢 Think again...",

            "😂 Nice try!",

            "❤️ Try YES instead!",

            "🌹 You almost got it!",

            "😜 I'm faster than you!",

            "🥹 Pleaseeeee..."

        ];

        if (answer) {

            answer.textContent =
                replies[
                    Math.floor(
                        Math.random() * replies.length
                    )
                ];

        }

    }

});


/* =========================================
   YES BUTTON
========================================= */

document.addEventListener("click", (event) => {

    if (event.target.id !== "yesBtn") return;

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

                Love,

                <br>

                <b>Al-Ameen Umar</b>

            </p>

        `;

    }

    heartConfetti();

    setTimeout(() => {

        goTo("ending");

    }, 1800);

});


/* =========================================
   HEART CONFETTI
========================================= */

function heartConfetti() {

    for (let i = 0; i < 50; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 40);

    }

}


/* =========================================
   ENDING
========================================= */

if (ending) {

    ending.innerHTML = `

        <div class="card">

            <div style="
                font-size:120px;
                animation:beat 1s infinite;
            ">
                ❤️
            </div>

            <h1>
                Thank You ❤️
            </h1>

            <h2>
                Halima Alhaji Saleh
            </h2>

            <p>

                Thank you for visiting this
                little world I created.

                <br><br>

                I hope it made you smile.

                <br><br>

                Maybe this isn't the end...

                <br>

                Maybe it's just the beginning.

                🌹

                <br><br>

                Love,

                <br>

                <b>Al-Ameen Umar</b>

            </p>

            <br>

            <button id="restartBtn">
                Back To The Beginning 🌹
            </button>

        </div>

    `;

}


/* =========================================
   RESTART
========================================= */

document.addEventListener("click", (event) => {

    if (event.target.id !== "restartBtn") return;

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   ESCAPE KEY CLOSES LIGHTBOX
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && lightbox) {

        lightbox.style.display = "none";

    }

});


/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener("load", () => {

    console.log(
        "❤️ Love For Halima loaded successfully."
    );

});