const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST method to add a menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Data Saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET method to fetch all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Data Fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;

        const response = await MenuItem.findByIdAndDelete(menuId);
        if (!response) {
            return res.status(404).json({ error: 'Person Not Found' });
        }
        console.log('Data Deleted');
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router; // Export the router




// Route: Fetch all menu items or count by taste
// router.get("/", async (req, res) => {
//     try {
//         // Check if the request includes a "count=true" query parameter
//         if (req.query.count === 'true') {
//             // Aggregate to count menu items by taste
//             const counts = await MenuItem.aggregate([
//                 {
//                     $group: {
//                         _id: "$taste", // Group by the "taste" field
//                         count: { $sum: 1 }, // Count the number of documents for each taste
//                     },
//                 },
//             ]);
//             console.log('Taste Counts Fetched');
//             return res.status(200).json(counts); // Respond with the counts
//         }

//         // Otherwise, fetch all menu items
//         const data = await MenuItem.find();
//         console.log('Menu Data Fetched');
//         res.status(200).json(data); // Respond with all menu items
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// module.exports = router; // Export the router

