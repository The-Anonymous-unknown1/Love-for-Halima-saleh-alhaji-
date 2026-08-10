/* =====================================================
   ❤️ LOVE FOR HALIMA
   Premium Romantic Website
   script.js
===================================================== */

"use strict";

/* =====================================================
   BASIC ELEMENTS
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


/* =====================================================
   LOADING SCREEN
===================================================== */

if (startExperience) {

    startExperience.addEventListener("click", () => {

        playMusic();

        if (!loader) return;

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    });

}


/* =====================================================
   HERO
===================================================== */

if (hero) {

    hero.innerHTML = `

        <div class="card">

            <h3>MADE WITH ❤️</h3>

            <h1>
                For<br>
                Fayrouz 
            </h1>

            <p id="typing"></p>

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

const heroMessage = `Hello Fatima ❤️

I created this little website especially for you.

Every click reveals another little piece of my heart.

I hope it brings a beautiful smile to your face.

— Al-Ameen Umar`;


function typeHeroMessage() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    let index = 0;

    typing.innerHTML = "";

    function write() {

        if (index >= heroMessage.length) {
            return;
        }

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

typeHeroMessage();


/* =====================================================
   STORY
===================================================== */

if (story) {

    story.innerHTML = `

        <div class="card">

            <h2>🌹 Our Story</h2>

            <p>

                Every beautiful story begins with one simple moment.

                <br><br>

                Sometimes, someone enters your life
                and makes ordinary moments feel a little more special.

                <br><br>

                This website is a small way of creating
                something meaningful for you.

                <br><br>

                ❤️

            </p>

        </div>

    `;

}


/* =====================================================
   HERO → STORY
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
   LOVE LETTER
===================================================== */

if (letter) {

    letter.innerHTML = `

        <div class="card">

            <h2>💌 A Letter For You</h2>

            <div id="envelope">
                📩
            </div>

            <div id="letterBox" style="display:none;">

                <p id="letterText"></p>

                <br>

                <button id="galleryBtn">
                    Our Memories ❤️
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


const loveLetter = `Dear Fayrouz,

Thank you for taking the time to explore this little surprise.

I didn't want to give you something ordinary.

I wanted to create something that would always remind you that someone thought you were worth the time, effort, and creativity.

Every part of this website was made with sincerity.

I hope it brings a smile to your face.

And whenever you see these pages again,
I hope they remind you of a beautiful moment.

❤️

With respect and admiration,

Al-Ameen Umar Scroll to next` ;


if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.style.display = "none";

        if (letterBox) {
            letterBox.style.display = "block";
        }

        if (!letterText) return;

        letterText.innerHTML = "";

        let index = 0;

        function writeLetter() {

            if (index >= loveLetter.length) {
                return;
            }

            if (loveLetter[index] === "\n") {

                letterText.innerHTML += "<br>";

            } else {

                letterText.innerHTML += loveLetter[index];

            }

            index++;

            setTimeout(writeLetter, 30);

        }

        writeLetter();

    });

}


/* =====================================================
   GALLERY
===================================================== */

