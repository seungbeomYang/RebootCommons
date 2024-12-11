<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/dist/ScrollTrigger"; // Use the `dist` version for compatibility

  // Register the plugin
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  let headFixed = true;
  let isFixed = false;
  let afterFixed = false;
  let isFixed2 = false;
  let afterFixed2 = false;
  let videoSources = [
    "/Videos/about-video1.mp4",
    "/Videos/about-video2.mp4",
    "/Videos/about-video3.mp4",
  ];
  let cardSources = [
    "/assets/CORE_SERVICE/1.jpg",
    "/assets/CORE_SERVICE/2.jpg",
    "/assets/CORE_SERVICE/3.jpg",
    "/assets/CORE_SERVICE/4.jpg",
    "/assets/CORE_SERVICE/5.jpg",
    "/assets/CORE_SERVICE/6.jpg",
    "/assets/CORE_SERVICE/7.jpg",
    "/assets/CORE_SERVICE/8.jpg",
  ];
  let activateIndex = 0;
  let activeImageIndex = 0;

  let scrollThreshold;

  const updateVideoPosition = () => {
    if (window.scrollY > scrollThreshold) {
      if (headFixed) {
        headFixed = false;
        gsap.to(".video-container", {
          top: `${scrollThreshold}px`,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: () => {
            document.querySelector(".video-container").style.position =
              "absolute";
          },
        });
      }
    } else {
      if (!headFixed) {
        headFixed = true;
        document.querySelector(".video-container").style.position = "fixed";
        gsap.to(".video-container", {
          top: "50%",
          transform: "translate(-50%, -50%)",
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    }
  };

  const updateActivevideo = (index) => {
    activateIndex = index;
    console.log("Active video Index:", activateIndex);
  };
  const updateIsFixed = () => {
    if (window.innerWidth > 980) {
      isFixed =
        window.scrollY >= window.innerHeight + scrollThreshold &&
        window.scrollY <= scrollThreshold + window.innerHeight * 2.3;
    } else {
      isFixed =
        window.scrollY >= scrollThreshold + window.innerHeight &&
        window.scrollY <= scrollThreshold + window.innerHeight * 3.5;
    }

    if (window.innerWidth > 980) {
      afterFixed = window.scrollY > scrollThreshold + window.innerHeight * 2.3;
    } else {
      afterFixed = window.scrollY > scrollThreshold + window.innerHeight * 3.5;
    }

    // Add logic to manage opacity for CoreService
  };
  const updateIsFixed2 = () => {
    if (window.innerWidth > 980) {
      isFixed2 =
        window.scrollY >= scrollThreshold + window.innerHeight * 2.3 + 500 &&
        window.scrollY <= scrollThreshold + window.innerHeight * 2.3 * 2;
    } else {
      isFixed2 =
        window.scrollY >= scrollThreshold + window.innerHeight * 3.5 + 500 &&
        window.scrollY <= scrollThreshold + window.innerHeight * 3.5 * 2;
    }

    if (window.innerWidth > 980) {
      afterFixed2 =
        window.scrollY > scrollThreshold + window.innerHeight * 2.3 * 2 + 500;
    } else {
      afterFixed2 =
        window.scrollY > scrollThreshold + window.innerHeight * 3.5 * 2 + 500;
    }

    // // Add logic to manage opacity for CoreService
    // const EducationContentElement = document.getElementById("EducationContent");
    // if (!isFixed2) {
    //   EducationContentElement.style.opacity = "0"; // Fade out
    // } else if (isFixed2) {
    //   EducationContentElement.style.opacity = "1"; // Fade in
    // }
  };

  const updateActiveCard = () => {
    let viewportHeight;
    if (window.innerWidth > 570) {
      viewportHeight = window.innerHeight / 2; // Center of the viewport
    } else if (window.innerWidth <= 570) {
      viewportHeight = (window.innerHeight / 4) * 2.4; // Center of the viewport
    }
    // const viewportHeight = window.innerHeight / 2;
    let closestCardIndex = 0;
    let closestDistance = Infinity;

    const cardElements = document.querySelectorAll(".card");

    cardElements.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const distanceToCenter = Math.abs(viewportHeight - cardCenter);

      // Update closest card index
      if (distanceToCenter < closestDistance) {
        closestDistance = distanceToCenter;
        closestCardIndex = index;
      }

      // Dynamically set opacity based on distance
      const maxDistance = viewportHeight; // Maximum distance for full transparency
      const opacity = Math.max(0, 1 - distanceToCenter / maxDistance); // Scale opacity between 1 and 0
      card.style.opacity = opacity; // Set the opacity directly
    });

    activeImageIndex = closestCardIndex; // Update the active video index
  };
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(
          function () {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          },
          limit - (Date.now() - lastRan)
        );
      }
    };
  };

  const recalculateScrollThreshold = () => {
    const coreServiceElement = document.getElementById("CoreService");
    if (coreServiceElement) {
      scrollThreshold =
        coreServiceElement.getBoundingClientRect().top + window.scrollY;
      // window.innerHeight * (window.innerWidth > 630 ? 2 : 1.8);
    }
  };
  const refreshLayout = () => {
    updateVideoPosition();
    updateIsFixed();
    updateIsFixed2();
    updateActiveCard();
  };

  const handleScroll = () => {
    updateVideoPosition();
    updateIsFixed();
    updateIsFixed2();
    updateActiveCard();
    console.log(
      "Is Fixed:",
      isFixed,
      "ScrollY:",
      window.scrollY,
      "threshold",
      scrollThreshold
    );
  };
  onMount(() => {
    const coreServiceElement = document.getElementById("CoreService");
    if (coreServiceElement) {
      recalculateScrollThreshold();
    } else {
      console.error("CoreService element not found!");
    }
    console.log("onMount is working");
    const containers = gsap.utils.toArray(".subVidContainer");
    containers.forEach((subVidContainer, index) => {
      gsap.to(subVidContainer, {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: subVidContainer,
          pin: true,
          scrub: true,
          onEnter: () => updateActivevideo(index), // Update video index when text enters
          onEnterBack: () => updateActivevideo(index), // Handle scrolling back up
        },
      });
    });

    const throttledScrollHandler = throttle(updateActiveCard, 100); // Adjust the throttle limit (e.g., 100ms)

    const throttledResizeHandler = throttle(() => {
      recalculateScrollThreshold();
      ScrollTrigger.refresh();
      refreshLayout();
    }, 100);
    window.addEventListener("resize", throttledResizeHandler);

    window.addEventListener("scroll", throttledScrollHandler);
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      console.log("Cleanup on unmount");
      window.removeEventListener("scroll", throttledScrollHandler);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", throttledResizeHandler);
    };
  });
