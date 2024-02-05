const express = require('express')
const mongoose = require('mongoose');
const Movie = require('./models/movie')
const Person =require('./models/person')
const Cast = require('./models/cast')
const Theatre= require('./models/theatre')
const Screen =require('./models/screen')
const Show =require('./models/show')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/movies',async (req, res) => {
  const movies = await Movie.find({})
  res.status(200).json(movies)
})

app.post('/movies', async (req,res) =>{
    const movie =await Movie(req.body)
    await movie.save()
    res.status(201).json(movie)
})

app.get('/movies/:movieId',async(req,res)=>{
  const movie =await Movie.findById(req.params.movieId).exec();
  res.status(200).json(movie)
})

app.get('/movies/:movieId/cast',async(req,res)=>{
  const cast =await Cast.find( {movie: req.params.movieId}).populate('person');
  res.status(200).json(cast)
})

app.get('/movies/:movieId/shows',async(req,res)=>{
  const shows =await Show.find( {movie: req.params.movieId}).populate('screen');
  res.status(200).json(shows)
})
app.get('/shows/:showId',async(req,res)=>{
  const show =await Show.findById( req.params.showId).populate('screen');
  res.status(200).json(show)
})



app.get('/persons',async (req, res) => {
  const persons = await Person.find({})
  res.status(200).json(persons)
})

app.post('/persons', async (req,res) =>{
  const person =await Person(req.body)
  await person.save()
  res.status(201).json(person)

})

app.get('/casts',async (req, res) => {
  const casts = await Cast.find({})
  res.status(200).json(casts)
})

app.post('/casts', async (req,res) =>{
  const cast =await Cast(req.body)
  await cast.save()
  res.status(201).json(cast)

})
app.get('/theatres',async (req, res) => {
  const theatres = await Theatre.find({})
  res.status(200).json(theatres)
})

app.post('/theatres', async (req,res) =>{
  const theatre =await Theatre(req.body)
  await theatre.save()
  res.status(201).json(theatre)

})

app.get('/screens',async (req, res) => {
  const screens = await Screen.find({})
  res.status(200).json(screens)
})
app.post('/screens', async (req,res) =>{
  const screen =await Screen(req.body)
  await screen.save()
  res.status(201).json(screen)

})

app.get('/shows',async (req, res) => {
  const shows = await Show.find({})
  res.status(200).json(shows)
})

app.post('/shows', async (req,res) =>{
  const show =await Show(req.body)
  await show.save()
  res.status(201).json(show)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(()=>{console.log("db connected")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:XAgPqShTaNf5xX5Q@cluster0.tpbku8t.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}