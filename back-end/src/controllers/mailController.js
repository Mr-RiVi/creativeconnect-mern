import { sendEmail } from '../services/mailService.js';
import Mail from '../models/mail.js';

// Function to send email using the Mail model data
const sendMailToClients = async (req, res) => {
  try {
    const { title, text, description, date, time } = req.body;

    // Save the email details to the database using the Mail model
    const newMail = new Mail({
      title,
      text,
      description,
      date,
      time,
    });
    await newMail.save();

    // Compose the email content
    const recipients = ['msanjuladesilva@gmail.com', 'blackdraganinark@gmail.com', 'it21032592@my.sliit.lk', 'it21067242@my.sliit.lk'];
    const subject = 'New Meeting';
    const body = `
      Dear Sir/Madam,

      Here are the details of the upcomming meeting:

      - Title: ${title}
      - instructor: ${text}
      - Description: ${description}
      - Date: ${date}
      - Time: ${time}

      Thank you.
    `;

    // Send the email to each recipient
    for (const recipient of recipients) {
      await sendEmail(recipient, subject, body);
    }

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export { sendMailToClients };
