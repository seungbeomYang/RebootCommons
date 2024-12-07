<div id="CONTACTS" class="background">
  <div class="contact-form-container">
    <h1 class="form-title">Contact</h1>
    <p class="form-subtitle">
      문의사항은 아래로 연락주시면 빠르게 답변 드리겠습니다.
    </p>
    <form action="#" method="POST" class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">성명*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="inquiry">문의사항*</label>
          <select id="inquiry" name="inquiry" required>
            <option value="" disabled selected>선택하세요</option>
            <option value="general">일반 문의</option>
            <option value="support">지원 요청</option>
            <option value="feedback">피드백</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="phone">휴대폰 번호</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div class="form-group">
          <label for="email">이메일 주소*</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div class="form-group">
        <label for="subject">제목*</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div class="form-group">
        <label for="message">내용*</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <div class="form-group">
        <label class="checkbox-container">
          <input type="checkbox" id="privacy" name="privacy" required />
          <span>개인정보 수집 및 이용에 동의합니다. <a href="#">보기</a></span>
        </label>
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
    padding: 20px;
    background-color: #f9f9f9;
    font-family: "Gmarket Sans TTF";
  }

  .contact-form-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .form-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
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

  .checkbox-container {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  .checkbox-container a {
    color: #007bff;
    text-decoration: none;
  }

  .checkbox-container a:hover {
    text-decoration: underline;
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
    background-color: #555;
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

    .form-subtitle {
      font-size: 0.8rem;
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
