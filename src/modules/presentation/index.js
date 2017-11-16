/* eslint-disable global-require */
/* global document */
import R from 'ramda';
import $ from 'jquery';

if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
}

$(document).on(
  'keypress',
  R.cond([[R.propEq('keyCode', 109), () => console.log('on menu click')]]),
);
