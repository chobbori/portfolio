 // 팝업 클릭드래그 움직이기
function dragItem(target){
  let dragItem = document.querySelector(target);
  console.log(dragItem)
  let container = document.querySelector(".main");

  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);

  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);

  function dragStart(e) {
    console.log("마우스 누름");
    console.log(e.target.parentNode);
     if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
     } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
     }

     if (e.target.parentNode === dragItem) {
        active = true;
     }
  }

  function dragEnd(e) {
    console.log("마우스 뗌")
     initialX = currentX;
     initialY = currentY;

     active = false;
  }

  function drag(e) {
     
     if (active) {
        console.log("드래그 이동 중")
        e.preventDefault();

        if (e.type === "touchmove") {
           currentX = e.touches[0].clientX - initialX;
           currentY = e.touches[0].clientY - initialY;
        } else {
           currentX = e.clientX - initialX;
           currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
     }
  }

  function setTranslate(xPos, yPos, el) {
    console.log(el)
     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

}

$(document).ready(function () {
  dragItem("#popup1")
  dragItem("#popup2")
  dragItem("#popup3")

  



  // 아이콘 마우스 올리면 바뀌기 
  $(".hoverStyleSet > li").mouseover(function () {
    let imgsrcname = $(this).find("img").attr("src")
    let changedsrcname = imgsrcname.replace(".svg", "_hover.svg")
    $(this).find("img").attr("src", changedsrcname)
  })

  $(".hoverStyleSet > li").mouseout(function () {
    let imgsrcname = $(this).find("img").attr("src")
    let changedsrcname = imgsrcname.replace("_hover.svg", ".svg")
    $(this).find("img").attr("src", changedsrcname)
  })
  
 


  // 오른쪽 상단 시간표시

  // console.log((date.getMonth()+1))
  // console.log(date.getDate())
  // console.log(getDayHyein(date.getDay()))
  // console.log(date.getHours())
  // console.log(date.getMinutes())
  // $("#date").text(`${(date.getMonth()+1)}/${date.getDate()}(${getDayHyein(date.getDay())}) ${date.getHours()}:${date.getMinutes()}`)


  setInterval(function () {
    let date = new Date()
    $("#date").text(`${(date.getMonth() + 1)}/${date.getDate()}(${getDayHyein(date.getDay())}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  }, 1000)

  function getDayHyein(num) {
    if (num == 0) {
      return "Sun"
    } else if (num == 1) {
      return "Mon"
    } else if (num == 2) {
      return "Tue"
    } else if (num == 3) {
      return "Wed"
    } else if (num == 4) {
      return "Thu"
    } else if (num == 5) {
      return "Fri"
    } else if (num == 6) {
      return "Sat"
    }
  }
  // $("#date")





  // 웰컴 팝업 텍스트 효과

  "use strict";
  const content = "Welcome to Hyein's Portfolio!"
  const text = document.querySelector(".welcomeTxt")
  let index = 0;

  // function sleep(delay){ 
  //     const start = new Date().getTime(); 
  //     while (new Date().getTime() < start + delay); 
  //     }

  function typing() {
    text.textContent += content[index];
    // console.log(content[index])
    index++
    if (index > content.length - 1) {
      clearInterval(timerTyping)
    }
  }
  let timerTyping = setInterval(typing, 150)


  // 엑스버튼 누르면 닫힘

  $(".popupBtnClose").click(function () {
    $(this).parent().parent().parent().removeClass("on");
  })


  // 팝업 열기
  $(".popup").click(function(){
    $("#popup3").addClass("on") 
  })

  $(".aboutMe").click(function () {
    $("#popup2").addClass("on")
  })


  


  // 어바웃미 탭메뉴
  let tabTitles = document.querySelectorAll(".tabTit>li")
  let tabDes = document.querySelector(".tabDes")
  //     let tabDescription = [
  //         `
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos at dignissimos temporibus voluptate, praesentium laudantium, odio architecto nihil sit minus quae obcaecati doloribus facere tenetur esse ut est corporis?</p>`,
  //     `
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos at dignissimos temporibus voluptate, praesentium laudantium, odio architecto nihil sit minus quae obcaecati doloribus facere tenetur esse ut est corporis?</p>`,
  //     `
  //     <ul>
  //         <li>des1</li>
  //         <li>des2</li>
  //         <li>des3</li>
  //         <li>des4</li>
  //     </ul>`
  // ]

  for (let i = 0; i < tabTitles.length; i++) {
    tabTitles[i].addEventListener("click", function (e) {

      for (let j = 0; j < tabTitles.length; j++) {
        tabTitles[j].classList.remove("on")
      }
      this.classList.add("on")
      tabDes.innerHTML = tabDescription[i]
    })
  }

  $(`.popup`).click(function(){
    $(`.cls-1`).addClass("on")
    $(`.cls-1`).css(`transform`,`translateY(-50px)`)
  })


















})




