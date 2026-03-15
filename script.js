var parent = document.querySelector(".parent");
var second = document.querySelector(".second");

function create(table, key, value) {
  var tr = document.createElement("tr");
  var th = document.createElement("th"); // Heading
  var td = document.createElement("td"); // value

  th.innerHTML = key;

  if (key === "flag") {
    let img = document.createElement("img");
    img.src = value;
    img.style.width = "150px";
    img.style.border = "1px solid #ccc";
    td.appendChild(img);
  } else if (key === "maps") {
    let a = document.createElement("a");
    a.href = value;
    a.target = "_blank";
    a.innerHTML = "click to open map";
    td.appendChild(a);
  } else {
    td.innerHTML = value;
  }
  tr.appendChild(th);
  tr.appendChild(td);
  table.appendChild(tr);
}

function getapiPromise() {
  let name = "bharat";
  let search = document.getElementById("search");
  if (search.value !== "") {
    name = search.value;
  }
  parent.removeChild(second);
  second = document.createElement("div");
  second.classList.add("second");
  parent.appendChild(second);

  fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then((response) => {
     response.json()
     .then((data) => {
      for (let country of data) {
        var table = document.createElement("table");
        create(table, "Common Name", country.name.common);
        create(table, "capital", country.capital);
        create(table, "maps", country.maps.googleMaps);
        create(table, "Name", country.name.official);
        create(table, "Area", country.area);
        create(table, "Border", country.borders);
        create(table, "region", country.region);
        create(table, "TimeZones:- ", country.timezones);
        create(table, "Languages:- ", country.languages.eng);
        create(table, "flag", country.flags.svg);

        second.appendChild(table);
      }
      }).catch((error) => {
      alert("Invalid country name" + error.message);
    });
  }).catch((error) => {
    alert("Api is not found " + error.message);
  });
}
getapiPromise();

async function getapiAsync() {
  let name = "bharat";
  let search = document.getElementById("search");
  if (search.value !== "") {
    name = search.value;
  }
  parent.removeChild(second);
  second = document.createElement("div");
  second.classList.add("second");
  parent.appendChild(second);

  // try -> logic
  // catch -> handle the try block error

  try {
    let response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let data = await response.json();
    for (let country of data) {
      var table = document.createElement("table");
      create(table, "Common Name", country.name.common);
      create(table, "capital", country.capital);
      create(table, "maps", country.maps.googleMaps);
      create(table, "Name", country.name.official);
      create(table, "Area", country.area);
      create(table, "Border", country.borders);
      create(table, "region", country.region);
      create(table, "TimeZones:- ", country.timezones);
      create(table, "Languages:- ", country.languages.eng);
      create(table, "flag", country.flags.svg);

      second.appendChild(table);
    }
  } catch (error) {
    alert("Invlaid country name" + error.message);
  }
}

//getapiAsync();

function getapi() {
  // using Ajax JASON
  // using promise
  // using try catch block
  let name = "Bharat";
  let search = document.getElementById("search");

  if (search.value !== "") {
    name = search.value;
  }
  // load xmlhttp request
  let request = new XMLHttpRequest();
  request.open("get", `https://restcountries.com/v3.1/name/${name}`);
  request.send();

  // Add table
  parent.removeChild(second);
  second = document.createElement("div");
  second.classList.add("second");
  parent.appendChild(second);

  // Display the url attributes..
  request.addEventListener("load", () => {
    // Loop
    for (let country of JSON.parse(request.responseText)) {
      // Display Table > Table_row > Table_data
      var table = document.createElement("table");
      create(table, "capital:-", country.capital);
      create(table, "maps", country.maps.googleMaps);
      create(table, "Name", country.name.official);
      create(table, "Area", country.area);
      create(table, "Border", country.borders);
      create(table, "region", country.region);
      create(table, "TimeZones:- ", country.timezones);
      create(table, "Languages:- ", country.languages.eng);
      create(table, "flag", country.flags.svg);

      second.appendChild(table);
    }
  });
}
//getapi()

