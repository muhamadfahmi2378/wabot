let handler = function (m) {
  // this.sendContact(m.chat, '6281352128440', 'Fahmi', m)
  this.sendContact(m.chat, '6281352128440', 'Fahmi', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
