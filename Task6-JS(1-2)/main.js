//Task1
// 1

let fonts = document.getElementById("fonts");
let colors = document.getElementById("colors");
let sizes = document.getElementById("sizes");

for (let i = 16; i <= 30; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.textContent = i;
  sizes.appendChild(opt);
}

if (localStorage.font) {
  document.body.style.fontFamily = localStorage.font;
  fonts.value = localStorage.font;
}

if (localStorage.color) {
  document.body.style.color = localStorage.color;
  colors.value = localStorage.color;
}

if (localStorage.size) {
  document.body.style.fontSize = localStorage.size + "px";
  sizes.value = localStorage.size;
}

fonts.onchange = function () {
  document.body.style.fontFamily = this.value;
  localStorage.setItem("font", this.value);
};

colors.onchange = function () {
  document.body.style.color = this.value;
  localStorage.setItem("color", this.value);
};

sizes.onchange = function () {
  document.body.style.fontSize = this.value + "px";
  localStorage.setItem("size", this.value);
};

// 2

let i1 = document.getElementById("input1");
let i2 = document.getElementById("input2");
let i3 = document.getElementById("input3");
let sel = document.getElementById("select");

i1.value = sessionStorage.getItem("i1") || "";
i2.value = sessionStorage.getItem("i2") || "";
i3.value = sessionStorage.getItem("i3") || "";
sel.value = sessionStorage.getItem("sel") || "One";

i1.oninput = () => sessionStorage.setItem("i1", i1.value);
i2.oninput = () => sessionStorage.setItem("i2", i2.value);
i3.oninput = () => sessionStorage.setItem("i3", i3.value);
sel.onchange = () => sessionStorage.setItem("sel", sel.value);

window.onbeforeunload = () => {
  sessionStorage.clear();
};

//Task2
//1
let data = [
  {
    "userId": 10,
    "title": "Article Title Number 1",
    "description": "Article Description Number 1"
  },
  {
    "userId": 5,
    "title": "Article Title Number 2",
    "description": "Article Description Number 2"
  },
  {
    "userId": 5,
    "title": "Article Title Number 3",
    "description": "Article Description Number 3"
  },
  {
    "userId": 5,
    "title": "Article Title Number 4",
    "description": "Article Description Number 4"
  },
  {
    "userId": 5,
    "title": "Article Title Number 5",
    "description": "Article Description Number 5"
  },
  {
    "userId": 5,
    "title": "Article Title Number 6",
    "description": "Article Description Number 6"
  },
  {
    "userId": 25,
    "title": "Article Title Number 7",
    "description": "Article Description Number 7"
  },
  {
    "userId": 25,
    "title": "Article Title Number 8",
    "description": "Article Description Number 8"
  },
  {
    "userId": 15,
    "title": "Article Title Number 9",
    "description": "Article Description Number 9"
  },
  {
    "userId": 15,
    "title": "Article Title Number 10",
    "description": "Article Description Number 10"
  }
];

let myPromise = new Promise((resolve, reject) => {
  if (data.length) {
    resolve(data.slice(0, 5));
  } else {
    reject("No Data");
  }
});

myPromise.then((res) => {
  res.forEach(el => {
    document.body.innerHTML += `
      <div>
        <h3>${el.title}</h3>
        <p>${el.description}</p>
      </div>
    `;
  });
});

//2
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    data.slice(0, 5).forEach(el => {
      document.body.innerHTML += `
        <div>
          <h3>${el.title}</h3>
          <p>${el.description}</p>
        </div>
      `;
    });
  });