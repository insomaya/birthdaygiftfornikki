// PART  0: IDENTITY VERIFICATION
async function startGame() {
    let nameVerified = false;
    while (!nameVerified) {
        let nameInput = prompt("Identity Verification\nPlease enter your full name:");
        if (nameInput === null) return;

        if (nameInput.trim().toLowerCase() === "nikita riznyk") {
            nameVerified = true;
            alert("Identity Confirmed: Welcome, Nikita.");
        } else {
            alert("User not recognized. Access Denied.");
        }
    }

    // PART  1: THE COORDINATES
    let accessGranted = false;
    let attempts = 0;
    while (!accessGranted) {
        let password = prompt("Attempt " + (attempts + 1) + ": Please enter the secret coordinates to proceed:");
        if (password === null) return;

        if (password.includes("53.38079") || password.includes("53.38081")) {
            accessGranted = true;
        } else {
            attempts++;
            if (attempts >= 5) {
                alert("Multiple security breaches detected.\nMessage your girlfriend for help.");
            } else if (attempts >= 3) {
                let wantHint = confirm("Having trouble? Would you like a hint?");
                if (wantHint) {
                    let hintAnswer = prompt("Hint: At what event did we meet?");
                    if (hintAnswer && (hintAnswer.toLowerCase().includes("poptarts") || hintAnswer.toLowerCase().includes("uni"))) {
                        alert("Close! Think... 'Coordinates'.");
                    }
                }
            } else {
                alert("Incorrect coordinates. Try again.");
            }
        }
    }

    alert("Location Match: Found. ❤️");

    // PART 2: THE OPENING
    const intro = [
        "Hi my love.", "I hope you are well.", "I've thought a lot about what to get you...",
        "So... instead of buying you something...", "I built you something.",
        "Anyways, here's your birthday present.", "(Turn your volume up! 🔊)"
    ];
    for (let s of intro) alert(s);

    // PART 3: THE AUDIO & PHOTO
    // Start music
    let audio = new Audio('dreams_tonite_recording.wav');
    audio.play();

    document.body.innerHTML = `
        <div style="text-align:center; padding-top:50px; font-family: sans-serif;">
            <img src="birthdayphoto.jpeg" style="width:300px; border-radius:15px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
            <h2>Now Playing: Dreams Tonite</h2>
            <p id="lyric-display" style="font-style: italic; font-size: 1.2em; color: #555;">🎶 ...</p>
        </div>
    `;

    const lyrics = [
        "🎶 Rode here on the bus...", "🎶 Now you're one of us...", "🎶 It was magic hour.",
        "🎶 Counting motorbikes...", "🎶 On the turnpike...", "🎶 One of Eisenhower's.",
        "🎶 Live your life on a merry-go-round...", "🎶 Who starts a fire just to let it go out?",
        "🎶 If I saw you on the street...", "🎶 Would I have you in my dreams tonight?",
        "🎶 If I saw you on the street...", "🎶 Would I have you in my dreams tonight? Tonight."
    ];

    for (let lyric of lyrics) {
        document.getElementById('lyric-display').innerText = lyric;
        alert(lyric);
    }

    // PART 4-6: LOVE AND FRIENDS
    const messages = [
        "I hope you loved it as much as I love you.", "By the way, if you couldn't tell...",
        "I recorded that music!", "I spent a few days learning it on the guitar.",
        "Then I recorded a few chords on an electric piano.", "And then designed a drum beat on music software.",
        "Added it all together and we have this (kind of) masterpiece.",
        "But for you, I would do anything.", "You make me a smarter woman.",
        "You make me better in every way imaginable.",
        "--- MESSAGES FROM FRIENDS ---",
        "Finlay: You have been one of my closest friends at uni...",
        "Kieren: Happy Birthday Nikki, finally 21 at long last!",
        "Lucas: Happy birthday bro! Full decade of friendship!",
        "Jobie: Happy birthday bro! Experience San Andreas soon!",
        "Ted: Welcome to the big 21!",
        "Matt: We are still twats!",
        "Happy Birthday Nikita, I love you! ❤️"
    ];

    for (let m of messages) alert(m);
}

// Start the game when the page loads
window.onload = startGame;