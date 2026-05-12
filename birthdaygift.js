<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Access: Birthday.exe</title>
    <style>
        /* --- JAVA SWING / JOPTIONPANE STYLING --- */
        body {
            background-color: #313335; /* Dark IDE background */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: "Segoe UI", Tahoma, sans-serif;
        }

        #desktop {
            position: relative;
            width: 100%;
            height: 100%;
            background: #008080; /* Classic Teal Desktop */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .swing-modal {
            background: #f0f0f0;
            border: 1px solid #7a7a7a;
            box-shadow: 3px 3px 10px rgba(0,0,0,0.4);
            min-width: 400px;
            max-width: 550px;
            display: none;
            flex-direction: column;
            animation: pop 0.1s linear;
        }

        @keyframes pop { from { transform: scale(0.9); } to { transform: scale(1); } }

        .swing-header {
            background: linear-gradient(to right, #1084d0, #000080);
            color: white;
            padding: 4px 10px;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: default;
        }

        .swing-content {
            padding: 20px;
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .swing-icon {
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 24px;
            border-radius: 50%;
        }

        .icon-info { background: #0078d7; color: white; }
        .icon-error { background: #d10000; color: white; }
        .icon-quest { background: #0078d7; color: white; }

        .swing-body {
            font-size: 13px;
            color: #000;
            flex-grow: 1;
            white-space: pre-line; /* Keeps your \n line breaks */
            line-height: 1.4;
        }

        .swing-footer {
            padding: 15px;
            display: flex;
            justify-content: center;
            gap: 10px;
            background: #f0f0f0;
        }

        input[type="text"] {
            width: 100%;
            margin-top: 10px;
            border: 1px solid #7a7a7a;
            padding: 4px;
            outline: none;
        }

        button {
            padding: 4px 25px;
            background: #e1e1e1;
            border: 1px solid #7a7a7a;
            cursor: pointer;
            font-size: 12px;
        }

        button:hover { background: #d5e1f2; border-color: #0078d7; }
        button:active { background: #b8d1f3; }

        #lyric-img {
            max-width: 120px;
            display: none;
            margin-bottom: 10px;
            border: 1px solid #999;
        }
    </style>
</head>
<body>

<div id="desktop">
    <div id="modal" class="swing-modal">
        <div class="swing-header">
            <span id="m-title">Message</span>
            <span style="font-size: 16px;">×</span>
        </div>
        <div class="swing-content">
            <div id="m-icon" class="swing-icon icon-info">i</div>
            <div class="swing-body">
                <img id="lyric-img" src="birthdayphoto.jpeg">
                <div id="m-text"></div>
                <input type="text" id="m-input" style="display:none;">
            </div>
        </div>
        <div class="swing-footer" id="m-footer">
            <button id="ok-btn" onclick="handleOk()">OK</button>
            <button id="no-btn" style="display:none;" onclick="handleNo()">No</button>
            <button id="yes-btn" style="display:none;" onclick="handleOk()">Yes</button>
        </div>
    </div>
</div>

<audio id="audio" src="dreams_tonite_recording.wav"></audio>

<script>
    const modal = document.getElementById('modal');
    const mTitle = document.getElementById('m-title');
    const mText = document.getElementById('m-text');
    const mInput = document.getElementById('m-input');
    const mIcon = document.getElementById('m-icon');
    const mImg = document.getElementById('lyric-img');
    const audio = document.getElementById('audio');
    
    // Footer buttons
    const okBtn = document.getElementById('ok-btn');
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');

    let currentStep = 'NAME_INPUT';
    let attempts = 0;
    let resolvePromise;

    // Start
    window.onload = () => runProgram();

    async function runProgram() {
        // --- CHAPTER 0: IDENTITY ---
        let verified = false;
        while (!verified) {
            let name = await showPrompt("Identity Verification", "Please enter your full name:", "quest");
            if (name === null) return;
            if (name.trim().toLowerCase() === "nikita riznyk") {
                verified = true;
                await showAlert("Access Granted", "Identity Confirmed: Welcome, Nikita.", "info");
            } else {
                await showAlert("ERROR", "User not recognized. Access Denied.", "error");
            }
        }

        // --- CHAPTER 1: COORDINATES ---
        let access = false;
        const title = "System Access: Birthday.exe";
        while (!access) {
            let pass = await showPrompt("Security Check", "Attempt " + (attempts + 1) + ": Please enter the secret coordinates to proceed :", "quest");
            if (pass === null) return;

            if (pass === "53.38079929388395, -1.487514786551031" || pass === "53.38081, -1.48744") {
                access = true;
            } else {
                attempts++;
                if (attempts >= 5) {
                    await showAlert("SYSTEM LOCK", "Multiple security breaches detected.\nMessage your girlfriend for help.", "error");
                } else if (attempts >= 3) {
                    let wantHint = await showConfirm("System Hint", "Having trouble? Would you like a hint?");
                    if (wantHint) {
                        let hintAns = await showPrompt("System Hint", "Hint: At what event did we meet?", "quest");
                        if (hintAns && (hintAns.toLowerCase().includes("poptarts") || hintAns.toLowerCase().includes("uni"))) {
                            await showAlert("Message", "Close! Think... 'Coordinates'.", "info");
                        }
                    }
                } else {
                    await showAlert("Message", "Incorrect coordinates. Try again.", "info");
                }
            }
        }

        await showAlert(title, "Location Match: Found. ❤️", "info");

        // --- CHAPTER 2: OPENING ---
        const intro = [
            "Hi my love.", "I hope you are well.", "I've thought a lot about what to get you...",
            "So... instead of buying you something...", "I built you something.",
            "Anyways, here's your birthday present.", "(Turn your volume up! 🔊)"
        ];
        for (let s of intro) await showAlert("For You", s, "info");

        // --- CHAPTER 3: MUSIC & LYRICS ---
        audio.play();
        mImg.style.display = "block";
        const lyrics = [
            "🎶 Rode here on the bus...", "🎶 Now you're one of us...", "🎶 It was magic hour.",
            "🎶 Counting motorbikes...", "🎶 On the turnpike...", "🎶 One of Eisenhower's.",
            "🎶 Live your life on a merry-go-round...", "🎶 Who starts a fire just to let it go out?",
            "🎶 If I saw you on the street...", "🎶 Would I have you in my dreams tonight?",
            "🎶 If I saw you on the street...", "🎶 Would I have you in my dreams tonight? Tonight."
        ];
        for (let l of lyrics) await showAlert("Now Playing: Dreams Tonite", l, "info");
        mImg.style.display = "none";

        // --- CHAPTER 4: REVEAL ---
        const reveal = [
            "I hope you loved it as much as I love you.", "By the way, if you couldn't tell...",
            "I recorded that music!", "I spent a few days learning it on the guitar.",
            "Then I recorded a few chords on an electric piano.", "And then designed a drum beat on music software.",
            "Added it all together and we have this (kind of) masterpiece.",
            "I have to say, creating the code was a lot easier than learning the music!",
            "But for you, I would do anything.", "You make me a smarter woman.",
            "You make me more creative.", "You make me better in every way imaginable."
        ];
        for (let s of reveal) await showAlert(title, s, "info");

        // --- CHAPTER 5: FRIENDS ---
        const friendsIntro = [
            "You are a wonderful son, a loyal brother, and an incredible boyfriend.",
            "But you are also the kind of friend people are lucky to find once in a lifetime.",
            "I reached out to the people who know you best...",
            "...and here is what your friends have to say to you:"
        ];
        for (let s of friendsIntro) await showAlert("The People Who Love You", s, "info");

        const quotes = [
            "\"Finlay: From our first meeting outside the IC until now,\nyou have been one of my closest friends at uni, one you can talk to\nabout literally anything. Happy birthday mate.\"",
            "\"Kieren: Happy Birthday Nikki, finally 21 at long last.\nThree years of friendship have gone by fast.\nI lucked out sitting next to you. Happy birthday!\"",
            "\"Lucas: Happy birthday bro! Have a smashing day!\nIt has been a full decade of friendship!\"",
            "\"Jobie: Happy birthday bro! I hope you experience San Andreas\nand Cyberpunk in the near future!\"",
            "\"Ted: Happy birthday Nikki, welcome to the big 21!\nI'm sure we'll have many adventures for years to come!\"",
            "\"Matt: I will always remember the twats podcast idea.\nThat might not have taken off but we are still twats!\""
        ];
        for (let q of quotes) await showAlert("Friendship ❤️", q, "info");

        // --- CHAPTER 6: SIGN OFF ---
        await showAlert(title, "See? Everyone agrees.", "info");
        await showAlert(title, "You don't even have to try; you just are who you are", "info");
        await showAlert(title, "and that is enough to change my whole world.", "info");
        await showAlert(title, "Happy Birthday Nikita, I love you! ❤️", "info");
        
        mText.innerText = "System Exited.";
        mFooter.style.display = "none";
    }

    // Modal UI Controllers
    function showAlert(title, text, type) {
        setupModal(title, text, type, false, false);
        return new Promise(res => resolvePromise = res);
    }

    function showPrompt(title, text, type) {
        setupModal(title, text, type, true, false);
        return new Promise(res => resolvePromise = res);
    }

    function showConfirm(title, text) {
        setupModal(title, text, "quest", false, true);
        return new Promise(res => resolvePromise = res);
    }

    function setupModal(title, text, type, input, confirm) {
        modal.style.display = 'flex';
        mTitle.innerText = title;
        mText.innerText = text;
        mInput.style.display = input ? 'block' : 'none';
        mInput.value = '';
        okBtn.style.display = confirm ? 'none' : 'block';
        yesBtn.style.display = confirm ? 'block' : 'none';
        noBtn.style.display = confirm ? 'block' : 'none';
        
        if(type === 'info') { mIcon.innerText = 'i'; mIcon.className = 'swing-icon icon-info'; }
        if(type === 'error') { mIcon.innerText = 'X'; mIcon.className = 'swing-icon icon-error'; }
        if(type === 'quest') { mIcon.innerText = '?'; mIcon.className = 'swing-icon icon-quest'; }
        if(input) mInput.focus();
    }

    function handleOk() {
        modal.style.display = 'none';
        let val = mInput.style.display === 'block' ? mInput.value : true;
        resolvePromise(val);
    }

    function handleNo() {
        modal.style.display = 'none';
        resolvePromise(false);
    }
</script>
</body>
</html>