</script>

<!-- <div class="video-container"> -->
<div
  class="video-container {headFixed ? 'headFixed' : 'headAbsolute'}"
  style={headFixed ? "" : `top: ${scrollThreshold}px;`}
>
  {#each videoSources as video, index}
    <video
      src={video}
      alt="Background"
      class:video-active={index === activateIndex}
      class:video-inactive={index !== activateIndex}
      muted
      autoplay
      loop
      playsinline
    ></video>
  {/each}
</div>
<div class="outer_container">
  <div class="subVidContainer">
    <div class="text">
      <span>
        리부트커먼즈는 혁신적 교육을 통해<br />
        자기다움을 발견하며<br />
        삶의 재부팅을 <br />
        실현합니다.
      </span>
    </div>
  </div>
  <div class="subVidContainer">
    <div class="text">
      <div class="vision">VISION</div>

      <div>리부트커먼는 교육을 통해 <br />혁신을 디자인합니다</div>
    </div>
  </div>
  <div class="subVidContainer">
    <div class="text long">
      <div class="vision">MISSION</div>

      <div>
        리부트커먼는 개인과 조직의<br />새로운 지평을 여는 촉진자를
        <br />지향합니다
      </div>
    </div>
  </div>
</div>
<div id="CoreService"></div>
<div
  class:CoreService={!isFixed && !afterFixed}
  class:fixed={isFixed}
  class:end={afterFixed}
>
  <!-- <div id="CoreService"> -->
  <div class="content-section">
    <div
      class="core-service-title {activeImageIndex === 2 ? 'text-color' : ''}"
    >
      CORE SERVICE
    </div>
    <div class="main-title {activeImageIndex === 2 ? 'text-color' : ''}">
      리부트커먼즈가<br />잘할 수 있는 일
    </div>
    <div class="sub-title {activeImageIndex === 2 ? 'text-color' : ''}">
      리부트커먼즈가 가장 잘 할 수 있는<br />일을 통해 혁신을 창출합니다.
    </div>
  </div>
</div>

<div class="image-container">
  {#each cardSources as image, index}
    <img
      src={image}
      alt="Background"
      class:image-active={index === activeImageIndex}
      class:image-inactive={index !== activeImageIndex}
    />
  {/each}
</div>

<div class="container">
  <div class="cards-container right">
    <div class="cards_sub_container left_container">
      <div class="card {activeImageIndex === 0 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-margin">
            <div class="card-header">Corporate Innovation Training</div>
            <div class="card-title">사내혁신 교육</div>
            <div class="card-description">
              사내 리더십과 새로운 BM개발을<br /> 위한 동적역량 기반의 사내혁신
              <br />교육을 제공합니다.
            </div>
          </div>
        </div>
      </div>

      <div class="card {activeImageIndex === 1 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-header">Design Thinking Training</div>
          <div class="card-title">디자인적 사고 중점의 교육</div>
          <div class="card-description">
            확산적 사고와 수렴적 사고를 반복한 디자인적 사고의 창의성 기반
            커리큘럼을 제공합니다.
          </div>
        </div>
      </div>
    </div>

    <div class="cards_sub_container right_container">
      <div class="card {activeImageIndex === 2 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-header">Entrepreneurship Training</div>
          <div class="card-title">창업가를 위한 기업가정신 교육</div>
          <div class="card-description">
            예비창업자와 창업가의 스케일업을 위한 기업가정신 교육과 창업
            멘토링을 제공합니다.
          </div>
        </div>
      </div>

      <div class="card {activeImageIndex === 3 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-header">Training Effectiveness Reports</div>
          <div class="card-title">교육 효과성 검증 레포트 제공</div>
          <div class="card-description">
            기업 HRD 담당자의 사내 교육 결과에 대한 전문적 교육 효과성 검증
            레포트를 제공합니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class:EducationContent={!isFixed2 && !afterFixed2}
  class:fixed={isFixed2}
  class:end={afterFixed2}
  id="EducationContent"
>
  <!-- <div id="CoreService"> -->
  <div class="content-section">
    <div
      class="core-service-title {activeImageIndex === 6 ? 'text-color' : ''}"
    >
      EDUCATION CONTENTS
    </div>
    <div class="main-title {activeImageIndex === 6 ? 'text-color' : ''}">
      혁신을 디자인하기<br />
      위한 교육 콘텐츠
    </div>
    <div class="sub-title {activeImageIndex === 6 ? 'text-color' : ''}">
      리부트커먼즈는 교육을 통해 혁신을 디자인합니다.
    </div>
  </div>
</div>

<div class="container">
  <div class="cards-container left">
    <div class="cards_sub_container left_container">
      <div class="card {activeImageIndex === 4 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-margin">
            <div class="card-header">VISON HOUSE</div>
            <div class="card-title">비전하우스</div>
            <div class="card-description">
              비전하우스는 개인의 비전 발견을 통해 개인과 조직의 조화를 이루는
              비저닝 프로그램을 제공합니다.
            </div>
          </div>
        </div>
      </div>

      <div class="card {activeImageIndex === 5 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-header">ENTREPRENEURSHIP INNOVATION</div>
          <div class="card-title">기업가정신과 혁신</div>
          <div class="card-description">
            기업가정신과 혁신은 창업자와 사내혁신을 위한 워크숍으로 창업의 4차원
            (사람-혁신-비즈니스모델-자금조달) 프레임워크를 통한 혁신 모델 도출을
            제공합니다.
          </div>
        </div>
      </div>
    </div>

    <div class="cards_sub_container right_container">
      <div class="card {activeImageIndex === 6 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-header">LEADERSHIP INNOVATION</div>
          <div class="card-title">리더십과 혁신</div>
          <div class="card-description">
            리더십은 리더, 팔로워, 상황의 상호작용으로 조직 구성원의 리더십
            개발과 향상을 통해 혁신을 촉진하는 프로그램 제공과 조직 사내 갈등
            조율을 위한 프로그램 제공 및 멘토링 서비스를 제공합니다.
          </div>
        </div>
      </div>

      <div class="card {activeImageIndex === 7 ? 'card-highlight' : ''}">
        <div class="card_inner">
          <div class="card-header">CAREER SHIFT</div>
          <div class="card-title">커리어 시프트</div>
          <div class="card-description">
            커리어 시프트는 경영의 프레임워크를 조직차원이 아닌 개인 차원으로
            접목하여 현 시점의 커리어와 백케스팅을 통한 다양한 미래 관점까지
            폭넓게 스케치하며 효과적인커리어 포트폴리오 구축과 커리어 전략을 기
            반한 워크숍과 멘토링 서비스를 제공합니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .subVidContainer {
    width: 100%;
    height: 100vh; /* Each container occupies the full viewport height */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 4rem;
    visibility: hidden;

    /* opacity: 0;  */
    /* transition: opacity 0.5s ease-in-out; */
  }
  .video-container {
    position: fixed;
    top: 50%; /* Default top position */
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -5;
    background-color: black;
  }

  .video-container.headFixed {
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .video-container.headAbsolute {
    position: absolute;
    top: var(--absolute-top, 0); /* Dynamically set via JS */
    transform: translateX(-50%);
  }

  .video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: opacity 0.9s ease-in-out; /* Smooth fade-in/out */
  }
  .video-active {
    opacity: 1; /* Fully visible */
  }

  .video-inactive {
    opacity: 0; /* Fully hidden */
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 700px;
    /* height: 239px; */
    text-align: center;
    color: white;
    font-size: 40px;
    font-family: Gmarket Sans TTF;
    font-weight: 700;
    line-height: 95px;
    word-wrap: break-word;
  }
  .long {
    width: 700px;
  }
  .vision {
    text-align: center;
    color: white;
    font-size: 27.77px;
    font-family: Gmarket Sans TTF;
    font-weight: 700;
    word-wrap: break-word;
  }

  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: Gmarket Sans TTF;
    src: url();
  }
  /* General Styles */
  /* .container {
    width: 100%;
    height: 100vh;
    background: white;
    font-family: "Gmarket Sans TTF", sans-serif;
    color: white;
    overflow: hidden;
    position: relative;
  } */
  #CoreService {
    box-sizing: border-box;
  }
  .container {
    /* align-self: center; */
    margin: auto;

    z-index: 1;
  }
  .content-section {
    padding-top: 15vh;
    margin: auto;
    /* width: 1200px; */
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: opacity 1s ease-in-out;
  }

  .end {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: -1;
  }

  .image-container {
    position: fixed;
    top: 50%; /* Position from the top of the viewport */
    left: 50%; /* Position from the left of the viewport */
    transform: translate(-50%, -50%); /* Offset to center the container */
    width: 100%; /* Set a width for the container */
    height: 100vh;
    /* transition: opacity 0.5s ease-in-out; */
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    z-index: -10;
    background-color: black;
  }
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: opacity 0.9s ease-in-out; /* Smooth fade-in/out */
  }
  .image-active {
    opacity: 1; /* Fully visible */
  }

  .image-inactive {
    opacity: 0; /* Fully hidden */
  }

  .vision-text {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  }

  .core-service-title {
    font-family: "Gmarket Sans TTF";
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  .main-title {
    font-family: "Gmarket Sans TTF";
    font-size: 50px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 2rem;
    color: white;
  }
  .sub-title {
    font-family: "Gmarket Sans TTF";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    margin-bottom: 3rem;
    color: white;
  }
  .text-color {
    color: black;
  }
  .EducationContent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  #EducationContent {
    /* display: flex; */
    flex-direction: column; /* Stack child elements vertically */
    align-items: flex-end; /* Align child elements to the right */
    justify-content: center; /* Center content vertically */
    text-align: right; /* Align text inside the container to the right */
    padding-right: 5%; /* Add some padding to create space from the edge */
    /* opacity: 0; */
    transition: opacity 1s ease-in-out;
  }

  .cards-container {
    padding-top: 40vh;
    padding-bottom: 50vh;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .right {
    justify-content: right;
  }
  .left {
    justify-content: left;
  }
  .cards_sub_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }
  .left_container {
    padding-bottom: 22vh;
  }
  .right_container {
    padding-top: 20vh;
  }

  .card {
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Gmarket Sans TTF";
    max-width: 300px;
    min-height: 360px;
    background: white;
    color: black;
    border: 4px solid rgb(255, 255, 255);
    border-radius: 11px;
    padding: min(2.0833vw, 40rem);
    text-align: left;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 4;
    opacity: 1; /* Default opacity */
    transition: opacity 0.2s ease; /* Smooth transition for opacity */
  }
  .card-highlight {
    order: 4px solid #8c28fe;
    border-color: #8c28fe; /* Highlighted border color */
  }

  .card-header {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #8c28fe;
    word-break: keep-all;
  }

  .card-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
    word-break: keep-all;
  }

  .card-description {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.8;
    text-align: center;
    word-break: keep-all;
  }

  @media screen and (min-width: 650px) {
    .CoreService {
      position: sticky;
      top: 0; /* Sticks at the top of the viewport */
      z-index: 10;

      transition: opacity 1s ease-in-out;
    }
  }
  @media screen and (max-width: 650px) {
    .CoreService {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transition: opacity 1s ease-in-out;
      opacity: 0;
    }
  }

  @media screen and (min-width: 1400px) {
    .content-section {
      width: 1240px;
      /* padding: 10vh 2.5%; */
    }
    .container {
      width: 1240px;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    .container {
      width: 95%;
    }

    .content-section {
      width: auto;
      padding: 20vh 2.5%;
    }

    /* .card {
      max-width: 260px;
      min-height: 400px;
    } */
  }
  @media screen and (max-width: 1100px) {
    .container {
      width: 95%;
    }

    .content-section {
      width: auto;
      padding: 20vh 2.5%;
    }

    /* .card {
      max-width: 260px;
      min-height: 400px;
    } */

    .core-service-title {
      font-size: 21px;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
    }

    .main-title {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 2rem;
      color: white;
    }
    .sub-title {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.8;
      margin-bottom: 3rem;
      color: white;
    }
    /* .content-section {
      padding: 8vh 5%;
      width: auto;
    } */
  }

  @media screen and (max-width: 768x) {
    .content-section {
      padding: 8vh 5%;
    }

    .cards-container {
      padding-top: 40vh;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    /* .card {
      max-width: 100%;
      min-height: auto;
      padding: 15px;
    } */
  }
  @media screen and (max-width: 1200px) {
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      max-width: 400px;

      text-align: center;
      color: white;
      font-size: 25px;
      font-family: Gmarket Sans TTF;
      font-weight: 700;
      line-height: 1.7;
      word-wrap: break-word;
    }
    .vision {
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
  @media screen and (max-width: 980px) {
    .cards-container {
      flex-direction: column; /* Stack the cards vertically */
      /* Align cards to the right */
      gap: 30vw; /* Space between cards */
      padding: 10vh 5% 10vh 0; /* Add padding on the right */
      /* padding-top: 100vh; */
    }
    .right {
      align-items: flex-end;
    }

    /* Ensure the cards are responsive */
    .card {
      flex: 1;
      /* max-width: 32vw; */
      /* min-width: 300px; */

      padding: 15px; /* Add padding to the card content */
      text-align: right; /* Align text to the right */
    }
    .cards_sub_container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 30vw;
      justify-content: center;
    }

    .main-title {
      font-size: 35px;
    }

    .sub-title {
      font-size: 14px;
    }

    .card-header {
      font-size: 12px;
    }

    .card-title {
      font-size: 24px;
    }

    .card-description {
      font-size: 14px;
    }

    .cards-container {
      padding: 20vh 0;
    }
    .left_container {
      padding-bottom: 0;
    }
    .right_container {
      padding-top: 0;
    }
  }
  @media screen and (max-width: 570px) {
    .content-section {
      padding-top: 10vh;
    }
    .container {
      padding-top: 60vh;
    }
  }
</style>
