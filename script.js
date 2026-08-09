/* =======================================
   LOVE FOR HALIMA V3
   Part 1 - Core
======================================= */

"use strict";

// ---------- Elements ----------
const loader = document.getElementById("loader");
const startExperience = document.getElementById("startExperience");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const hero = document.getElementById("hero");
const story = document.getElementById("story");
const hearts = document.getElementById("hearts");

// ---------- Music ----------
let musicPlaying = false;

function playMusic() {
    if (!music) return;

    music.play().then(() => {
        musicPlaying = true;

        if (musicBtn) {
            musicBtn.textContent = "⏸️";
        }

    }).catch(() => {});
}

function toggleMusic() {

    if (!music) return;

    if (musicPlaying) {

        music.pause();
        musicPlaying = false;

        if (musicBtn) {
            musicBtn.textContent = "🎵";
        }

    } else {

        playMusic();

    }
}

if (musicBtn) {
    musicBtn.addEventListener("click", toggleMusic);
}

// ---------- Loader ----------
if (startExperience) {

    startExperience.addEventListener("click", () => {

        playMusic();

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    });

}

// ---------- Hero ----------
if (hero) {

    hero.innerHTML = `
    <div class="card">

        <h3>Made With ❤️</h3>

        <h1>For<br>Halima Alhaji Saleh</h1>

        <p id="typing"></p>

        <br>

        <button id="beginStory">
            Begin Our Journey ❤️
        </button>

    </div>
    `;

}

// ---------- Typewriter ----------
const message = `Hello Halima ❤️

I built this little website especially for you.

Every click reveals another piece of my heart.

I hope it makes you smile.

— Al-Ameen Umar`;

function typeWriter() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    typing.innerHTML = "";

    let index = 0;

    function write() {

        if (index >= message.length) {
            return;
        }

        if (message[index] === "\n") {
            typing.innerHTML += "<br>";
        } else {
            typing.innerHTML += message[index];
        }

        index++;

        setTimeout(write, 40);
    }

    write();
}

typeWriter();

// ---------- Story ----------
if (story) {

    story.innerHTML = `
    <div class="card">

        <h2>🌹 Our Story</h2>

        <p>

        Every beautiful story begins with one hello.

        Thank you for taking the time to visit this little surprise.

        I hope every page makes you smile.

        ❤️

        </p>

    </div>
    `;

}

// ---------- Begin Button ----------
document.addEventListener("click", (e) => {

    if (e.target.id === "beginStory") {

        story.scrollIntoView({
            behavior: "smooth"
        });

    }

});

// ---------- Floating Hearts ----------
function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.opacity = Math.random();

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

setInterval(createHeart, 300);

// ---------- Sparkles ----------
function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    star.style.pointerEvents = "none";

    star.style.fontSize = "18px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);

}

setInterval(sparkle, 700);


/* =======================================
   LOVE FOR HALIMA V3
   Part 2 - Letter, Gallery & Lightbox
======================================= */

// ---------- Love Letter ----------
const letterSection =
    document.getElementById("letter");

if (letterSection) {

    letterSection.innerHTML = `
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
                Continue ❤️
            </button>

        </div>

    </div>
    `;

    const envelope =
        document.getElementById("envelope");

    const letterText =
        document.getElementById("letterText");

    const letterMessage = `Dear Halima,

Thank you for taking the time to visit this little website.

Every page here was made with sincerity.

Not because expensive gifts matter...

but because time, effort, and genuine feelings are gifts too.

I hope this website always reminds you that you are appreciated.

❤️

With respect,

Al-Ameen Umar`;

    envelope.addEventListener("click", () => {

        envelope.style.display = "none";

        document.getElementById("letterBox")
            .style.display = "block";

        let i = 0;

        function type() {

            if (i >= letterMessage.length) {
                return;
            }

            if (letterMessage[i] === "\n") {
                letterText.innerHTML += "<br>";
            } else {
                letterText.innerHTML +=
                    letterMessage[i];
            }

            i++;

            setTimeout(type, 30);
        }

        type();

    });

}

// ---------- Gallery ----------
const gallery =
    document.getElementById("gallery");

if (gallery) {

    gallery.innerHTML = `
    <h2 class="gallery-title">
        📸 Our Gallery
    </h2>

    <p class="gallery-subtitle">

        🌹 A love that grows every day.<br>

        🌙 Every night reminds me of you.<br>

        💖 Small moments, lasting memories.<br>

        ✨ Every journey starts with one hello.

    </p>

    <div class="gallery">

    ${[1,2,3,4,5,6,7,8,9,10].map(n => `

        <div class="card">

            <img
                src="assets/images/Love${n}.${n === 4 ? "png" : "jpg"}"
                alt="Love ${n}"
            >

            <div class="overlay">
                Memory ${n} ❤️
            </div>

        </div>

    `).join("")}

    </div>

    <br><br>

    <button id="reasonBtn">
        Continue ❤️
    </button>
    `;

}

