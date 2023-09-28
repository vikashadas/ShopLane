
$(document).ready(function() {
  $("#header-container").load("header.html");
});

$('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    center:true,
    autoplay:true,
    margin:10,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  })
  
  let topWrapper = $("#topWrapper");
  let bottomWrapper = $("#bottomWrapper");
  
  //function to add following DOM Tree;
    // <article class="card">
    //   <img class="image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" alt="clothing">
    //   <div class="text-wrapper">
    //       <h3 class="desc">Men Navy Blue Solid Sweatshirt</h3>
    //       <p class="brand">United Colors of Benetton</p>
    //       <p class="price">Rs 2599</p>
    //   </div>
    // </article>
    
  
  function showArticle(data){
    console.log(data);
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+Number(data), function(response){
      console.log(response);
    })
  }  
  function renderData(index,data){
    let article = `<article class="card" id="${data[index].id}" onclick= showArticle(${data[index].id})>
                      <a href="./products.html?id=${data[index].id}">
                      <img class="image" src="${data[index].preview}"/>
                      <div class="text-wrapper">
                        <h3 class="desc">${data[index].name}</h3>
                        <p class="brand">${data[index].brand}</p>
                        <p class="price">Rs ${data[index].price}</p>
                      </div></a>
                    </article>`
    if(data[index].isAccessory===true){
      bottomWrapper.append(article);
    }
    else{
      topWrapper.append(article);
    }
  }
  //GET Request to fetch products data from API
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(res){
    console.log(res);
    for(var i=0; i<res.length; i++){
      renderData(i,res);
    }
  })
  
  let count = $("#count");
  
  let value = JSON.parse(localStorage.getItem("Products"));
  if(value==""||value==null){
    count.text("0")
  }
  else{
    let index = (value.length)-1;
    count.text(value[index].allProductsCount);
  }
$(document).ready(function() {
    $("#footer-container").load("footer.html");
});