if (gallery) {

    gallery.innerHTML = `

        <h2 class="gallery-title">
            ❤️ Our Love Gallery ❤️
        </h2>

        <p class="gallery-subtitle">
            Every picture tells another chapter of this beautiful story.
        </p>

        <div class="gallery">

            <div class="card">
                <img src="assets/images/Love1.jpg" alt="Love 1">
                <div class="overlay">
                    🌹 A love that grows every day.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love2.jpg" alt="Love 2">
                <div class="overlay">
                    🌙 Every thing reminds me of you.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love3.jpg" alt="Love 3">
                <div class="overlay">
                    💖 Small moments, lasting memories.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love4.png" alt="Love 4">
                <div class="overlay">
                    ✨ Every journey starts with one hello.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love5.jpg" alt="Love 5">
                <div class="overlay">
                    🌸 Every smile makes a moment brighter.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love6.jpg" alt="Love 6">
                <div class="overlay">
                    💞 Together, every moment becomes special.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love7.jpg" alt="Love 7">
                <div class="overlay">
                    🌹 You are a beautiful chapter.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love8.jpg" alt="Love 8">
                <div class="overlay">
                    ❤️ The best stories are written with the heart.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love9.jpg" alt="Love 9">
                <div class="overlay">
                    💝 Every beautiful moment becomes a memory.
                </div>
            </div>

            <div class="card">
                <img src="assets/images/Love10.png" alt="Love 10">
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


/* =====================================================
   GALLERY NAVIGATION
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "galleryBtn") {

        if (gallery) {

            gallery.scrollIntoView({
                behavior: "smooth"
            });

        }

    }


    if (event.target.id === "reasonBtn") {

        if (reasons) {

            reasons.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

});


/* =====================================================
   LIGHTBOX
===================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeButton = document.getElementById("close");


document.addEventListener("click", (event) => {

    const image = event.target.closest(".gallery img");

    if (!image) return;

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";

    lightboxImg.src = image.src;

});


if (closeButton) {

    closeButton.addEventListener("click", () => {

        if (lightbox) {
            lightbox.style.display = "none";
        }

    });

}


if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


/* =====================================================
   ESCAPE KEY CLOSES LIGHTBOX
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (lightbox) {
            lightbox.style.display = "none";
        }

    }

});


/* =====================================================
   REASONS
===================================================== */

if (reasons) {

    reasons.innerHTML = `

        <div class="card">

            <h2>💖 Things I Admire About You</h2>

            <p>

                🌹 Your beautiful smile.

                <br><br>

                🌹 Your kindness.

                <br><br>

                🌹 Your personality.

                <br><br>

                🌹 The happiness you bring.

                <br><br>

                🌹 The amazing person you are.

            </p>

            <br>

           <button id="surpriseBtn">
             Click For One More Surprise 🎁
           </button>

        </div>

    `;

}


/* =====================================================
   SURPRISE
===================================================== */

if (surprise) {

    surprise.innerHTML = `

        <div class="card">

            <h2>🎁 One Last Surprise</h2>

            <div id="giftBox">
                🎁
            </div>

            <div id="giftMessage" style="display:none;">

                <h2>
                    Dear A Mamman, ❤️
                </h2>

                <p>

                    Thank you for taking this journey
                    through this little world I created.

                    <br><br>

                    It isn't about expensive gifts.

                    <br><br>

                    Sometimes the smallest effort,
                    when it comes from the heart,
                    can mean the most.

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
   SURPRISE NAVIGATION
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id === "surpriseBtn") {

        if (surprise) {

            surprise.scrollIntoView({
                behavior: "smooth"
            });

        }

    }


    if (event.target.id === "giftBox") {

        event.target.style.display = "none";

        const giftMessage =
            document.getElementById("giftMessage");

        if (giftMessage) {
            giftMessage.style.display = "block";
        }

    }


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
             Fayrouz, Do you love me? ❤️
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

let noButtonLevel = 0;

