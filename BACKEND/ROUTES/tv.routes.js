import express from "express";
const router= express.Router();
import {getTrendingTv,getTvTrailer,getTvDetails,getSimilarTvs,getTvsByCategory} from '../CONTROLLERS/tv.controller.js'

router.get("/trending",getTrendingTv);
router.get("/:id/trailer",getTvTrailer);
router.get("/:id/details",getTvDetails);
router.get("/:id/similar",getSimilarTvs);
router.get("/:category",getTvsByCategory);


export default router;