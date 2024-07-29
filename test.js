const fs = require('fs');
const axios = require('axios');

async function uploadImageToPresignedUrl(filePath, presignedUrl) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const fileType = 'image/png'; // Adjust the MIME type accordingly

    const response = await axios.put(presignedUrl, fileBuffer, {
      headers: {
        'Content-Type': fileType,
      }
    });

    if (response.status === 200) {
      console.log('File uploaded successfully');
    } else {
      console.error('Error uploading file, status:', response.status);
    }
  } catch (error) {
    console.error('Error uploading file', error);
  }
}

// Usage example:
const filePath = './image.png'; // Replace with your file path
const presignedUrl = "https://cotopaxi-api-s3-multimedia-staging-nonprod.s3.amazonaws.com/tmp/image4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2IV2QBA7ZLPJ2AKT%2F20240726%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240726T205236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLWVhc3QtMSJHMEUCIHcqFWuT%2FyhVc%2BmPOjh7Uf%2FD1WNPOmbABonL4DrV%2BoljAiEA98jzSB0HLe31Ar6W4xq4U3xOBMqj58B1DBqvZb417scqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3MDU4Mzk0OTkzMjciDLsAMPXT87haSVLBKyrcA3gx178M6UTaqw9kTo2e5Zx0PEEesgqqiNFjq6GJLXPMWaGJLurJPDz0rxW3%2Fcfwj4Pnub%2BA4aGL%2BzF%2Bc0E7PsN5%2Bs%2BqImT7U5HIFM%2F1NmgvtUNp8y4WbTrsKwx0lAekulrwaYasYl%2FQfnbMjQ%2FmbfD2ehMdIBHuABgo5aAJYTDfVnVvVQUaX0djfeGa2b6i9a5z7GbNyNaxBMi3ok4MPjFDK2DhLd1hYhY03i%2FDGz34AQSp19g1NBObsZ60FnUJ3Umep6sKScxSnjfwV%2BsyiAJSmX7aLbmFbctdFozxFepsHTC7ZYVhCjdbjS39I%2Bx9OXWYuRB4uvB7u6GU8hiWO7ifiigB1KKlVFK1W1HTt5V4cF7ttbZB6R79kfSqJAjp0vXNXZgUzk6o1K%2FBs7iHZMiUACMvYngCJiPnz4HSYav6u0jDJyYeTQt0PLvZ8RTn4q4d7VlJSg6FRTo1%2Fmju4jgChZreYB4qS5N4Q8bYwd0dMcXG8vPn6RjzmcEgBEaLN0HH3YtywTeNVJooNXK%2FqmgmTVybBHign8epwPonqoq1wPMcMRvAb0vp5cdRvbYpX4wBTdowTs10OcBWs9wGUKg%2BFxyZLxCOL9zWUXDI7JIrSM3h6%2B9KBaCi1lgEMOaMkLUGOqUBMUnxoRyDs8hPw2Sutt65Z2G2PxhnhE4MqVQPoikXobUlfaGEk3X7LcEBBH1olv00UKhNXlXBaNfveE%2B3ZjlWYHiw04C8gXjiDIwlqLZM8W6DCJdkMskyEZzXk97H2WjHOCXmDzdNSdA2%2BI6tAB%2FJNt1Y5IOJXrIWoAUfZPvfJMrEhueAHE1smd9fCOVaj2XeMqeMXTQ%2BNhz6bbBBso1Hmb42OvTD&X-Amz-Signature=0d4c9abe7372366f3f7a3551d1e7f33cbeb49e1c726b2a6fdc2d3fbcd79cd93d&X-Amz-SignedHeaders=host%3Bx-amz-meta-disposition%3Bx-amz-meta-vehicleid&x-amz-meta-disposition=0&x-amz-meta-vehicleid=1" // Replace with your presigned URL
uploadImageToPresignedUrl(filePath, presignedUrl);