document.addEventListener("mousemove", (event) => {

    const noButton =
        document.getElementById("noBtn");

    const yesButton =
        document.getElementById("yesBtn");

    const buttonArea =
        document.getElementById("buttons");

    const answer =
        document.getElementById("answer");


    if (
        !noButton ||
        !yesButton ||
        !buttonArea
    ) {
        return;
    }


    const rect =
        noButton.getBoundingClientRect();


    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;


    const dx =
        event.clientX - centerX;

    const dy =
        event.clientY - centerY;


    const distance =
        Math.sqrt(dx * dx + dy * dy);


    if (distance < 80) {

        const maxX =
            Math.max(
                0,
                buttonArea.clientWidth -
                noButton.offsetWidth
            );


        const maxY =
            Math.max(
                0,
                buttonArea.clientHeight -
                noButton.offsetHeight
            );


        noButton.style.left =
            Math.random() * maxX + "px";


        noButton.style.top =
            Math.random() * maxY + "px";


        noButtonLevel++;


        const scale =
            Math.min(
                2,
                1 + noButtonLevel * 0.08
            );


        yesButton.style.transform =
            `scale(${scale})`;


        const replies = [

            "🥺 Are you sure?",

            "😂 Nice try!",

            "❤️ Try YES instead!",

            "🌹 You almost got it!",

            "😜 I'm too fast!",

            "🥹 Pleaseeeee...",

            "💖 YES looks better!",

            "🤣 Nope!"

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
   TOUCH SUPPORT FOR NO BUTTON
===================================================== */

document.addEventListener("touchstart", (event) => {

    const noButton =
        document.getElementById("noBtn");

    const buttonArea =
        document.getElementById("buttons");

    if (!noButton || !buttonArea) return;


    if (event.target !== noButton) return;


    const maxX =
        Math.max(
            0,
            buttonArea.clientWidth -
            noButton.offsetWidth
        );


    const maxY =
        Math.max(
            0,
            buttonArea.clientHeight -
            noButton.offsetHeight
        );


    noButton.style.left =
        Math.random() * maxX + "px";


    noButton.style.top =
        Math.random() * maxY + "px";

});


/* =====================================================
   YES BUTTON
===================================================== */

document.addEventListener("click", (event) => {

    if (event.target.id !== "yesBtn") {
        return;
    }


    const answer =
        document.getElementById("answer");


    if (answer) {

        answer.innerHTML = `

            <h2>
                🥰❤️ YAYYYYY!! ❤️🥰
            </h2>

            <p>

                You just made this little
                website even more special.

                <br><br>

                Thank you, FATIMA FAYROUZ.

                ❤️

                <br><br>

                Love,

                <b>Al-Ameen Umar(ANSIT)</b>

            </p>

        `;

    }


    createHeartConfetti();

});


/* =====================================================
   HEART CONFETTI
===================================================== */

function createHeartConfetti() {

    if (!hearts) return;


    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            createHeart(true);

        }, i * 25);

    }

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart(confetti = false) {

    if (!hearts) return;


    const heart =
        document.createElement("div");


    heart.textContent =
        Math.random() > .5
            ? "❤️"
            : "💖";


    heart.style.position =
        "absolute";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.top =
        confetti
            ? Math.random() * 50 + "vh"
            : "100vh";


    heart.style.fontSize =
        (18 + Math.random() * 25) + "px";


    heart.style.opacity =
        .5 + Math.random() * .5;


    heart.style.pointerEvents =
        "none";


    heart.style.transition =
        confetti
            ? "transform 3s ease-out, opacity 3s ease-out"
            : "transform 8s linear, opacity 8s linear";


    hearts.appendChild(heart);


    requestAnimationFrame(() => {

        const x =
            (Math.random() - .5) * 200;


        const y =
            confetti
                ? -(200 + Math.random() * 500)
                : -window.innerHeight - 200;


        heart.style.transform =
            `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;


        heart.style.opacity = "0";

    });


    setTimeout(() => {

        heart.remove();

    }, confetti ? 3500 : 8500);

}


setInterval(() => {

    createHeart(false);

}, 450);


/* =====================================================
   SPARKLES
===================================================== */

function createSparkle() {

    if (!particles) return;


    const sparkle =
        document.createElement("div");


    sparkle.textContent =
        Math.random() > .5
            ? "✨"
            : "⭐";


    sparkle.style.position =
        "fixed";


    sparkle.style.left =
        Math.random() * 100 + "vw";


    sparkle.style.top =
        Math.random() * 100 + "vh";


    sparkle.style.fontSize =
        (10 + Math.random() * 14) + "px";


    sparkle.style.opacity =
        "0.8";


    sparkle.style.pointerEvents =
        "none";


    sparkle.style.animation =
        "fadeIn 1s ease";


    particles.appendChild(sparkle);


    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}


setInterval(createSparkle, 650);


/* =====================================================
   ENDING
===================================================== */

if (ending) {

    ending.innerHTML = `

        <div class="card">

            <div
                class="heart"
                style="font-size:120px;"
            >
                ❤️
            </div>

            <h1>
                Thank You ❤️
            </h1>

            <h2>
                FATIMA ALHAJI MAMMAN (FAYROUZ)
            </h2>

            <p>

                Thank you for visiting
                this little world I created.

                <br><br>

                I hope it made you smile.

                <br><br>

                Maybe this isn't the end...

                <br>

                Maybe it's just the beginning.

                <br><br>

                🌹

                <br><br>

                Love,

                <br>

                <b>Al-Ameen Umar Chekene</b>

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
   PREVENT IMAGE DRAGGING
===================================================== */

document.addEventListener("dragstart", (event) => {

    if (event.target.tagName === "IMG") {

        event.preventDefault();

    }

});


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "❤️ Love For Fayrouz loaded successfully."
);