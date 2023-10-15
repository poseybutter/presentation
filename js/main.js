//scroll될 때 서서히 바뀌는 background-color
//main에 section마다 div를 만들어 공간을 구분해주었음. 특히 배경의 크기 계산을 쉽게 하기 위해 bg-area로 두 섹션을 묶어준 다음, 형제 요소로 배경 요소를 넣음
//bg-area에 relative를 주고, 실제로 바뀌는 bg class는 absolote를 주어 상하좌우 모두 0으로 주어 두개의 섹션을 모두 차지하도록 둠
//원래는 스크립트로 두 개의 섹션의 높이값을 계산하고 그 높이값을 bg의 height 값으로 넣으려고 했으나 브라우저의 세로 크기가 바뀌면 오류가 생기는 점을 확인한 후 html과 css로 제어하는 방식을 택함
//일단 css로 opacity 값을 0으로 주고, bg가 끝나는 점과 세로 스크롤 바의 중앙이 만나면 autoAlpha로 opacity를 1로 바뀌게끔 설정함
$(function () {
  gsap.to(".bg", {
    // 타겟의 끝점으로 애니메이션 실행
    autoAlpha: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".sc-about", // 기준 요소
      start: "bottom bottom", // 기준 요소 시작점, 윈도우 시작점
      end: "bottom 100px", // 기준
      scrub: 1, // 반복하거나, 시작점부터 끝점까지 부드럽게 동작 이어지도록(end 필수)
    },
  });

  const cursorW = 124;
  const cursorH = 124;

  $(window).mousemove(function (e) {
    //현재 클라이언트 영역 내의 가로, 세로 좌표 값 제공
    const xVal = e.clientX;
    const yVal = e.clientY;

    gsap.to(".cursor", {
      x: xVal,
      y: yVal,
      width: cursorW,
      height: cursorH,
      xPercent: -50, //수평으로 이동
      yPercent: -50, //수직으로 이동
    });
  });

  $(window).mousemove(() => {
    $(".cursor").css({ display: "flex" });
  });

  $("span").mousemove(function (e) {
    if ($(e.target).parents(".sc-about").length) {
      $(".cursor").addClass("gradient");
      $(".cursor").html("<span>scroll</span>");
    } else if ($(e.target).parents(".sc-contact").length) {
      $(".cursor").addClass("gradient");
      $(".cursor").html("<span>contact me</span>");
    }
  });

  $("span").mouseout(function (e) {
    $(".cursor").removeClass("gradient");
    $(".cursor").html("<span>scroll</span>");
  });

  $("h1").mousemove(function (e) {
    $(".cursor").addClass("gradient");
    $(".cursor").html("<span>scroll</span>");
  });

  $("h1").mouseout(function (e) {
    $(".cursor").removeClass("gradient");
    $(".cursor").html("<span>scroll</span>");
  });

  $("a").mousemove(function (e) {
    if ($(e.target).parents(".works-item").length) {
      $(".cursor").addClass("fff");
      $(".cursor").html("<span>click</span>");
    } else if ($(e.target).parents(".addr-box").length) {
      $(".cursor").addClass("gradient");
      $(".cursor").html("<span>contact me</span>");
    } else if ($(e.target).parents(".link-box").length) {
      $(".cursor").addClass("gradient");
      $(".cursor").html("<span>click</span>");
    } else {
      $(".cursor").html("<span>scroll</span>");
    }
  });

  $("a").mouseout(function (e) {
    $(".cursor").removeClass("fff");
    $(".cursor").removeClass("gradient");
    $(".cursor").html("<span>scroll</span>");
  });

  // orbit

  var path = anime.path(".orbit-context path");
  var motionPath = anime({
    targets: ".square",
    easing: "easeInQuad",
    translateX: path("x"),
    translateY: path("y"),
    rotate: path("angle"),
    duration: 8000,
    loop: true,
  });

  // text reveal animation

  gsap.to(".orbit .text-area p", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".orbit .text-area p",
      scrub: 1,
      start: "top center",
      end: "bottom center",
    },
  });

  const problemText = $(".sc-problem span, .sc-problem h3");
  problemText.each((idx, el) => {
    gsap.from(el, {
      yPercent: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".sc-problem",
        start: "top center",
        toggleActions: "restart none restart none",
      },
    });
  });

  const aboutText = $(".sc-about span");
  aboutText.each((idx, el) => {
    gsap.from(el, {
      yPercent: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".sc-about",
        start: "top center",
        toggleActions: "restart none restart restart",
      },
    });
  });

  const willText = $(".sc-willbe span");
  willText.each((idx, el) => {
    gsap.from(el, {
      yPercent: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".sc-willbe",
        start: "top center",
        toggleActions: "restart none restart restart",
      },
    });
  });
  const thanksText = $(".sc-thanks span");
  thanksText.each((idx, el) => {
    gsap.from(el, {
      yPercent: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".sc-thanks",
        start: "top center",
        toggleActions: "restart none restart restart",
      },
    });
  });
});
