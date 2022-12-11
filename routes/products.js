const express = require('express');
const { getProductByName } = require('../controllers/ProductController');
const router = express.Router();
const { uploadUserImages } = require("../middleware/multer");
const ProductController = require('../controllers/ProductController')

router.post('/createProduct',  uploadUserImages.single('image'), ProductController.createProduct)
router.put('/updateProductById/:id', ProductController.updateProductById)
router.delete('/deleteProductById/:id', ProductController.deleteProductById)
router.get('/getProductById/:id', ProductController.getProductById)
router.get('/getProductByName/:name', ProductController.getProductByName)
router.get('/getAll', ProductController.getAll)
router.get('/getProductByPrice/:price', ProductController.getProductByPrice)
router.get('/getProductsWithCategories', ProductController.getProductsWithCategories)
router.get("/getProductsSortered", ProductController.getProductsSortered )
router.post('/createProductOrder', ProductController.createProductOrder)


module.exports = router;