// ---------- Continue ----------
document.addEventListener("click", (e) => {

    if (e.target.id === "galleryBtn") {

        document.getElementById("gallery")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

    if (e.target.id === "reasonBtn") {

        document.getElementById("reasons")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

});

// ---------- Lightbox ----------
const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const close =
    document.getElementById("close");

document.addEventListener("click", (e) => {

    if (e.target.matches(".gallery img")) {

        lightbox.style.display = "flex";

        lightboxImg.src = e.target.src;

    }

});

if (close) {

    close.onclick = () => {
        lightbox.style.display = "none";
    };

}

if (lightbox) {

    lightbox.onclick = (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    };

}


/* =======================================
   LOVE FOR HALIMA V3
   Part 3 - Reasons, Surprise & Love Game
======================================= */

// ---------- Reasons ----------
const reasons =
    document.getElementById("reasons");

if (reasons) {

    reasons.innerHTML = `
    <div class="card">

        <h2>💖 Things I Admire About You</h2>

        <p>

        🌹 Your beautiful smile.<br><br>

        🌹 Your kindness.<br><br>

        🌹 Your confidence.<br><br>

        🌹 The happiness you bring.<br><br>

        🌹 The amazing person you are.

        </p>

        <br>

        <button id="surpriseBtn">
            One More Surprise 🎁
        </button>

    </div>
    `;

}

// ---------- Surprise ----------
const surprise =
    document.getElementById("surprise");

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

            <h2>Dear Halima ❤️</h2>

            <p>

            Thank you for taking this journey with me.

            Whether this becomes the beginning of something beautiful...

            or simply a memory that makes you smile...

            I'm grateful our paths crossed.

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

// ---------- Gift ----------
document.addEventListener("click", (e) => {

    if (e.target.id === "surpriseBtn") {

        document.getElementById("surprise")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

    if (e.target.id === "giftBox") {

        e.target.style.display = "none";

        document.getElementById("giftMessage")
            .style.display = "block";

    }

    if (e.target.id === "loveGameBtn") {

        document.getElementById("question")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

});

// ---------- Love Game ----------
const question =
    document.getElementById("question");

if (question) {

    question.innerHTML = `

    <div class="card">

        <h2>🥺 One Tiny Question...</h2>

        <h1>Do you love me? ❤️</h1>

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

// ---------- Run Away Button ----------
document.addEventListener("mousemove", (e) => {

    const no =
        document.getElementById("noBtn");

    const yes =
        document.getElementById("yesBtn");

    const answer =
        document.getElementById("answer");

    const area =
        document.getElementById("buttons");

    if (!no || !yes || !area) return;

    const rect =
        no.getBoundingClientRect();

    const dx =
        e.clientX -
        (rect.left + rect.width / 2);

    const dy =
        e.clientY -
        (rect.top + rect.height / 2);

    const distance =
        Math.sqrt(dx * dx + dy * dy);

    if (distance < 60) {

        const maxX =
            area.clientWidth -
            no.offsetWidth;

        const maxY =
            area.clientHeight -
            no.offsetHeight;

        no.style.left =
            Math.random() * maxX + "px";

        no.style.top =
            Math.random() * maxY + "px";

        const scale =
            Math.min(
                2.2,
                parseFloat(
                    yes.dataset.scale || 1
                ) + 0.1
            );

        yes.dataset.scale = scale;

        yes.style.transform =
            `scale(${scale})`;

        const replies = [
            "🥺 Are you sure?",
            "😂 Nice try!",
            "❤️ Click YES instead!",
            "🌹 Nope!",
            "😜 I'm too fast!"
        ];

        answer.innerHTML =
            replies[
                Math.floor(
                    Math.random() *
                    replies.length
                )
            ];

    }

});

// ---------- YES ----------
document.addEventListener("click", (e) => {

    if (e.target.id === "yesBtn") {

        heartConfetti();

        document.getElementById("ending")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

});

// ---------- Heart Confetti ----------
function heartConfetti() {

    for (let i = 0; i < 120; i++) {

        setTimeout(createHeart, i * 30);

    }

}

// ---------- Ending ----------
const ending =
    document.getElementById("ending");

if (ending) {

    ending.innerHTML = `

    <div class="card">

        <div style="
            font-size:120px;
            animation:beat 1s infinite;
        ">

            ❤️

        </div>

        <h1>Thank You ❤️</h1>

        <h2>
            Halima Alhaji Saleh
        </h2>

        <p>

        Thank you for visiting this little world
        I created.

        I hope it made you smile.

        Maybe this isn't the end...

        Maybe it's just the beginning.

        🌹

        <br><br>

        Love,

        <b>Al-Ameen Umar</b>

        </p>

        <br>

        <button id="restartBtn">
            Back To The Beginning 🌹
        </button>

    </div>

    `;

}

// ---------- Restart ----------
document.addEventListener("click", (e) => {

    if (e.target.id === "restartBtn") {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});