import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const name = formData.get("name");
      const phone = formData.get("phone");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const body = formData.get("message");

      console.log("Form Data:", { name, phone, email, subject, body });

      const html = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #8c28fe;">New Inquiry from ${name}</h2>
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
        bcc: "contact@rebootcommons.com ",
        subject: `New Inquiry: ${subject}`,
        text: body,
        html: html,
      };

      // Send the email
      await transporter.sendMail(message);

      // Redirect to the submission page
      return {
        status: 303, // Redirect
        headers: {
          location: "/submission", // Thank-you page
        },
      };
    } catch (error) {
      console.error("Error sending email:", error);
      return {
        status: 500,
        body: { error: "Failed to send email. Please try again later." },
      };
    }
  },
};