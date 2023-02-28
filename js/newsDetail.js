let newsUI = document.getElementsByClassName("content-layout")[0];
let idNews = localStorage.getItem("newsDetail")
let content = '';
fetch(`http://127.0.0.1:5001/api/News/${idNews}`)
.then(r => r.json())
.then(res => {
    content += `<h1>${res.title}</h1>`
    content += `<p class="post-footer"><span> ${res.createAt}</span></p>`
    content += `<p class="main-infor-news">${res.description}</p>`
    content +=  `<img class="img-infor-news" src="${res.img}"> `
    content += `<div class="infor-news"> ${res.content} </div>`
    content += `<p class="author">Tác giả: ${res.createBy}</p>`
    newsUI.innerHTML = content
})

let app = document.getElementById("app");
let handleGoToTop = () => {
    window.scrollTo({top:0,behavior:'smooth'})
    console.log("go to top");
}
let isAdd = false;
app.onscroll = () => {
    if(window.scrollY > 500 && !isAdd){
        isAdd = true;let btnToTop = document.createElement("div"
        );
        btnToTop.id = "goToTop";
        btnToTop.style.width = 'auto';
        btnToTop.style.height = 'auto';
        btnToTop.style.color = 'white';
        btnToTop.style.backgroundColor = "#1a7881"
        btnToTop.style.padding = '5px 10px 7px 10px'
        btnToTop.style.position = 'fixed';
        btnToTop.style.bottom = '5%';
        btnToTop.style.right = '5%';
        btnToTop.style.cursor = "pointer"
        btnToTop.innerHTML = `<i class="fa-solid fa-up-to-line"></i>`
        btnToTop.style.borderRadius = "15px"
        btnToTop.style.fontSize = "20px"
        console.log(btnToTop);
        btnToTop.onclick = handleGoToTop
        app.appendChild(btnToTop)
    }
    else if(window.scrollY <=500 && isAdd){
        document.getElementById("goToTop").remove() 
        isAdd = false
    }
}
