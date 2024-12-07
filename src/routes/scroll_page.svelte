<script>
  import { onMount } from "svelte";

  let isFixed = false;
  let images = [
    "/assets/CORE_SERVICE/1.jpg",
    "/assets/CORE_SERVICE/2.jpg",
    "/assets/CORE_SERVICE/3.jpg",
    "/assets/CORE_SERVICE/4.jpg",
  ];
  let activeImageIndex = 0;

  const updateIsFixed = () => {
    if (window.innerWidth > 980) {
      isFixed =
        window.scrollY >= window.innerHeight &&
        window.scrollY <= window.innerHeight * 2.3;
    } else {
      isFixed =
        window.scrollY >= window.innerHeight &&
        window.scrollY <= window.innerHeight * 3.5;
    }

    console.log("Is Fixed:", isFixed, "ScrollY:", window.scrollY);
  };

  const handleScroll = () => {
    updateIsFixed();
    updateActiveCard();
    console.log("Is Fixed:", isFixed, "ScrollY:", window.scrollY);
  };

  // Throttle function to reduce frequency of scroll event handler
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

  const updateActiveCard = () => {
    let viewportHeight;
    if (window.innerWidth > 570) {
      viewportHeight = window.innerHeight / 2; // Center of the viewport
    } else if (window.innerWidth <= 570) {
      viewportHeight = (window.innerHeight / 4) * 3; // Center of the viewport
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

    activeImageIndex = closestCardIndex; // Update the active image index
  };

  onMount(() => {
    console.log("onMount is working");

    // Add scroll event listener with throttling
    const throttledScrollHandler = throttle(updateActiveCard, 100); // Adjust the throttle limit (e.g., 100ms)

    window.addEventListener("scroll", throttledScrollHandler);
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      console.log("Cleanup on unmount");
      window.removeEventListener("scroll", throttledScrollHandler);
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class:fixed={isFixed} class:end={!isFixed} id="CoreService">
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
  {#each images as image, index}
    <img
      src={image}
      alt="Background"
      class:image-active={index === activeImageIndex}
      class:image-inactive={index !== activeImageIndex}
    />
  {/each}
</div>

<div class="container">
  <div class="cards-container">
    <div class="cards_sub_container left_container">
      <div class="card {activeImageIndex === 0 ? 'card-highlight' : ''}">
        <div class="card-margin">
          <div class="card-header">Corporate Innovation Training</div>
          <div class="card-title">사내혁신 교육</div>
          <div class="card-description">
            사내 리더십과 새로운 BM개발을 위한 동적역량 기반의 사내혁신 교육을
            제공합니다.
          </div>
        </div>
      </div>

      <div class="card {activeImageIndex === 1 ? 'card-highlight' : ''}">
        <div class="card-header">Design Thinking Training</div>
        <div class="card-title">디자인적 사고 중점의 교육</div>
        <div class="card-description">
          확산적 사고와 수렴적 사고를 반복한 디자인적 사고의 창의성 기반
          커리큘럼을 제공합니다.
        </div>
      </div>
    </div>

    <div class="cards_sub_container right_container">
      <div class="card {activeImageIndex === 2 ? 'card-highlight' : ''}">
        <div class="card-header">Entrepreneurship Training</div>
        <div class="card-title">창업가를 위한 기업가정신 교육</div>
        <div class="card-description">
          예비창업자와 창업가의 스케일업을 위한 기업가정신 교육과 창업 멘토링을
          제공합니다.
        </div>
      </div>

      <div class="card {activeImageIndex === 3 ? 'card-highlight' : ''}">
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

<style>
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
    /* width: 100%; */
    z-index: 1;
    /* position: fixed; */
    width: 100%; /* Set a width for the container */
    height: 100vh;
    /* top: 0; */
    /* z-index: 10; */
  }

  .end {
    position: absolute;
    width: 100%; /* Set a width for the container */
    height: 100vh;
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

  .cards-container {
    padding-top: 40vh;
    padding-bottom: 50vh;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: right;
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
    padding-top: 22vh;
  }

  .card {
    font-family: "Gmarket Sans TTF";
    max-width: 300px;
    min-height: 460px;
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
  }

  .card-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
  }

  .card-description {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    text-align: center;
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

    .card {
      max-width: 100%;
      min-height: auto;
      padding: 15px;
    }
  }
  @media screen and (max-width: 980px) {
    .cards-container {
      flex-direction: column; /* Stack the cards vertically */
      align-items: flex-end; /* Align cards to the right */
      gap: 30vw; /* Space between cards */
      padding: 10vh 5% 10vh 0; /* Add padding on the right */
      /* padding-top: 100vh; */
    }

    /* Ensure the cards are responsive */
    .card {
      flex: 1;
      max-width: 32vw; /* Optional: Keep the cards responsive */
      /* width: clamp(200px, 30%, 35vh); */
      min-width: 300px;

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
