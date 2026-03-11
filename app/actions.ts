'use server';

/**
 * Server action to send contact form data to Telegram.
 * Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in environment variables.
 */
export async function sendToTelegram(formData: FormData) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram credentials missing');
    return { success: false, error: 'Налаштування сервера не завершено.' };
  }

  const phone = formData.get('phone') as string;
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!phone) {
    return { success: false, error: 'Будь ласка, введіть номер телефону.' };
  }

  const text = `
🚀 **Нова заявка з сайту EVENT ART**

👤 **Ім'я:** ${name || 'Не вказано'}
📞 **Телефон:** ${phone}
💬 **Повідомлення:** ${message || 'Без повідомлення'}

---
Відправлено з вашого сайту.
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send to Telegram');
    }

    return { success: true };
  } catch (error) {
    console.error('Telegram Error:', error);
    return { success: false, error: 'Помилка при відправці. Спробуйте пізніше.' };
  }
}
