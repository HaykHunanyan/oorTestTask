const { Router } =require( "express");
const {Location } =require( "../controllers");
const router = Router();

router.post("/location", Location.CREATE);
router.get('/locations/:location_id',Location.GETBYID );
router.get("/location", Location.GET);
router.patch('/locations/:location_id', Location.PATCH);
router.patch('/locations', Location.UPDATE);
router.delete('/locations/:location_id', Location.DELETE);

module.exports = router;  