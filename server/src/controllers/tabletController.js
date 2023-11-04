
const { Tablet } = require("../models");
module.exports = {
  //show all tablet
  async index(req, res) {
    try {
      const tablets = await Tablet.findAll();
      res.send(tablets);
    } catch (error) {
      res.status(500).send({
        error: "The tablets information was incorrect",
      });
    }
  },

  //create tablet
  async create(req, res) {
    try {
      const tablet = await Tablet.create(req.body);
      res.send(tablet.toJSON());
    } catch (error) {
      res.status(500).send({
        error: "The create tablet information was incorrect",
      });
    }
  },

  //edit tablet
  async put(req, res) {
    try {
      await Tablet.update(req.body, {
        where: {
          id: req.params.tabletId,
        },
      });
      res.send(req.body);
    } catch (error) {
      res.status(500).send({
        error: "Update tablet information was incorrect",
      });
    }
  },

  // delete tablet
  async delete(req, res) {
    try {
      const tablet = await Tablet.findOne({
        where: {
          id: req.params.tabletId,
        },
      });
      if (!tablet) {
        return res.status(403).send({
          error: "The tablet id is not found",
        });
      }
      await tablet.destroy();
      res.send(tablet);
    } catch (error) {
      res.status(500).send({
        error: "Delete tablet information was incorrect",
      });
    }
  },

  // show tablet by id
  async show(req, res) {
    try {
      const tablet = await Tablet.findOne({
        where: {
          id: req.params.tabletId,
        },
      });
      if (!tablet) {
        return res.status(403).send({
          error: "The tablet id is not found",
        });
      }

      res.send(tablet);
    } catch (error) {
      res.status(500).send({
        error: "tablet information was incorrect",
      });
    }
  },
};
