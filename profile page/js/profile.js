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
  let xOffset = 0
  let yOffset = 0

  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);

  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);

  function dragStart(e) {
    
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
    
     initialX = currentX;
     initialY = currentY;

     active = false;
  }

  function drag(e) {
     
     if (active) {
        
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
    // console.log(el.style.width)
     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    //  el.style.left =  xPos + "px"
    //  el.style.top =  yPos + "px";
  }

}

$(document).ready(function () {
  dragItem("#popup1")
  dragItem("#popup2")
  dragItem("#popup3")
  dragItem("#popup3-1")
  dragItem("#popup3-2")
  dragItem("#popup3-3")
  dragItem("#popup3-4")
  dragItem("#popup3-5")
  dragItem("#popup3-6")
  dragItem("#popup3-7")
  dragItem("#popup4")
  dragItem("#popup5")
  dragItem("#popup6")
  dragItem("#popup7")


  
  // 클릭 시 앞으로 배치되는 기능.
  let zindex = 1;
  $(".popupBasicStyle").click(function(){
    zindex++
    $(this).css("z-index",zindex)
  })

  



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
  

  $(".underBarIcon>li").mouseover(function(){
    let idx = $(this).index()
    $(".ballon>ul>li").eq(idx).addClass("on")
  })
  $(".underBarIcon>li").mouseout(function(){
    let idx = $(this).index()
    $(".ballon>ul>li").eq(idx).removeClass("on")
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

  // 팝업 패널 랜덤좌표
  $(".ppup").each(function(){

    let deviceWidth = $(window).width() - 500
    let deviceHeight = $(window).height() - 500
    
    let coordX = Math.random()*deviceWidth
    let coordY = (Math.random()*deviceHeight)+40
    // let coordX 


    $(this).css("left",coordX+"px")
    $(this).css("top",coordY+"px")
  })


  // 팝업 열기
  $(".popup").click(function(){
    $("#popup3").addClass("on") 
    
    setTimeout(function(){
      for(let i=1 ; i<=7 ; i++){
        $("#popup3-"+i).css("transition",`all 0.5s ease ${i*0.2}s`)
        $("#popup3-"+i).addClass("on")
      } 
     },1000)

     setTimeout(function(){
        $(".ppup").css("transition","none")
     },3000)

    })

  

  $(".aboutMe").click(function () {
    $("#popup2").addClass("on")
  })
  $(".video").click(function () {
    $("#popup4").addClass("on")
  })
  $(".reDesign").click(function () {
    $("#popup6").addClass("on")
  })
  $(".project").click(function () {
    $("#popup7").addClass("on")
  })



  // 스킬버튼 누르면 애니메이션 실행

  $(".mySkill").click(function () {
    $("#popup5").addClass("on")

    setTimeout(function(){
      $(".skillList>li").each(function(){
          let list = $(this)
          let percent = $(this).find(".per").text()
          let count = 0
          
          let timer = setInterval(function(){
            count++
            list.find(".per").text(count)
            list.find(".progress").css("width",count+"%")
            if(count>=percent){
              clearInterval(timer)
            }
          },10)
        })
    },500)
  })




  


  // 어바웃미 탭메뉴

    $(".tabMenu>dt").click(function () {
      //1.dt태그들이 on클래스가 지워져야함
      $(".tabMenu>dt").removeClass("on")
      //2.내가 클릭한 dt태그한테만 on클래스가 추가
      $(this).addClass("on")
    })

  

















})




