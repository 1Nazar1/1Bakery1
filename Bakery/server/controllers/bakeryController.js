const uuid = require('uuid')
const path = require('path');
const {Bakery, BakeryInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class BakeryController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const bakery = await Bakery.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    BakeryInfo.create({
                        title: i.title,
                        description: i.description,
                        bakeryId: bakery.id
                    })
                )
            }

            return res.json(bakery)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let bakeries;
        if (!brandId && !typeId) {
            bakeries = await Bakery.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            bakeries = await Bakery.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            bakeries = await Bakery.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            bakeries = await Bakery.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(bakeries)
    }

    async getOne(req, res) {
        const {id} = req.params
        const bakery = await Bakery.findOne(
            {
                where: {id},
                include: [{model: BakeryInfo, as: 'info'}]
            },
        )
        return res.json(bakery)
    }
}

module.exports = new BakeryController()