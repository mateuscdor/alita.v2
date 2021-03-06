const thiccysapi = require('textmaker-thiccy');

const graffiti = (style, name)=>{
    let url = ""; 
    switch (style) {

        case "sand":
            url = "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
        break;
        case "beach":
            url = "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"
        break;
        case "blood":
            url = "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
        break;
        case "leaves":
            url = "https://textpro.me/natural-leaves-text-effect-931.html"
        break;
        case "graffiti":
            url = "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
        break;
        case "neon":
            url = "https://textpro.me/create-neon-light-on-brick-wall-online-1062.html";
        break;
        case "glitch":
            url = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html";
        break;
        case "spark":
            url = "https://textpro.me/firework-sparkle-text-effect-930.html";
        break;
        default:
            url =  "https://textpro.me/natural-leaves-text-effect-931.html"
        break;
    }
    return new Promise((resolve, reject) => {
        thiccysapi.textpro(url,
        name
        ).then(async (data) => { 
            
            try {
                console.log(data) 
                resolve({
                    data
                })
                
            } catch(err) { 
                console.log(err)
                reject('Err Downloading Graffiti')
            } 
            
        
        }); 
    })     
}
module.exports.graffiti = graffiti;
