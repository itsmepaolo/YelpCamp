const express = require('express');
const router = express.Router({ mergeParams: true });
// const Campground = require('../models/campground');
// const Review = require('../models/review');
const { validateReview, isLoggedIn, isReviewOwner } = require('../middleware');
const reviews = require('../controllers/review');

// const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');


router.post('/', validateReview, isLoggedIn, catchAsync(reviews.creatReview))

router.delete('/:reviewId', isLoggedIn, isReviewOwner, catchAsync(reviews.deleteReview))

module.exports = router;