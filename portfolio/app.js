window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menuBtn = document.querySelector(".menuBtn");
  const navigations = document.querySelector(".navigations");
  const navigationItem = document.querySelectorAll(".navigations a");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigations.classList.toggle("active");
  });

  navigationItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigations.classList.remove("active");
    });
  });

  const scrollBtn = document.querySelector(".scrolBtn");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener("scroll", () => {
    let reveals = this.document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;

      let revealsTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealsTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});

//bot token
var telegram_bot_id = "6632263536:AAGddSGFIr_Rt8wChwWSgY2xPf9AWg54Gds"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 5263440495; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  message =
    "Name: " +
    u_name +
    "\nEmail: " +
    email +
    "\nMessage: " +
    `---${message}---`;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return false;
};
