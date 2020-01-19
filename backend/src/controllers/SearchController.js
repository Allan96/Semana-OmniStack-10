const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
    async index(request, response) {
        // Buscar todos os devs em um raio de 10km
        // Filtrar por tecnologias
        // Operadores de filtros (https://docs.mongodb.com/manual/reference/operator/query/)
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000
                },
            }
        });

        console.log(techsArray);

        return response.json({
            devs
        })
    }
}