<script>
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import Navbar from "./Navbar.svelte";
  import ScrollPage from "./scroll_page.svelte";
  import Email from "./EmailPage.svelte";
  import ScrollPlus from "./ScrollPlus.svelte";
  import EducationContent from "./EducationContent.svelte";

  let HeadImageIndex = 0;
  function plusSlides(n) {
    HeadImageIndex = (HeadImageIndex + n + 3) % 3; // Cycle through slides (0, 1, 2)
  }

  onMount(() => {
    console.log("Page mounted");
  });
</script>

<Navbar />
<!-- 
<div class="grid-overlay">
  
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
</div>
<div class="small-grid-overlay">
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
  <div class="grid-column"></div>
</div> -->
<!-- Page Content -->
<!-- <Header /> -->
<div class="slideshow-container">
  <div
    class="headSlide fade"
    class:Image-show={HeadImageIndex === 0}
    on:click={() => plusSlides(1)}
  >
    <video src="/Videos/about-video1.mp4" autoplay muted loop></video>
    <div class="text">
      <span>
        리부트커먼는 혁신적 교육을 통해 자기다움을 발견하며 삶의 재부팅을
        실현합니다.
      </span>
    </div>
  </div>
  <div
    class="headSlide fade"
    class:Image-show={HeadImageIndex === 1}
    on:click={() => plusSlides(1)}
  >
    <video src="/Videos/about-video2.mp4" autoplay muted loop></video>

    <div class="text">
      <div class="vision">VISION</div>

      <div>리부트커먼는 교육을 통해 혁신을 디자인합니다</div>
    </div>
  </div>
  <div
    class="headSlide fade"
    class:Image-show={HeadImageIndex === 2}
    on:click={() => plusSlides(1)}
  >
    <video src="/Videos/about-video3.mp4" autoplay muted loop></video>
    <div class="text long">
      <div class="vision">MISSIONSSSSS</div>

      <div>
        리부트커먼는 개인과 조직의 새로운 지평을 여는 촉진자를 지향합니다
      </div>
    </div>

    <div class="vision">VISION</div>
  </div>
</div>
<!-- <ScrollPlus /> -->
<ScrollPage />
<EducationContent />
<Email />

