const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Esta función es el "robot" que simula la búsqueda
app.post('/amigos_en_comun', async (req, res) => {
    try {
        const { usuario1, usuario2 } = req.body;

        // **NOTA:** Aquí es donde iría la lógica real para conectarse a la API de Roblox.
        // Por ahora, usamos datos de ejemplo para que puedas probar la aplicación.
        
        const amigosDeKorkas234 = ['@Luisprojiji1', '@maria_pro', '@amigo_aleatorio'];
        const amigosDeKorkas321 = ['@Juanito_perez', '@Luisprojiji1', '@otro_amigo_mas'];
        
        let amigos1, amigos2;
        if (usuario1 === '@korkas234' && usuario2 === '@korkas321') {
            amigos1 = amigosDeKorkas234;
            amigos2 = amigosDeKorkas321;
        } else {
            amigos1 = [];
            amigos2 = [];
        }

        const amigosEnComun = amigos1.filter(amigo => amigos2.includes(amigo));

        res.status(200).json({
            success: true,
            amigos: amigosEnComun
        });

    } catch (error) {
        console.error('Error en la búsqueda:', error);
        res.status(500).json({
            success: false,
            message: "Ocurrió un error en el servidor."
        });
    }
});

module.exports = app;