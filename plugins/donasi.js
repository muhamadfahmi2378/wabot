let handler = async m => m.reply(`
╭─「 Donate • Follow • Like • Comment • Share • Subscribe 」
│
│ • Telkomsel [082155313143]
│
│ • GoPay [082155313143]
│
│ • Dana [082155313143]
│
│ • FaceBook [https://web.facebook.com/mhmdfhmialmbrq]
│
│ • Instagram [https://www.instagram.com/mhmdfhmialmbrq]
│
│ • Twitter [https://twitter.com/mhmdfhmialmbrq]
│
│ • YouTube [https://www.youtube.com]
│
╰─「 Donate • Follow • Like • Comment • Share • Subscribe 」
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
