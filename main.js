cel_img = document.querySelector("#img");

let index = 1;

function alteraImagem() {   
    if (index === 6) {
        index = 1;
    }
    cel_img.src = "./img/img" + index + ".jpg";
    index++;
}

setInterval(() => {
    alteraImagem();
}, 1500);

