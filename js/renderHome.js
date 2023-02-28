if (document.title == "Home") {



    let headCnt = document.getElementsByClassName("big-cnt-pe")[0];
    let colRight = document.getElementsByClassName("col-right")[0];
    let listCnt = document.getElementsByClassName("manage-cate")[0];
    let mainBigCnt = ""
    let idMainBigCnt = 0;
    
    fetch("http://127.0.0.1:5001/api/News/home")
        .then((res) => res.json())
        .then((resjson) => {
            let arrBightml = resjson.hotnews.map((item, index) => {
                if (index == 0) {
                    idMainBigCnt = item.id
                    mainBigCnt = `
                                    

                                        <div onclick="newsDetail(event)" id="${item.id}" class="img-hover-zoom">
                                            <a href="#"  value="./newsDetail">
                                                <img src="${item.img}"
                                                    alt="">
                                            </a>
                                        </div>
                                        <a href="#" value="" class="text-hover">${item.title}</a>
                                        <div class="post-footer">
                                            
                                            <span>${item.createAt}</span>
                                            
                                        </div>
                                        <p class="intro-cnt">${item.description}</p>
                                    
                                `
                }
                else{
                    return ( `

                                    <div class="small-cnt-pe" id="${item.id}" onclick="newsDetail(event)">
                                        <div class="img-hover-zoom"><img src="${item.img}" alt=""></div>
                                            <div class="small-cnt-pe-right">
                                                <a class="text-hover">${item.title}</a>
                                                    <div class="post-footer">
                                                        
                                                        <span>${item.createAt}</span>
                                                        <i class="fa-thin fa-clock"></i>
                                                    </div>
                                            </div>
                                    </div>

                            ` ) 
                }
            });
            headCnt.innerHTML = mainBigCnt ;
            headCnt.id = idMainBigCnt
            headCnt.onclick = newsDetail
            colRight.innerHTML =  arrBightml.join("\n");
             
            
            // cac bai bao phia duoi
            let categoryCnt = resjson.dataCate.map( (item, index) => {
                let headerGroup='';
                let cateDetail=''
                if(item.data.length != 0){
                    headerGroup = `
                                            <div class="header-cate">
                                                <p class="article-group-title">
                                                    <a href="#"> ${item.category}</a>
                                                </p>
                                            </div>
                                `
                    cateDetail = item.data.map( (item,index) => {
                        return (
                            `
                            
                                        <div class="${(index+1)%3==0?"bottom-other-end":"bottom-other"}" id="${item.id}" onclick="newsDetail(event)">
                                            <div class="bt-o-img img-hover-zoom">
                                                <img src="${item.img}" alt="">
                                            </div>
                                            <div class="bt-o-right">
                                                <a href="#" class="text-hover">${item.title}</a>
                                                <div class="post-footer">
                                                    <span>${item.createAt}</span>
                                                </div>
                                            </div>
                                        </div>
                            
                                        `

                        )

                            
                }).join("\n");
                }
                
                if(headerGroup && cateDetail != []) 
                    return headerGroup + "<section class=\"list-news-cate\">"+cateDetail+'</section>';
            });

            
            listCnt.innerHTML = categoryCnt.join("\n");
        })
}






let linkNews = document.getElementById("home")
linkNews.className += " btn-choose";