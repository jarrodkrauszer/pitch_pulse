const { Category } = require('../models');

module.exports = {
  async getAllCategories(req, res) {
    try {
      const categories = await Category.find();

      res.status(200).json(categories)
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message)
    }
  },

  async getCategoryById(req, res) {
    try {
      const id = req.params.id
      const category = await Category.findById(id);

      res.status(200).json(category);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  },

  async createCategory(req, res) {
    try {
      const category = await Category.create(req.body)

      res.status(200).json(category);

    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  },

  async deleteCategoryById(req, res) {
    try {
      const id = req.params.id
      await Category.deleteOne({ _id: id });

      res.status(200).json({
        message: 'Category deleted successfully!',
      });

    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  },

  async updateCategoryById(req, res) {
    try {
      const category = await Category.updateOne({
        _id: req.params.id
      }, {
        $set: { name: req.body.name }
      });

      res.status(200).json(category);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err.message);
    }
  }
}