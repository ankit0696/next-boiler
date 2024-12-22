import Mailgun from "mailgun.js";
import FormData from "form-data";

export const sendEmail = async (toEmail: string, subject: string, body: string) => {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    });
    return await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: 'mailgun@' + process.env.MAILGUN_DOMAIN,
        to: toEmail,
        subject,
        text: body,
    });

    // Example usage in page
    // try {
    //     await sendEmail(
    //         'abc@gmail.com',
    //         'Hello from Next.js',
    //         'This is a test email sent from Next.js using Mailgun.'
    //     );
    //     console.log('Email sent successfully!');
    // } catch (error) {
    //     console.error('Error sending email:', error);
    //     // Handle error
    // }
}

