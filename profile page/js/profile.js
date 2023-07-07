$(document).ready(function () {

  // 아이콘 마우스 올리면 바뀌기 
  $(".hoverStyleSet > li").mouseover(function () {
    let imgsrcname = $(this).children("img").attr("src")
    let changedsrcname = imgsrcname.replace(".svg", "_hover.svg")
    $(this).children("img").attr("src", changedsrcname)
  })

  $(".hoverStyleSet > li").mouseout(function () {
    let imgsrcname = $(this).children("img").attr("src")
    let changedsrcname = imgsrcname.replace("_hover.svg", ".svg")
    $(this).children("img").attr("src", changedsrcname)
  })
  $(".hoverStyleSet > li>a").mouseover(function () {
    let imgsrcname = $(this).children("img").attr("src")
    let changedsrcname = imgsrcname.replace(".svg", "_hover.svg")
    $(this).children("img").attr("src", changedsrcname)
  })

  $(".hoverStyleSet > li>a").mouseout(function () {
    let imgsrcname = $(this).children("img").attr("src")
    let changedsrcname = imgsrcname.replace("_hover.svg", ".svg")
    $(this).children("img").attr("src", changedsrcname)
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
    $(".welcome").addClass("off")
  })


  $(".aboutMe").click(function () {
    $(".popupAboutMe").addClass("on")
  })

  $(".popupBtnClose").click(function () {
    $(".popupAboutMe").removeClass("on")
  })



  // 팝업 클릭드래그 움직이기

  let draggable = ($target) => {

    let isPress = false,
      prevPosX = 0,
      prevPosY = 0;


    $target.onmousedown = start;
    $target.onmouseup = end;

    // 상위 영역
    window.onmousemove = move;

    function start(e) {
      e.preventDefault()
      prevPosX = e.clientX;
      prevPosY = e.clientY;

      isPress = true;
      console.log(isPress)
    }

    function move(e) {
      e.preventDefault()
      console.log(isPress)
      if (!isPress) return;

      const posX = prevPosX - e.clientX;
      const posY = prevPosY - e.clientY;

      prevPosX = e.clientX;
      prevPosY = e.clientY;

      $target.style.left = ($target.offsetLeft - posX) + "px";
      $target.style.top = ($target.offsetTop - posY) + "px";
    }

    function end(e) {
      e.preventDefault()
      isPress = false;
    }
  }



  window.onload = () => {
    const $target1 = document.querySelector(".welcome");
    draggable($target1)

    const $target2 = document.querySelector(".popupAboutMe");
    // draggable($target2)
  }


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


















})




