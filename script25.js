const generateMemeBtn = document.querySelector("..meme-generator .generate-meme-btn");

const MemeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");


const updateDetails = () => {
    MemeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
    fetch("")
    .then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
