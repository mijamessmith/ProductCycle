const express = require('express');
const axios = require('axios');
const productController = require('./controller/products').productController;
const reviewController = require('./controller/reviews').reviewController;
const relatedProductRoutes = require('./routes/relatedProducts').relatedProducts;
const curentProductInformationRoute = require('./routes/currentProductInformation').curentProductInformation;
const ratingsAndReviewsRoutes = require('./routes/ratingsAndReviewsRoutes.js').ratingsAndReviewsRoutes;
const interactionRoute = require('./routes/interactionRoute.js').interactions;
const token = require('../authorization.config.js').token;

const app = express();
const port = 3000;
const path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

app.use(express.static('./client/dist'));
app.use(express.json());

// router
app.use('/relatedItemsData', relatedProductRoutes);
app.use('/reviews', ratingsAndReviewsRoutes);
app.use('/currentProductInformation', curentProductInformationRoute);
app.use('/interaction', interactionRoute);

const headers = {
  headers: { 'Authorization' : `${token}` },
};

// supplmentary routes

app.get('/products', (req, res) => {
  const allProducts = path + '/products/?count=40';
  axios.get(allProducts, headers)
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      res.send(404).send(error);
    });
});

app.get('/products/:id', (req,res) => {
  var productId = path + '/products/' + req.params.id;
  axios.get(productId, headers)
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

app.get('/products/:id/styles', (req, res) => {
  const productStyles = path + '/products/' + req.params.id + '/styles';
  axios.get(productStyles, headers)
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/products/:id/related', (req, res) => {
  const relatedProducts = path + '/products/' + req.params.id + '/related';
  axios.get(relatedProducts, headers)
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/productReview', (req, res) => {
  if (!req.query.id) {
    res.sendStatus(404);
  } else {
    reviewController.getProductRatings(req.query.id)
      .then((result) => {
        res.send(result.toString());
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
});


// ---------------------QA----------------------//
app.get('/qa/questions', (req, res) => {
  var getQA = path + '/qa/questions?product_id=' + req.query.product_id + '&count=100';
  axios.get(getQA, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put('/answer/update', (req, res) => {
  let markAns = `${path}/qa/answers/${req.body.id}/${req.body.target}`;
  axios.put(markAns, {}, headers)
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch((reject) => {
      res.status(500).send(reject.message);
    });
});

app.put('/questions/update', (req, res) => {
  let markHelpful = path + `/qa/questions/${req.body.id}/${req.body.target}`;
  axios.put(markHelpful, {}, headers)
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/qa/question/answer', (req, res) => {
  const addAnswer = path + `/qa/questions/${req.body.id}/answers`;
  axios.post(addAnswer, {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
  }, headers)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/qa/question/post', (req, res) => {
  const addQuestion = path + '/qa/questions';
  axios.post(addQuestion, {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id,
  }, headers)
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
