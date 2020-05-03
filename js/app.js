


window.onscroll = function () { stick() };
// Sticky Navigation
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Sticky Navigation


// https://api.foursquare.com/v2/venues/search
//   ?client_id=CLIENT_ID
//   &client_secret=CLIENT_SECRET
//   &ll=40.7,-74
//   &query=sushi
//   &v=YYYYMMDD


const CLIENT_ID = 'ZGRD1F2H3JEQO4A0XBBIHQ1MMUVRFH13ZXTIXXWDLMK4OVMN'
const CLIENT_SECRET = 'B1V2CVAAOQTFYVAQMNGBF1KK1SEAI00FHE22Y3Q35TCB3SM2'
// const llAcc
let QUERY = 'hospital';
const intent = 'checkin';
let limit = 20;
let radius = 5000;
let lat, long;



const getLocation = () => {
  alert('This webpage needs to use your location');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      // console.log(lat, long);
    })
  }
};

window.onclick = () => {
  const api = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${lat},${long}&radius=${radius}&query=${QUERY}&limit=${limit}&intent=${intent}&v=20200401`;
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      // data.response.venues.map((venue) => {
      //   console.log(venue);
      // })
    }).catch(function (err) {
      console.log('Something went wrong.', err);
    });
};








