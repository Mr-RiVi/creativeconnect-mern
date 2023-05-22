import nodemailer from 'nodemailer';

// Function to send emails
const sendEmail = async (recipient, subject, body) => {
  try {
    // Create a transporter using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465 ,
      secure: true,
      SSL: true,
      auth: {
        user: 'msanjuladesilva@gmail.com',
        pass: 'zkwpihelkanwffdl',
      },
    });

    // Compose the email details
    const mailOptions = {
      from: 'projectopeninvent@gmail.com',
      to: recipient,
      subject: subject,
      text: body,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export { sendEmail };
