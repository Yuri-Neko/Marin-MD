let handler = async (m, {command, conn}) => {
    if (command == 'nsfwloli') {
        m.reply('_sedang di proses_')
        let maha = await conn.getFile(`https://api-kyouka.herokuapp.com/api/nsfw/milf?apikey=loli`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, maha.data, [['Lanjut Bro', `/${command}`]], m)
    } else {
        m.reply('_sedang di proses_')
        let maha = await conn.getFile(`https://api-kyouka.herokuapp.com/api/nsfw/${command.replace('nsfw', '')}?apikey=loli`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, maha.data, [['Lanjut Bro', `/${command}`]], m)
    }
}

handler.help = ['milf']
handler.command = ['milf']
handler.tags = ['nsfw']
handler.premium = true
export default  handler
