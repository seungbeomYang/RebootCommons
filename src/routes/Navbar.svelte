<script>
  import { onMount } from "svelte";

  let navbarTop = "0"; // Default navbar position
  let topScroll = true; // Track if the scroll is at the top
  let isMenuOpen = false; // Toggle for the mobile menu

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  onMount(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Hide/show navbar on scroll
      navbarTop = prevScrollpos > currentScrollPos ? "0" : "-80px";

      // Check if the scroll is at the top
      topScroll = window.scrollY === 0;

      prevScrollpos = currentScrollPos;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div
  id="Navbar"
  style="top: {navbarTop}"
  class:whenTop={topScroll === true}
  class:menu-open={isMenuOpen}
>
  <img src="/Images/Logo.png" class="Logo" alt="Logo" />

  <!-- Desktop Navigation -->
  <nav class="nav-links">
    <a href="#ABOUT" class="nav-link">ABOUT</a>
    <a href="#CoreService" class="nav-link">CORE SERVICE</a>
    <a href="#Educationcontent" class="nav-link">EDUCATION CONTENTS</a>
    <a href="#CONTACTS" class="nav-link">CONTACTS</a>
  </nav>

  <!-- Hamburger Menu Icon -->
  <!-- <div
    class="menu-icon"
    on:click={toggleMenu}
    class:whenTop={topScroll === true}
  >
    <span></span>
    <span></span>
    <span></span>
  </div> -->

  <!-- Mobile Menu -->
  <!-- {#if isMenuOpen}
    <div class="mobile-menu">
      <div class="mobile-link" on:click={toggleMenu}>ABOUT</div>
      <div class="mobile-link" on:click={toggleMenu}>Core Service</div>
      <div class="mobile-link" on:click={toggleMenu}>Education CONTENTS</div>
      <div class="mobile-link" on:click={toggleMenu}>CONTACTS</div>
    </div>
  {/if} -->
</div>

<style>
  /* General Navbar Styles */
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

  #Navbar.whenTop {
    background-color: transparent;
    color: white;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    color: black;
  }
  .whenTop a {
    text-decoration: none;
    background-color: transparent;
    color: white;
  }

  #Navbar.menu-open {
    background-color: #ffffff;
  }

  /* Logo Styling */
  .Logo {
    max-height: 55%;
  }

  /* Navigation Links */
  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    font-family: "Gmarket Sans TTF", sans-serif;
    font-size: 1rem;
    /* color: black; */
    cursor: pointer;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #8c28fe;
  }

  /* Hamburger Menu */
  .menu-icon {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .menu-icon span {
    width: 25px;
    height: 3px;
    background-color: black;
    transition: all 0.3s ease;
  }
  #Navbar.whenTop .menu-icon span {
    background-color: white;
  }

  /* Mobile Menu */
  .mobile-menu {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .mobile-link {
    font-family: "Gmarket Sans TTF", sans-serif;
    font-size: 1rem;
    color: black;
    padding: 0.5rem 20px;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .mobile-link:hover {
    color: #8c28fe;
  }

  /* Responsive Styles */
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
    .nav-link {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 961px) {
    /* .nav-links {
      display: none;
    } */

    /* .menu-icon {
      display: flex;
    } */
    .Logo {
      max-height: 45%;
    }
    .nav-link {
      font-size: 13px;
      /* gap: 3px; */
    }
    .nav-links {
      gap: 20px;
    }
  }
  @media screen and (max-width: 780px) {
    .nav-links {
      display: none;
    }
    #Navbar {
      background-color: #ffffff00;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
    }

    .menu-icon {
      display: flex;
    }
    .Logo {
      max-height: 45%;
    }
    .nav-link {
      font-size: 13px;
      /* gap: 3px; */
    }
    .nav-links {
      gap: 20px;
    }
  }
</style>
