<script>
  import { onMount } from "svelte";

  //   import Navbar from "./Navbar.svelte";

  onMount(() => {
    console.log("Page mounted");
  });
</script>

<div id="Navbar">
  <img src="/Images/Logo.png" class="Logo" alt="Logo" />

  <!-- Desktop Navigation -->
</div>

<div class="container">
  <div class="submission">문의가 정상적으로<br /> 제출되었습니다.</div>
  <div class="buttons">
    <a class="button" href="/">이전 화면으로 이동</a>
    <!-- <a href="/">link</a> -->
  </div>
</div>

<div class="footer">
  <div class="footer-bottom">
    <p>REBOOT COMMONS © COPYRIGHT 2024. <br />ALL RIGHTS RESERVED.</p>
  </div>
</div>

<style>
  .footer {
    font-family: Arial, sans-serif;
    /* background-color: #f9f9f9; */
    padding: 20px 40px;
    /* border-top: 1px solid #eee; */
    position: absolute;
    bottom: 0%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, 0%);
  }
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    color: #aaa;
  }
  .container {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    justify-content: center;
  }
  .submission {
    text-align: center;
    font-family: "Gmarket Sans TTF";
    font-size: 5vw;
    padding-bottom: 60px;
    word-break: keep-all;
  }
  .buttons {
    justify-self: center;
  }
  .button {
    padding: 18px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    background-color: white;
    color: black;
    border: 2px solid #8c28fe;
    border-radius: 24px;
    /* width: 200px; */
    /* height: 50px; */
    font-family: "Gmarket Sans TTF";
  }
  .button:hover {
    background-color: #8c28fe;
    color: white;
  }
  @font-face {
    font-family: "Gmarket Sans TTF";
    font-style: normal;
    font-weight: 100;
    src: url("$lib/fonts/GmarketSansTTFLight.ttf") format("truetype");
  }
  @font-face {
    font-family: "Gmarket Sans TTF";
    font-style: normal;
    font-weight: 500;
    src: url("$lib/fonts/GmarketSansTTFMedium.ttf") format("truetype");
  }
  @font-face {
    font-family: "Gmarket Sans TTF";
    font-style: normal;
    font-weight: 700;
    src: url("$lib/fonts/GmarketSansTTFBold.ttf") format("truetype");
  }

  :global(html),
  :global(body) {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    width: 100%;
    /* height: 3000px; */
    overflow-x: hidden; /* Prevent horizontal scrollbars */
    box-sizing: border-box;
    background-color: f9f9f9;
    /* height: 100vh; */
  }
  #Navbar {
    position: fixed;
    background-color: #ffffffca;

    top: 0;
    z-index: 1000;
    width: 80%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition:
      top 0.3s ease-in-out,
      background-color 0.3s ease;
  }
  /* Logo Styling */
  .Logo {
    max-height: 55%;
  }

  @media screen and (max-width: 1400px) {
    #Navbar {
      width: 95%;
      padding: 0 2.5%;
    }
  }

  @media screen and (max-width: 1200px) {
    /* .nav-links {
      display: none;
    } */

    /* .menu-icon {
      display: flex;
    } */
    .Logo {
      max-height: 48%;
    }
  }
  @media screen and (max-width: 961px) {
    .Logo {
      max-height: 45%;
    }
  }
  @media screen and (max-width: 780px) {
    #Navbar {
      background-color: #ffffff00;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
    }

    .Logo {
      max-height: 45%;
    }
  }
</style>
