const router = require("express").Router();
const ProductController = require("../controllers/productController");
const { authentication } = require("../middleware/auth");

router.post("/", authentication, ProductController.createProduct);
router.get("/", authentication, ProductController.getAllProducts);
router.put("/:productId", authentication, ProductController.updateProductById);
router.patch("/:productId", authentication, ProductController.updateProductById);
router.delete("/:productId", authentication, ProductController.deleteProductById);

module.exports = router;