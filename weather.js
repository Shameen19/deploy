<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>;

const settings = {
  async: true,
  crossDomain: true,
  url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5",
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    "X-RapidAPI-Key": "9b65d6d22cmsh2b292eca9af265ep183bb5jsnd4c3e27bcce5",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
