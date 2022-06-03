const { WAConnection } = require('@adiwajshing/baileys');
const fs = require('fs');

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'

        client.on('qr', () => {
        })

        fs.existsSync('./Herrera.json') && client.loadAuthInfo('./Herrera.json')

        client.on('connecting', () => {
        console.log('Conectando')
        })

        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Herrera.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        }

iniciar ()
.catch (err => console.log("unexpected error: " + err))

Y LISTO!!

Tenemos nuestra pequeña basecita de un Botcito.

Lo que queda es instalar y probar que funcione, para eso usamos termux, y los comandos:

pkg install git
pkg install bash
pkg install nodejs

git clone (link de su repositorio)
cd (nombre de su repositorio)
bash install.sh / si cambiaron el nombre, escriban como le pusieron a su archivo
npm start

Si hicieron todo bien, les aparecera un codigo QR, el cual deberan escanear en el apartado 'WhatsApp Web' de la Aplicacion de WhatsApp

 

Esto fue la primera seccion, si te a gustado e interesado, puedes pasar a la siguiente seccion
