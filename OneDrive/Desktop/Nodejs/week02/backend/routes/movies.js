import express from "express";
import * as service from "../service/movie-service.js";

const router = express.Router();

/* GET movies listing. */
router.get("/", function (req, res, next) {
  const allMovies = service.getAllMovies();
  res.status(200).send(allMovies);
});

/** get a movie by id */
router.get("/:id", function (req, res, next) {
  let movieId = req.params.id;
  const movie = service.getMovieById(movieId);
  res.status(200).send(movie);
});

/** add new a movie  */

router.post("/", function (req, res, next) {
  let newMovie = req.body;
  const movie = service.createMovie(newMovie);
  res.status(200).send(movie);
});

/** delete a movie */

router.delete("/:id", function (req, res, next) {
  let movieId = req.params.id;
  service.deleteMovie(movieId);
  res.status(200).send(`${movieId} id li film silindi.`);
});

router.put("/:id", function (req, res, next) {
  let movieId = req.params.id;
  let pUpdatedMovie = req.body;
  let newMovie = service.updateMovie(movieId, pUpdatedMovie);
  res.status(200).send(newMovie);
});

export default router;