<style>
  @font-face {
    font-family: "Gmarket Sans TTF";
    src:
      url("/fonts/GmarketSans.woff2") format("woff2"),
      url("/fonts/GmarketSans.woff") format("woff"),
      url("/fonts/GmarketSans.ttf") format("truetype");
  }
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    width: 100%;
    /* height: 3000px; */
    overflow-x: hidden; /* Prevent horizontal scrollbars */
    box-sizing: border-box;
    background-color: f9f9f9;
  }
  .slideshow-container {
    position: relative;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    background: #000; /* Black background as fallback */
    overflow: hidden; /* Prevent internal scrollbars */
  }
  /* Fullscreen Page */
  .headSlide {
    position: absolute;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    background: #000; /* Black background as fallback */
    overflow: hidden; /* Prevent internal scrollbars */
    opacity: 0;
  }
  .Image-show {
    opacity: 1;
  }

  /* Fullscreen video background */
  .headSlide video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the video scales while maintaining aspect ratio */
  }

  /* Center the main text */
  .headSlide .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 596px;
    /* height: 239px; */
    text-align: center;
    color: white;
    font-size: 40px;
    font-family: Gmarket Sans TTF;
    font-weight: 700;
    line-height: 95px;
    word-wrap: break-word;
  }
  .headSlide .long {
    width: 700px;
  }
  .headSlide .vision {
    text-align: center;
    color: white;
    font-size: 27.77px;
    font-family: Gmarket Sans TTF;
    font-weight: 700;
    word-wrap: break-word;
  }

  /* Ensure ScrollPage is visible */
  ScrollPage {
    margin: 0;
    padding: 0;
  }
  .grid-overlay {
    align-self: center;
    display: grid;
    grid-template-columns: repeat(12, 80px); /* 12 columns, each 80px wide */
    gap: 24px; /* 24px gutter between columns */
    width: calc(
      12 * 80px + 11 * 24px
    ); /* Total width: 12 columns + 11 gutters */
    height: 100vh; /* Full viewport height */
    position: fixed; /* Overlay stays fixed on the screen */
    top: 50%; /* Vertically center */
    left: 50%; /* Horizontally center */
    transform: translate(-50%, -50%); /* Adjust for true centering */
    pointer-events: none; /* Allows interaction with elements below the grid */
    z-index: 1000; /* Ensure grid stays on top */
    background: rgba(0, 0, 0, 0.1); /* Optional semi-transparent background */
  }

  /* Individual columns for visualization */
  .grid-column {
    background: rgba(
      255,
      0,
      0,
      0.05
    ); /* Light red color for column highlight */
    height: 100%; /* Full height of the grid */
    border-left: 1px solid rgba(255, 0, 0, 0.1); /* Optional left border for clarity */
    border-right: 1px solid rgba(255, 0, 0, 0.1); /* Optional right border for clarity */
  }
  @media screen and (width > 1200px) and (width < 1400px) {
    .grid-overlay {
      display: grid;
      grid-template-columns: repeat(12, 1fr); /* 12 flexible columns */
      gap: 24px; /* Gutter size */
      width: calc(100% - 48px); /* Full width minus 24px margins on each side */
      padding: 0 24px; /* Margins to align with the layout */
      position: fixed; /* Stay fixed on the viewport */
      height: 100vh; /* Full height of the viewport */
      pointer-events: none; /* Allow interaction with content below */
      z-index: 1000; /* Ensure grid overlay stays on top */
      top: 50%; /* Align with the top of the viewport */
      left: 50%; /* Start from the left of the viewport */
    }

    .grid-column {
      background: rgba(
        255,
        0,
        0,
        0.05
      ); /* Light red for column visualization */
      height: 100%; /* Full height of the grid */
      border-left: 1px solid rgba(255, 0, 0, 0.1); /* Optional left border */
      border-right: 1px solid rgba(255, 0, 0, 0.1); /* Optional right border */
    }
  }
  @media screen and (width < 1200px) {
    .grid-overlay {
      display: grid;
      grid-template-columns: repeat(12, 1fr); /* 12 flexible columns */
      gap: 24px; /* Gutter size */
      width: calc(100% - 48px); /* Full width minus 24px margins on each side */
      padding: 0 24px; /* Margins to align with the layout */
      position: fixed; /* Stay fixed on the viewport */
      height: 100vh; /* Full height of the viewport */
      pointer-events: none; /* Allow interaction with content below */
      z-index: 1000; /* Ensure grid overlay stays on top */
      top: 50%; /* Align with the top of the viewport */
      left: 50%; /* Start from the left of the viewport */
      opacity: 0;
    }
    .small-grid-overlay {
      display: grid;
      grid-template-columns: repeat(6, 1fr); /* 12 flexible columns */
      gap: 24px; /* Gutter size */
      width: calc(100% - 48px); /* Full width minus 24px margins on each side */
      padding: 0 24px; /* Margins to align with the layout */
      position: fixed; /* Stay fixed on the viewport */
      height: 100vh; /* Full height of the viewport */
      pointer-events: none; /* Allow interaction with content below */
      z-index: 1000; /* Ensure grid overlay stays on top */
      top: 0; /* Align with the top of the viewport */
      left: 0; /* Start from the left of the viewport */
    }

    .grid-column {
      background: rgba(
        255,
        0,
        0,
        0.05
      ); /* Light red for column visualization */
      height: 100%; /* Full height of the grid */
      border-left: 1px solid rgba(255, 0, 0, 0.1); /* Optional left border */
      border-right: 1px solid rgba(255, 0, 0, 0.1); /* Optional right border */
    }
    .headSlide .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      max-width: 360px;

      text-align: center;
      color: white;
      font-size: 25px;
      font-family: Gmarket Sans TTF;
      font-weight: 700;
      line-height: 1.7;
      word-wrap: break-word;
    }
    .headSlide .vision {
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
</style>
