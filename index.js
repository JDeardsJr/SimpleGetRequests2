'use strict';

function getDogImage(newUrlLink) {
  fetch(newUrlLink)
  .then(response => response.json())
  .then(responseJson => 
    displayResults(responseJson));
}

function displayResults(responseJson) {
    console.log(responseJson);
    for (let i = 0; i < responseJson.message.length; i++) {
      $('.js-image-container').append(
        `<img src="${responseJson.message[i]}" class="results-img" alt="A picture of an awesome dog">`
      );
    }
    $('.results').removeClass('hidden');
  }

function emptyImageResults() {
  $('.js-image-container').empty();
}

function determineNewUrl() {
    const numberInput = $('#amount').val();
    const urlLink = "https://dog.ceo/api/breeds/image/random/";
    let newUrlLink = urlLink + numberInput;
    getDogImage(newUrlLink);
}

function watchForm() {
    $('form').submit(event => {
    event.preventDefault();
    emptyImageResults();
    determineNewUrl();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});