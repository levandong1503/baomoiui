let searchValue = localStorage.getItem("search");
let arrFetch = []
let cnt = document.getElementsByClassName("content-layout");
    fetch(`http://127.0.0.1:5001/api/News/search?title=${searchValue}`)
        .then(res => res.json())
        .then(resjson => { arrFetch = resjson; console.log(resjson); })
        .then(() => {
            
               if(arrFetch.length > 0)
                {
                    cnt[0].innerHTML = 
                    `
                        <div style="margin:10px 0px; font-size:20px; font-weight:bolder;">
                            Kết quả tìm kiếm cho "${localStorage.getItem("search")}"
                        </div>
                    `
                    +
                    arrFetch.map((item) => {
                        return (
                            `
                                    <div class="post-article" id="${item.id}" onclick={newsDetail(event)}>
                                        <div class="col-infor-contrainer">
                                            <a class="img-hover-zoom" ><img class="img-col-title-infor img-radius"
                                                    src="${item.img}"
                                                    alt=""></a>
                                        </div>
                                        <div class="post-title">
                                            <a href="#" class="anchor-post-p anchor-post-p-left">${item.title}</a>
                                            <div class="post-footer">
                                                
                                                <span>${item.createAt}</span>
                                                
                                                <i class="fa-thin fa-clock"></i>
                                            </div>
                                        </div>
                                    </div>
                                `
                        )
                    }).join('\n');
                }
                else{
                    cnt[0].innerHTML = `<h1 style="color:#913b3b;  margin:20px">
                    Bài viết bạn tìm kiếm không tồn tại
                    </h1>`
                }
            

            localStorage.setItem('search','')
            console.log(localStorage.getItem('search'));
        })

// let infor = document.createElement("div") ;
// infor.style.margin = "10px 30px"
// infor.innerText =  `Kết quả tìm kiếm cho "${localStorage.getItem("search")}"`
// document.getElementsByTagName("header")[0].appendChild(infor)