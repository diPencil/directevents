# DirectEvents Backend API

Express.js server for handling booking form submissions and sending confirmation emails.

## Setup

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
cd backend
npm install
```

### Configuration

Create a `.env.local` file in the backend directory with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@directevents.click
SMTP_PASS=>oHwxDKC|9aL

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Server Configuration
PORT=5000
NODE_ENV=development
```

## Running the Server

### Development
```bash
npm run dev
```

Server will start on `http://localhost:5000` and automatically reload on file changes.

### Production
```bash
npm start
```

## API Endpoints

### POST /api/booking
Handle booking form submission and send confirmation email.

**Request Body:**
```json
{
  "bookingType": "single",
  "fullName": "محمود شعبان",
  "email": "user@example.com",
  "phone": "1001234567",
  "countryCode": "+966",
  "jobTitle": "مدير",
  "eventName": "مؤتمر التكنولوجيا",
  "eventType": "conference",
  "organization": "شركة XYZ",
  "expectedAttendance": "500",
  "eventDate": "2025-06-15",
  "country": "SA",
  "location": "الرياض",
  "services": ["hotel", "airport"],
  "language": "ar"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Booking request received successfully",
  "bookingNumber": "CONF-g8f9hj0-ABCDE",
  "email": "user@example.com"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-04-02T10:30:00.000Z"
}
```

## Email Template

The booking confirmation email includes:
- Booking reference number
- User contact information
- Event details
- Selected services
- Professional footer with contact information

Available in both Arabic and English based on the `language` parameter.

## Error Handling

The API validates all incoming data using Zod schema validation. Common errors:
- Missing required fields
- Invalid email format
- SMTP connection failures
- Invalid country codes

## SMTP Configuration Notes

- **Host:** smtp.hostinger.com
- **Port:** 465 (SSL/TLS)
- **Username:** info@directevents.click
- **Password:** Stored securely in `.env.local`

## Development Notes

- Uses ES6 modules (`"type": "module"` in package.json)
- Nodemailer handles SMTP connection pooling automatically
- CORS is configured to allow requests from frontend origins
- Error messages are sanitized in production mode

## Deployment

When deploying to production:
1. Set `NODE_ENV=production`
2. Update `FRONTEND_URL` to your production domain
3. Ensure `.env.local` is **not** committed to git
4. Add `.env.local` to `.gitignore`
5. Configure environment variables on your hosting platform

## Testing Email

To test the email sending functionality:

```bash
curl -X POST http://localhost:5000/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "bookingType": "single",
    "fullName": "Test User",
    "email": "your-email@example.com",
    "phone": "1234567890",
    "countryCode": "+966",
    "jobTitle": "Manager",
    "eventName": "Test Event",
    "eventType": "conference",
    "expectedAttendance": "100",
    "eventDate": "2025-06-15",
    "country": "SA",
    "location": "Riyadh",
    "services": [],
    "language": "ar"
  }'
```

## Support

For issues or questions, contact: info@directevents.click
