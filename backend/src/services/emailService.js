import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Create SMTP transporter (Optimized for reliability)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Helps avoid 'self-signed certificate' errors
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('✅ SMTP Server Ready. Messages can be sent.');
  }
});

/**
 * Send email with booking confirmation
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} text - Email text content
 * @returns {Promise<boolean>} - Success status
 */
/**
 * Send email with booking confirmation
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string|object} content - Email text or object with {text, html}
 * @returns {Promise<boolean>} - Success status
 */
export async function sendEmail(to, subject, content) {
  const isObject = typeof content === 'object';
  const text = isObject ? content.text : content;
  const html = isObject ? content.html : undefined;

  try {
    const info = await transporter.sendMail({
      from: `"Direct Events" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
      replyTo: process.env.SMTP_USER,
    });

    console.log(`📧 Email sent successfully! Message ID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

export default transporter;
