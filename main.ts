import kaboom, { PosComp } from "kaboom"
import "kaboom/global"
// Importing create file method from package

function random_choice(array: Array<any>): any {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
// initialize context
const SCREEN_WIDTH = 1525;
const SCREEN_HEIGHT = 700;
kaboom({
    // width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT,
});

setBackground(BLACK);
const w = width() / SCREEN_WIDTH;
const h = height() / SCREEN_HEIGHT;
camScale(new Vec2(Math.min(h, w),Math.min(h, w)));
camPos(width() / 2, height() / 2);

function posify(x: number, y: number) {
    // return pos(x,y)
    return pos(x + ((width() - SCREEN_WIDTH) / 2), y + ((height() - SCREEN_HEIGHT) / 2))
}

function copyright() {
    return add([
        posify(SCREEN_WIDTH - 30, SCREEN_HEIGHT - 15),
        text("Developed by: Shanvanth Arunmozhi", {
            size: 16,
            // font: "sans-serif",
        }),
        anchor("botright"),
    ]);
}

loadSound("open_texts 0", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/open_texts/0.mp3")
loadSound("open_texts 1", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/open_texts/1.mp3")
loadSound("open_texts 2", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/open_texts/2.mp3")
loadSound("open_texts 3", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/open_texts/3.mp3")
loadSound("open_texts 4", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/open_texts/4.mp3")
loadSound("spkeasy_texts 0", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/spkeasy_texts/0.mp3")
loadSound("spkeasy_texts 1", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/spkeasy_texts/1.mp3")
loadSound("spkeasy_texts 2", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/spkeasy_texts/2.mp3")
loadSound("spkeasy_texts 3", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/spkeasy_texts/3.mp3")
loadSound("spkeasy_texts 4", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/spkeasy_texts/4.mp3")
loadSound("wrong_texts 0", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/wrong_texts/0.mp3")
loadSound("wrong_texts 1", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/wrong_texts/1.mp3")
loadSound("wrong_texts 2", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/wrong_texts/2.mp3")
loadSound("wrong_texts 3", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/wrong_texts/3.mp3")
loadSound("wrong_texts 4", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/wrong_texts/4.mp3")
loadSound("right_texts 0", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/right_texts/0.mp3")
loadSound("right_texts 1", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/right_texts/1.mp3")
loadSound("right_texts 2", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/right_texts/2.mp3")
loadSound("right_texts 3", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/right_texts/3.mp3")
loadSound("right_texts 4", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sounds/tts/right_texts/4.mp3")

// load assets
loadSprite("man1", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/man1.png")
loadSprite("man2", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/man2.png")
loadSprite("chat", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/chat.png")
loadSprite("bubble", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/bubble.png")

loadSprite("lvl1", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/lvl1.jpg")
loadSprite("lvl2", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/lvl2.jpg")
loadSprite("lvl3", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/lvl3.jpeg")
loadSprite("lvl4", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/lvl4.png")
loadSprite("lvl5", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/lvl5.png")
loadSprite("lvl6", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/lvl6.png")




loadSprite("club", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/backgrounds/club.jpg")
loadSprite("storefront", "https://raw.githubusercontent.com/Ninjago77/speakeasysecrets/main/sprites/backgrounds/storefront.jpg")
const open_texts = [
    ["Good evening, friend! Welcome to our quaint little spot. What brings you around these parts?", "open_texts 0"],
    ["Howdy! Looking for a good time? You're in the right place. Mind your step, though, and keep your voice down.", "open_texts 1"],
    ["Well, look who's here! The joint's hopping tonight. Enjoy yourself, but remember, discretion's the key.", "open_texts 2"],
    ["Hey there, stranger! You've stumbled upon the right place for a good drink and a great time. Watch your step as you come in.", "open_texts 3"],
    ["Evening, pal! This here's a cozy spot for the discerning few. What'll it be for you tonight?", "open_texts 4"],
]
const spkeasy_texts = [
    ["A speakeasy? Oh, no, no, no! You must have gotten some wild ideas. This is just a humble café, nothing more.", "spkeasy_texts 0"],
    ["I'm sorry, buddy, but you got the wrong idea. This place? Just a regular ol' hangout, nothing clandestine about it.", "spkeasy_texts 1"],
    ["Hush now! Don't go spreading rumors about speakeasies. This is a friendly joint, no secret passwords here.", "spkeasy_texts 2"],
    ["Secret what? Nah, nah, you're barking up the wrong tree. This is a legit place, nothing covert about it.", "spkeasy_texts 3"],
    ["Speakeasy? Oh, you've been listening to too many stories, friend. This is a simple café, good food, good drink, that's all.", "spkeasy_texts 4"],
]
const wrong_texts = [
    ["I'm afraid I didn't catch that phrase. You sure you got the right code?", "wrong_texts 0"],
    ["Hmm, that wasn't quite it. Maybe give it another shot, huh?", "wrong_texts 1"],
    ["Eh, what was that? You speaking in riddles now? Try again, and make it clearer.", "wrong_texts 2"],
    ["Nope, that ain't the phrase we're using tonight. Try something else, partner.", "wrong_texts 3"],
    ["Not quite there, buddy! You sure you're on the right track with that mumbling?", "wrong_texts 4"],
]
const right_texts = [
    ["Ah, now you're talking! Come right this way, the fun's just getting started.", "right_texts 0"],
    ["Bingo! You've cracked the code. Step right through, and enjoy the hidden delights.", "right_texts 1"],
    ["You're in luck! The secret's out for you. Head on in and have a grand old time.", "right_texts 2"],
    ["Well, look at you! You've got the golden ticket. Follow me, and I'll show you the real party.", "right_texts 3"],
    ["That's the ticket! You've unlocked the door to a world of merry-making. Right this way, my friend.", "right_texts 4"],
]

var level = 1;
var time_interval = 0.05;
var blink_time = 0.5;



scene("scene1", () => {
    camScale(new Vec2(Math.min(h, w),Math.min(h, w)));
    camPos(width() / 2, height() / 2);
    f = true;
    var bouncerTEXT = "";
    var typeTEXT = "";
    var pipe_on = true;
    function pass1(user: string): boolean {
        // your code here
        return user.includes("1919"); // just an example
    }

    function pass2(user: string): boolean {
        // your code here
        return user.includes("billy") || user.includes("bishop"); // just an example
    }

    function pass3(user: string): boolean {
        // your code here
        return user.includes("byng") || user.includes("julian"); // just an example
    }

    function pass4(user: string): boolean {
        // your code here
        return user.includes("swiss") || user.includes("switzerland") || user.includes("swiserland") || user.includes("switerland") || user.includes("switserland") || user.includes("svitzerland") || user.includes("svitserland"); // just an example
    }

    function pass5(user: string): boolean {
        // your code here
        return (user.includes("league") || user.includes("legue") || user.includes("lague")) && user.includes("nation"); // just an example
    }

    function pass6(user: string): boolean {
        // your code here
        return (user.includes("depression") || user.includes("depresion") || user.includes("deppression") || user.includes("deppresion")) && user.includes("great"); // just an example
    }

    const store = add([
        sprite("storefront"),
        anchor("center"),
        posify(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2),
        // scale(1525 / 600, 700 / 422),
        scale(700 / 1152),
        area(),
    ]);
    const club = add([
        sprite("club"),
        anchor("center"),
        posify(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2),
        // scale(1525 / 600, 700 / 422),
        scale(700 / 422),
        area(),
    ]);
    function background_switch() {
        club.hidden = !club.hidden;
    }
    background_switch();

    add([
        posify(1400, (SCREEN_HEIGHT / 2) - 25),
        text("Level " + level.toString() + " | Hint:", {
            size: 24,
            font: "sans-serif",
        }),
        anchor("top"),
    ]);
    const nextlevel = add([
        rect(145, 40),
        posify(125, SCREEN_HEIGHT - 150),
        area(),
        color(WHITE),
        anchor("center"),
    ],);
    add([
        posify(125, SCREEN_HEIGHT - 150),
        text("Next Level!", {
            size: 24,
            font: "sans-serif",
        }),
        color(BLACK),
        anchor("center"),
    ]);
    nextlevel.hidden = true;
    nextlevel.onClick(() => {
        level += 1;
        go("scene1")
    })

    if (level === 1) {
        add([
            sprite("lvl1"),
            anchor("top"),
            posify(1400, SCREEN_HEIGHT / 2),
            area(),
            scale(200 / 730, 300 / 1080),
        ]);
    }
    if (level === 2) {
        add([
            sprite("lvl2"),
            anchor("top"),
            posify(1400, SCREEN_HEIGHT / 2),
            area(),
            scale(200 / 756, 300 / 1200),
        ]);
    }

    if (level === 3) {
        add([
            sprite("lvl3"),
            anchor("top"),
            posify(1400, SCREEN_HEIGHT / 2),
            scale(200 / 695, 300 / 856),
        ]);
    }

    if (level === 4) {
        add([
            sprite("lvl4"),
            anchor("top"),
            posify(1400, SCREEN_HEIGHT / 2),
            scale(200 / 474, 150 / 355),
        ]);
    }

    if (level === 5) {
        add([
            sprite("lvl5"),
            anchor("top"),
            posify(1400, SCREEN_HEIGHT / 2),
            scale(200 / 1024, 200 / 1024),
        ]);
    }

    if (level === 6) {
        add([
            sprite("lvl6"),
            anchor("top"),
            posify(1400, SCREEN_HEIGHT / 2),
            scale(200 / 512, 200 / 512),
        ]);
    }

    if (level === 7) {
        go("game_over");
        add([
            text("   Game Done!\n You finished it!", {
                size: 32,
                font: "serif",
                width: 240,
            }),
            posify(125, (SCREEN_HEIGHT / 2) + 150),
            anchor("top"),
        ])
    }

    add([
        sprite("man1"),
        anchor("center"),
        posify(1150, SCREEN_HEIGHT / 2),
        scale(0.33),
        area(),
    ]);

    add([
        sprite("man2"),
        anchor("center"),
        posify(400, SCREEN_HEIGHT / 2),
        scale(0.33),
        area(),
    ]);
    add([
        sprite("bubble"),
        anchor("top"),
        posify(1390, 5),
        area(),
        scale(250 / 512, 325 / 701),
    ]);
    const bouncer_text = add([
        posify(1390, 145),
        text("", {
            size: 24,
            font: "serif",
            width: 225,
        }),
        anchor("center"),
    ]);
    add([
        sprite("chat"),
        anchor("topleft"),
        posify(5, 5),
        area(),
        scale(250 / 416, 445 / 710),
    ]);
    const inputBox = add([
        text("", {
            size: 28,
            font: "monospace",
            width: 200,
            height: 350,
        }),
        posify(32, 32),
        anchor("topleft"),
    ]);

    add([
        posify(125, SCREEN_HEIGHT - 25),
        text("Backspace: Removes a Letter\nDelete: Clears All\nEnter: Completes your \nMessage", {
            size: 16,
            font: "sans-serif",
        }),
        anchor("bot"),
    ]);

    function ENTER(user: string) {
        console.log(user);
        if (!user) {
            return null;
        } else if (pass1(user) && level === 1) {
            set_bouncer_text(right_texts);
            background_switch();
            nextlevel.hidden = false;
        } else if (pass2(user) && level === 2) {
            set_bouncer_text(right_texts);
            background_switch();
            nextlevel.hidden = false;
        } else if (pass3(user) && level === 3) {
            set_bouncer_text(right_texts);
            background_switch();
            nextlevel.hidden = false;
        } else if (pass4(user) && level === 4) {
            set_bouncer_text(right_texts);
            background_switch();
            nextlevel.hidden = false;
        } else if (pass5(user) && level === 5) {
            set_bouncer_text(right_texts);
            background_switch();
            nextlevel.hidden = false;
        } else if (pass6(user) && level === 6) {
            set_bouncer_text(right_texts);
            background_switch();
            nextlevel.hidden = false;
        } else if ([
            (user.includes("speak") || user.includes("spek")) && (user.includes("easy") || user.includes("esy")),
            user.includes("alcohol"),
            user.includes("liquor"),

        ].some(value => value === true)) {
            set_bouncer_text(spkeasy_texts);
        } else {
            set_bouncer_text(wrong_texts);
        }
    }
    // Handle input events
    onCharInput((key) => {
        // Update the input box text
        if (!(typeTEXT.length >= 143)) {
            typeTEXT += key;
        }
    });
    let i = 0;
    onKeyDown("backspace", () => {
        if (i >= 4) {
            typeTEXT = typeTEXT.slice(0, -1);
            i = 0;
        } else { i++; }
    })
    onKeyPress((key) => {
        // Update the input box text
        // if (key === "backspace") {
        //     typeTEXT = typeTEXT.slice(0, -1);
        // }
        if (key === "delete") {
            typeTEXT = "";
        }
        if (key === "enter") {
            ENTER(typeTEXT.toLowerCase());
            typeTEXT = "";
        }
    })
    copyright()

    onClick(() => {
        console.log(mousePos());
        console.log(SCREEN_WIDTH);
        console.log(SCREEN_HEIGHT);

        // switch_predator();
        // switch_water_speeds();
        // switch_ocean();
        // switch_small_fish_presence();

    })
    onUpdate(() => {
        if (pipe_on) {
            inputBox.text = typeTEXT + "|";
        } else {
            inputBox.text = typeTEXT;
        }
    })
    loop(blink_time, () => {
        pipe_on = !pipe_on;
    });
    function set_bouncer_text(t_list) {
        let t = random_choice(t_list);
        bouncerTEXT = t[0];
        bouncer_text.text = "";
        play(t[1]);
    }
    loop(time_interval, () => {
        if (bouncerTEXT == "") {
            bouncer_text.text = "";
            return null;
        } else if (bouncerTEXT == bouncer_text.text) {
            return null;
        }
        bouncer_text.text += bouncerTEXT[bouncer_text.text.length];

    });
    set_bouncer_text(open_texts);
})
var f = false;
onKeyPress("enter", () => {
    if (f) { return null; }
    go("scene1");

})
add([
    text("CLICK ENTER TO START!", {
        size: 64,
        font: "monospace",
        // width: 240,
    }),
    posify(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2),
    anchor("center"),
])
copyright();
scene("game_over", () => {
    camScale(new Vec2(Math.min(h, w),Math.min(h, w)));
    camPos(width() / 2, height() / 2);
    copyright();

    add([
        text("GAME OVER! YOU WON!", {
            size: 64,
            font: "monospace",
            // width: 240,
        }),
        posify(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2),
        anchor("bot"),
    ])
    onClick(() => {
        addKaboom(mousePos());
    });
})
// add a kaboom on mouse click
