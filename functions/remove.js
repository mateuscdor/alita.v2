module.exports = {
    async handleRemove(info, m, sock){
        if(info.isGroup == true)
        {
            if(info.groupAdmins.includes(info.botId)==false)
            {
                sock.sendMessage(m.key.remoteJid, { text: "👸🏾 I am not an admin yet."}, {quoted: m})
            }
            let sender = m.key.participant;
            console.log("Sender: "+sender)
            if(info.groupAdmins.includes(sender)==false)
            {
                sock.sendMessage(m.key.remoteJid, { text: "🤹🏾 You are not an admin professor."}, {quoted: m})
            }
            
            if(info.body.split(" ")< 2)
            {
                sock.sendMessage(m.key.remoteJid, { text: "👸🏾 Tag the user to kick."}, {quoted: m})
            }
            else
            {
                console.log("Remove fun")
                if(info.groupAdmins.includes(info.botId)==true && info.groupAdmins.includes(sender)== true)
                {
                    console.log("Remove fun2")
                    try {
                        console.log("Remove fun3")
                        sock.sendMessage(m.key.remoteJid, { text: "👸🏾Kicking user(s)."}, {quoted: m})
                        for(var i =0; i< info.args.split(" ").length ;i++)
                        {
                            var tobeKicked = info.args.replace("@","").replace(" ","")+"@s.whatsapp.net"
                            console.log("Remove fun4"+ tobeKicked)
                            const response = await sock.groupParticipantsUpdate(
                                info.sender, 
                                [tobeKicked],
                                "remove" 
                            )

                        }
                        
                        
                        
                    } catch (error) {
                        console.log("Count not remove user: "+error)
                    }
                    
                }

            }
            
            

        }
    }
}