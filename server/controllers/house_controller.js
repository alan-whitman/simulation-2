module.exports = {
    getHouses(req, res) {
        let db = req.app.get('db');
        db.get_all_houses().then(dbRes => {
            res.status(200).send(dbRes)
        });
    },
    addNewHouse(req, res) {
        let db = req.app.get('db');
        const { name, address, city, state, zip, img, mortgage, rent } = req.body;
        const newHouse = {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        }
        db.add_new_house(newHouse).then(dbRes => {
            res.status(200).send(dbRes);
        })
    },
    deleteHouse(req, res) {
        let db = req.app.get('db');
        const { id } = req.params;
        db.delete_house(id).then(dbRes => {
            res.status(200).send(dbRes);
        })
    }
}