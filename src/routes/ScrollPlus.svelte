<script>
  import { onMount } from "svelte";

  let images = [
    "/assets/CORE_SERVICE/1.jpg",
    "/assets/CORE_SERVICE/2.jpg",
    "/assets/CORE_SERVICE/3.jpg",
    "/assets/CORE_SERVICE/4.jpg",
  ];
  let activeImageIndex = 0; // Current background image index

  const cards = [
    {
      id: 0,
      title: "Corporate Innovation Training",
      description:
        "사내 리더십과 새로운 BM개발을 위한 동적역량 기반의 사내혁신 교육을 제공합니다.",
    },
    {
      id: 1,
      title: "Entrepreneurship Training",
      description:
        "예비창업자와 창업가의 스케일업을 위한 기업가정신 교육과 창업 멘토링을 제공합니다.",
    },
    {
      id: 2,
      title: "Design Thinking Training",
      description:
        "확산적 사고와 수렴적 사고를 반복한 디자인적 사고의 창의성 기반 커리큘럼을 제공합니다.",
    },
    {
      id: 3,
      title: "Training Effectiveness Reports",
      description:
        "기업 HRD 담당자의 사내 교육 결과에 대한 전문적 교육 효과성 검증 레포트를 제공합니다.",
    },
  ];

  const updateActiveCard = () => {
    const viewportHeight = window.innerHeight / 2; // Center of the viewport
    let closestCardIndex = 0;
    let closestDistance = Infinity;

    const cardElements = document.querySelectorAll(".card");

    cardElements.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const distanceToCenter = Math.abs(viewportHeight - cardCenter);

      if (distanceToCenter < closestDistance) {
        closestDistance = distanceToCenter;
        closestCardIndex = index;
      }
    });

    activeImageIndex = closestCardIndex; // Update the active image index
  };

  onMount(() => {
    window.addEventListener("scroll", updateActiveCard);

    return () => {
      window.removeEventListener("scroll", updateActiveCard);
    };
  });
</script>

<!-- Background Images -->
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

<!-- Cards -->
<div class="cards-container">
  {#each cards as card, index}
    <div class="card">
      <h3 class="card-header">{card.title}</h3>
      <p class="card-description">{card.description}</p>
    </div>
  {/each}
</div>

<style>
  /* General Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* 
  body {
    font-family: "Gmarket Sans TTF", sans-serif;
    color: #333;
    line-height: 1.6;
    background: #f5f5f5;
    overflow-x: hidden;
  } */

  /* Background Images */
  .image-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .image-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .image-active {
    opacity: 1;
  }

  .image-inactive {
    opacity: 0;
  }

  /* Cards */
  .cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 100vh; /* Space to ensure scrolling starts */
    padding: 50px 20px;
  }

  .card {
    width: 90%;
    max-width: 300px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  .card-header {
    font-size: 18px;
    font-weight: bold;
    color: #8c28fe;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 14px;
    color: #555;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .card {
      width: 100%;
      max-width: none;
    }
  }
</style>
