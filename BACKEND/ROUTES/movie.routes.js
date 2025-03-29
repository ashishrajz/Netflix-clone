import express from "express";
const router= express.Router();
import {getTrendingMovie,getMovieTrailer,getMovieDetails,getSimilarMovies,getMoviesByCategory} from '../CONTROLLERS/movie.controller.js'

router.get("/trending",getTrendingMovie);
router.get("/:id/trailer",getMovieTrailer);
router.get("/:id/details",getMovieDetails);
router.get("/:id/similar",getSimilarMovies);
router.get("/:category",getMoviesByCategory)


export default router;