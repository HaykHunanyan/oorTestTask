const { Location } = require('../models')

module.exports = {
    CREATE:async(req,res)=>{
        try {
            const location = new Location(req.body);
            await location.save();
            res.json({ location_id: location._id });
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
    },
    GET:async(req,res)=>{
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.page_size) || 10;
      const category = req.query.category || '';

      const query = {};
      if (category) {
        query.category = category;
      }

      try {
        const locations = await Location.find(query).skip((page - 1) * pageSize).limit(pageSize);
        res.json(locations);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
    GETBYID: async (req,res) => {
      try {
        const location = await Location.findById(req.params.location_id);
        if (!location) {
          return res.status(404).json({ message: 'Location not found' });
        }
        res.json(location);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },
    PATCH:async (req, res) => {
      const { location_id } = req.params;
    
      try {
        const location = await Location.findByIdAndUpdate(location_id, req.body, { new: true });
        if (!location) {
          return res.status(404).json({ message: 'Location not found' });
        }
        res.json({ message: 'Location updated successfully' });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    },
    UPDATE:async (req, res) => {
      const { category } = req.query;
      if (!category) {
        return res.status(400).json({ message: 'Category query parameter is required' });
      }
      try {
        const result = await Location.updateMany({ category: category }, req.body);
        res.json({ message: `Updated ${result.nModified} documents with category '${category}'` });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    },
    DELETE: async (req, res) => {
      const { location_id } = req.params;
      try {
        const location = await Location.findByIdAndDelete(location_id);
        if (!location) {
          return res.status(404).json({ message: 'Location not found' });
        }
        res.json({ message: 'Location deleted successfully' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
}