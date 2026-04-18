const games = {
    1: {
        title: "Elden Ring",
        description: "Встань, погасшая душа, и направь благодать на то, чтобы стать повелителем Элдена...",
        image: "assets/Elden ring.jpg",
        screenshots: [
            "assets/Elden ring.jpg",
            "assets/elden ring2.jpg",
            "assets/Elden ring3.jpg",
        ],
        video: "https://www.youtube.com/watch?v=im0XI1EE_3k" 
    },
    2: {
        title: "Ведьмак",
        description: "Воистину, нет ничего более отвратного, нежели монстры оные, натуре противные, ведьмаками именуемые, ибо суть они плоды мерзопакостного волшебства и диавольства. Это есть мерзавцы без достоинства, совести и чести, истинные исчадия адовы, токмо к убиениям приспособленные. Нет таким, како оне, места меж людьми почтенными",
        image: "assets/ведьмак.jpg",
        screenshots: ["img/scr1.jpg", "img/scr2.jpg"],
        video: "видео_id"
    },
    3: {
        title: "RUST",
        description: "Rust — это многопользовательская игра на выживание. Как и во всех многопользовательских играх, в ней присутствуют игроки. К сожалению для вас, они могут найти вас, убить вас и забрать ваши вещи. К счастью для вас, вы можете убить их и забрать их вещи. Или же вы можете подружиться и помочь друг другу в выживании.",
        image: "assets/RUST.png",
        screenshots: [
            "assets/RUST.png",
            "assets/RUST2.png",
        ],
        video: "E3HuyitfI9g" 
    },
    4: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    5: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    6: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    7: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    8: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    9: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    10: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    11: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    12: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    13: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    14: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    15: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
    16: {
        title: "№",
        description: "№",
        image: "№",
        screenshots: [
            "№",
            "№",
        ],
        video: "№" 
    },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const game = games[id];

if (game) {
    document.getElementById("title").textContent = game.title;
    document.getElementById("description").textContent = game.description;
    document.getElementById("image").src = game.image;
    const screenGrid = document.querySelector(".screen-grid");
    screenGrid.innerHTML = ""; 

    game.screenshots.forEach(src => {
        const item = document.createElement("div");
        item.className = "screen-item";
        item.innerHTML = `<img src="${src}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`;
        screenGrid.appendChild(item);
    });

    if (game.video) {
        const videoContainer = document.getElementById("video-container");
        videoContainer.innerHTML = `
            <h2>Видео</h2>
            <iframe width="100%" height="500" 
                src="https://www.youtube.com/embed/${game.video}" 
                frameborder="0" allowfullscreen style="border-radius:12px;">
            </iframe>`;
    }
}
else {
    document.getElementById("title").textContent = "Игра не найдена";
    document.getElementById("description").textContent = "К сожалению, игра с таким ID не существует.";
}