<div class="background" id="EducationContent">
  <div class="property-variant">
    <div class="education-contents">EDUCATION CONTENTS</div>
    <div class="content-container">
      <!-- Vision House -->
      <div class="content-item">
        <img
          src="/assets/EDUCATION CONTENTS/1.png"
          alt="Vision House"
          class="content-image"
        />
        <h3 class="content-title">비전하우스(비저닝 워크숍)</h3>
        <p class="content-description">
          비전하우스는 개인의 비전 발견을 통해 개인과 조직의 조화를 이루는
          비저닝 프로그램을 제공합니다.
        </p>
      </div>

      <!-- Entrepreneurship and Innovation -->
      <div class="content-item">
        <img
          src="/assets/EDUCATION CONTENTS/2.png"
          alt="Entrepreneurship and Innovation"
          class="content-image"
        />
        <h3 class="content-title">
          기업가정신과 혁신(창업가와 사내혁신 워크숍)
        </h3>
        <p class="content-description">
          기업가정신과 혁신은 창업자와 사내혁신을 위한 워크숍으로 창업의
          4차원(사람-혁신-비즈니스모델-자금조달)의 프레임워크를 통한 혁신 모델
          도출을 제공합니다.
        </p>
      </div>

      <!-- Career Shift -->
      <div class="content-item">
        <img
          src="/assets/EDUCATION CONTENTS/3.png"
          alt="Career Shift"
          class="content-image"
        />
        <h3 class="content-title">
          커리어 시프트(커리어 포트폴리오 코칭을 통한 미래 전략)
        </h3>
        <p class="content-description">
          커리어 시프트는 경영의 프레임워크를 조직 차원이 아닌 개인 차원으로
          접목하여 현 시점의 커리어와 백케스팅을 통한 다양한 미래 관점까지
          폭넓게 스케치하며 효과적인 커리어 포트폴리오 구축과 커리어 전략을
          기반한 워크숍과 멘토링 서비스를 제공합니다.
        </p>
      </div>

      <!-- Leadership and Innovation -->
      <div class="content-item">
        <img
          src="/assets/EDUCATION CONTENTS/4.png"
          alt="Leadership and Innovation"
          class="content-image"
        />
        <h3 class="content-title">리더십과 혁신(조직 구성원 리더십 워크숍)</h3>
        <p class="content-description">
          리더십은 리더, 팔로워, 상황의 상호작용으로서 조직 구성원의 리더십
          개발과 향상을 통해 혁신을 촉진하는 프로그램 제공과 조직 사내 갈등
          조율을 위한 프로그램 제공 및 멘토링 서비스를 제공합니다.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .background {
    width: 100%;
    padding-top: 40vh;
    background-color: #f9f9f9;
    font-family: "Gmarket Sans TTF";
  }
  .property-variant {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: f9f9f9;
  }

  .education-contents {
    font-family: "Gmarket Sans TTF";
    text-align: center;
    color: black;
    font-size: 50px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 40px;
  }

  .content-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    /* flex-direction: ; */
  }

  .content-item {
    flex: 1 1 calc(45% - 20px); /* Adjusts to 45% width with gaps */
    max-width: 400px;
    background: f9f9f9;
    /* border: 1px solid #ccc; */
    border-radius: 8px;
    padding: 20px;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    text-align: center;
  }

  .content-image {
    width: 100%;
    height: 320px;
    margin-bottom: 15px;
    border-radius: 4px;
    object-fit: contain;
  }

  .content-title {
    font-size: 24px;
    font-family: "Gmarket Sans TTF";
    font-weight: 700;
    line-height: 1.4;
    margin: 15px 0;
    color: black;
  }

  .content-description {
    font-family: "Gmarket Sans TTF";
    font-size: 14px;
    font-weight: 500;
    line-height: 1.6;
    color: black;
  }

  /* Responsive Design */
  @media (max-width: 1100px) {
    .content-container {
      font-size: 36px;
      flex-direction: columns;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    .content-item {
      flex: 1 1 100%; /* Full width on smaller screens */
    }

    .education-contents {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    .content-title {
      font-size: 20px;
    }

    .content-description {
      font-size: 12px;
    }
  }
</style>
