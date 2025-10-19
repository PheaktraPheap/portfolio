// server/api/telegram.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const { name, email, message } = body
    
    // Validate required fields
    if (!name || !email || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Name, email, and message are required'
      })
    }
    
    // Your Telegram bot token and chat ID
    const botToken = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN'
    const chatId = process.env.TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID'
    
    // Format the message for Telegram
    const telegramMessage = `
  📧 New Contact Form Submission
  
  Name: ${name}
  Email: ${email}
  Message: ${message}
  
  📅 Submitted at: ${new Date().toLocaleString()}
    `.trim()
    
    try {
      const response = await $fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        body: {
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML'
        }
      })
      
      return {
        success: true,
        message: 'Message sent successfully!'
      }
      
    } catch (error) {
      console.error('Telegram API error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send message to Telegram'
      })
    }
  })