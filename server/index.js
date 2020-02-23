require('dotenv').config();
require('newrelic');

const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());

/////////////////////////////////// reviews proxy /////////////////////////////////////////
app.get('/reviews/:restaurantId', (req, res) => {
  axios.get(`${process.env.REVIEWS_URL}/reviews/${req.params.restaurantId}`)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from reviews: ', err);
    });
});

app.get('/reviews/sort/:id/:sorting/:list', (req, res) => {
  const {id, sorting, list} = req.params;
  axios.get(`${process.env.REVIEWS_URL}/reviews/sort/${id}/${sorting}/${list}`)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from reviews: ', err);
    });
});

app.post('/api/reviews', (req, res) => {
  axios.post(`${process.env.REVIEWS_URL}/api/reviews`, req.body)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from reviews: ', err);
    });
});

///////////////////////////////////////// photos ///////////////////////////////////////////
app.get('/api/photos/:id', (req, res) => {
  axios.get(`${process.env.PHOTOS_URL}/api/photos/${req.params.id}`)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from photos: ', err);
    });
});

app.post('/api/add_photo', (req, res) => {
  axios.get(`${process.env.PHOTOS_URL}/api/add_photo`, req.body)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from photos: ', err);
    });
});

///////////////////////////////////////// reservations ////////////////////////////////////////
app.get('/api/reservations/:restaurantId', (req, res) => {
  axios.get(`${process.env.RESERVATIONS_URL}/api/reservations/${req.params.restaurantId}`)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from photos: ', err);
    });
});

app.post('/api/reservations', (req, res) => {
  axios.get(`${process.env.RESERVATIONS_URL}/api/reservations`, req.body)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from photos: ', err);
    });
});

/////////////////////////////////////////////// menus /////////////////////////////////////////
app.get('/api/restaurantTitle/:restaurantId', (req, res) => {
  axios.get(`${process.env.MENUS_URL}/api/restaurantTitle/${req.params.restaurantId}`)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from photos: ', err);
    });
});

app.get('/api/restaurant/:restaurantId', (req, res) => {
  axios.get(`${process.env.MENUS_URL}/api/restaurant/${req.params.restaurantId}`)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from photos: ', err);
    });
});

app.post('/api/menu/:restaurantId', (req, res) => {
  axios.get(`${process.env.MENUS_URL}/api/menu/${req.params.restaurantId}`, req.body)
    .then(({data}) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('error getting from photos: ', err);
    });
});


/////////////// express ///////////////////
const port = process.env.PROXY_PORT || 3043;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
