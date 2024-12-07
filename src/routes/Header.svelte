<script>
  import { onMount } from "svelte";

  onMount(() => {
    console.log("Page mounted");
  });
</script>

<div class="page1">
  <video src="/Videos/about-video1.mp4" autoplay muted loop></video>

  <div class="text">
    <span>
      리부트커먼는 혁신적 교육을 통해 자기다움을 발견하며 삶의
      <div class="_p"></div>
      재부팅을 실현합니다.
    </span>
  </div>

  <div class="vision">VISION</div>
</div>

<style>
  /* Ensure the page takes up the full screen */
  .page1 {
    position: relative;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    background: #000; /* Black background as fallback */
    overflow: hidden; /* Prevent scrolling */
  }

  /* Fullscreen video background */
  .page1 video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the video scales while maintaining aspect ratio */
  }

  /* Center the main text */
  .page1 .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center horizontally and vertically */
    color: #ffffff; /* White text for contrast */
    font-family: "Gmarket Sans TTF";
    font-size: 2.5rem;
    line-height: 1.5;
    text-align: center;
  }

  /* Place the vision text at the bottom, centered */
  .page1 .vision {
    position: absolute;
    bottom: 5%; /* Slightly above the bottom */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    color: transparent;
    -webkit-background-clip: text;
    font-family: "Gmarket Sans TTF", sans-serif;
    font-size: 1.74rem;
    line-height: 2.44rem;
    text-align: center;
  }
</style>
