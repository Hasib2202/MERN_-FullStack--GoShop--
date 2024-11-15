// const verifyEmailTemplate = ({ name, url }) => {
//   return `
// <p>Dear ${name},</p>    
// <p>Thank you for registering GoShop.</p>   
// <a href=${url} style="color:black;background :orange;margin-top : 10px,padding:20px,display:block">
//     Verify Email
// </a>
// `;
// };

// export default verifyEmailTemplate;


const verifyEmailTemplate = ({ name, url }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Email Verification</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
          <h2 style="color: #333333;">Email Verification</h2>
          <p style="color: #666666;">Dear ${name},</p>
          <p style="color: #666666;">Thank you for registering with GoShop. Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${url}" 
               style="background-color: #ff9800; 
                      color: #ffffff; 
                      padding: 12px 30px; 
                      text-decoration: none; 
                      border-radius: 5px; 
                      display: inline-block;">
              Verify Email
            </a>
          </div>
          <p style="color: #666666;">If you didn't create an account, you can safely ignore this email.</p>
          <p style="color: #666666;">Best regards,<br>The GoShop Team.</p>
        </div>
      </body>
    </html>
  `;
};

export default verifyEmailTemplate;