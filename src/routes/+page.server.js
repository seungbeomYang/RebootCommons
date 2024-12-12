
import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const name = formData.get("name");
      const inquiry = formData.get("inquiry");
      const phone = formData.get("phone");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const body = formData.get("message");

      console.log(body);

      // let html = `<h2>Hi!</h2><pre>${body}</pre>`;
      let html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
    <h2 style="color: #8c28fe;">New Inquiry from ${name}</h2>
    <p><strong>Inquiry Type:</strong> ${inquiry}</p>
    <p><strong>Phone Number:</strong> ${phone || "Not Provided"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <div style="margin-top: 20px; padding: 10px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;">
      <strong>Message:</strong>
      <p style="margin-top: 10px;">${body}</p>
    </div>
  </div>
`;

      const message = {
        from: email,
        to: GOOGLE_EMAIL,
        bcc: "rebootcommons@gmail.com",
        subject:`New Inquiry: ${subject}`,
        text: body,
        html: html,
      };

      const sendEmail = async (message) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(message, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };

      await sendEmail(message);

      return {
        success: "Email is sent",
      };
    } catch (error) {
      console.error(error);
    }
  },
};