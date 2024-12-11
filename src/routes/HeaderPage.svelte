<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let isFixed = false;
  let images = [
    "/Videos/about-video1.mp4",
    "/Videos/about-video2.mp4",
    "/Videos/about-video3.mp4",
  ];
  let activeImageIndex = 0;

  const updateActiveImage = (index) => {
    activeImageIndex = index;
    console.log("Active Image Index:", activeImageIndex);
  };

  onMount(() => {
    console.log("onMount is working");

    const containers = gsap.utils.toArray(".container");
    containers.forEach((container, index) => {
      gsap.to(container, {
        autoAlpha: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: true,
          onEnter: () => updateActiveImage(index), // Update image index when text enters
          onEnterBack: () => updateActiveImage(index), // Handle scrolling back up
        },
      });
    });
  });
</script>

<div class="image-container">
  {#each images as image, index}
    <video
      src={image}
      alt="Background"
      class:image-active={index === activeImageIndex}
      class:image-inactive={index !== activeImageIndex}
      muted
      autoplay
      loop
    ></video>
  {/each}
</div>
<div class="outer_container">
  <div class="container">
    <div class="text">
      <span>
        리부트커먼는 혁신적 교육을 통해 자기다움을 발견하며 삶의 재부팅을
        실현합니다.
      </span>
    </div>
  </div>
  <div class="container">
    <div class="text">
      <div class="vision">VISION</div>

      <div>리부트커먼는 교육을 통해 혁신을 디자인합니다</div>
    </div>
  </div>
  <div class="container">
    <div class="text long">
      <div class="vision">MISSION</div>

      <div>
        리부트커먼는 개인과 조직의 새로운 지평을 여는 촉진자를 지향합니다
      </div>
    </div>
  </div>
</div>

<style>
  .container {
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
  .image-container video {
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
  .text {
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
</style>
