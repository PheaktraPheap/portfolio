export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, subject, message } = body

  if (!email || !subject || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Email, subject, and message are required' })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN'
  const chatId = process.env.TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID'

  const telegramMessage = `
📧 New Contact Form Submission

Email: ${email}
Subject: ${subject}
Message: ${message}

📅 Submitted at: ${new Date().toLocaleString()}
  `.trim()

  try {
    await $fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      body: { chat_id: chatId, text: telegramMessage, parse_mode: 'HTML' }
    })
    return { success: true }
  } catch (error) {
    console.error('Telegram API error:', error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send message to Telegram' })
  }
})
