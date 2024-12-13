<script>
  export let form;
</script>

<!-- <div class="wrapper">
  <fieldset>
    <legend>Send Emails</legend>
    <form method="POST">
      <div class="input">
        <label for="to">To:</label>
        <input name="to" type="email" value="hello@crocodaily.com" />
      </div>
      <div class="input">
        <label for="subject">Subject:</label>
        <input name="subject" type="text" />
      </div>
      <div class="input">
        <label for="body">Body:</label>
        <textarea name="body" rows="6"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
    <p class="success"></p>
  </fieldset>
</div> -->

<div id="CONTACTS" class="background">
  <div class="contact-form-container">
    <h1 class="form-title">CONTACT</h1>

    <form method="POST" class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">성명*</label>
          <input type="text" name="name" />
        </div>
        <!-- <div class="form-group">
          <label for="inquiry">문의사항*</label>
          <input type="text" name="inquiry" />
        </div> -->
        <div class="form-group">
          <label for="email">이메일 주소*</label>
          <input type="email" name="email" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="phone">휴대폰 번호</label>
          <input type="tel" name="phone" />
        </div>
        <div class="form-group">
          <label for="subject">제목*</label>
          <input type="text" name="subject" />
        </div>
      </div>

      <div class="form-group">
        <label for="message">내용*</label>
        <textarea name="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="submit-button">문의하기</button>
    </form>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }

  /* General Styles */
  .background {
    width: 100%;
    height: 100vh;
    /* padding: 20px; */
    background-color: #f9f9f9;
    font-family: "Gmarket Sans TTF";
    z-index: 100;
    position: relative;
  }

  .contact-form-container {
    /* max-width: 600px; */
    position: absolute;
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
    margin: 5%;
    padding: 5%;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    outline: solid;
    outline-width: 3px;
    outline-color: #8c28fe;
  }

  .form-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    padding-bottom: 20px;
  }

  .form-subtitle {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .form-row {
    display: flex;
    gap: 25px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .form-group label {
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  select,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    resize: none;
  }


  .submit-button {
    padding: 12px;
    background-color: f9f9f9;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }

  .submit-button:hover {
    background-color: #8c28fe;
  }

  .submit-button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .form-row {
      flex-direction: column;
    }

    .contact-form-container {
      padding: 15px;
    }

    .form-title {
      font-size: 1.5rem;
    }

    .form-subtitle {
      font-size: 0.9rem;
    }

    .submit-button {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .form-title {
      font-size: 1.2rem;
    }

    

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select,
    textarea {
      font-size: 0.9rem;
    }

    .submit-button {
      font-size: 0.8rem;
    }
  }
</style>
