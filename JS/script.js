const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
};

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
};

const siteLogo = document.querySelector('.logo a');
const navLinks = document.querySelectorAll('.menu-list li');
const playSongBtn = document.querySelector('.play-song-btn');

navLinks.forEach(item => {
  item.addEventListener('click', function () {
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
};

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
};

const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "assets/Image/play.png";
  }
}

var moveTopBtn = document.getElementById("moveTopBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

const buttons = document.querySelectorAll(".btn");
const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    icon.src = "assets/Image/play.png";
    const data = getData(index);
    photo.src = data.photo;
    song.src = data.song;
    songName.innerText = data.songName;
    songBy.innerText = data.songBy;
    title.innerText = data.title;
    download.href = data.download;
    aboutSong.innerText = data.aboutSong;
  });
});

function getData(index) {
  const data = [
    {
      photo: "assets/Image/nghe-xanh-lofi1.webp",
      song: "assets/Songs/Nghe-Xanh Lofi 1.mp3",
      songName: "Nghe - Xanh Lofi 1",
      songBy: "Lofi Beats",
      title: "Nghe - Xanh Lofi 1",
      download: "assets/Songs/Nghe-Xanh Lofi 1.mp3",
      aboutSong: "Nhạc lofi mang lại cảm giác thư giãn và yên bình..."
    },
    // Thêm dữ liệu bài hát khác ở đây...
  ];
  return data[index];
}

function registerUser(event) {
  event.preventDefault();

  const user = {
    fullName: document.getElementById('fullName').value,
    age: document.getElementById('age').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    email: document.getElementById('email').value,
    comment: document.getElementById('comment').value
  };

  // Add new row to the table
  const userTableBody = document.getElementById('userTableBody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${user.fullName}</td>
    <td>${user.age}</td>
    <td>${user.gender === 'male' ? 'Nam' : 'Nữ'}</td>
    <td>${user.email}</td>
    <td>${user.comment || 'Không'}</td>
  `;
  userTableBody.appendChild(row);

  // Update total users and donation
  const totalUsers = userTableBody.rows.length;
  const totalDonation = totalUsers * 5000;
  const formattedDonation = totalDonation.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  document.getElementById('totalUsers').innerText = `Tổng số người đăng ký: ${totalUsers}`;
  document.getElementById('totalDonation').innerText = `Tổng số tiền sẽ quyên góp: ${formattedDonation}`;

  // Close popup and reset form
  closePopup();
  document.getElementById('userForm').reset();
}

document.getElementById('userForm').addEventListener('submit', registerUser);

window.onload = function() {
  preLoader();
};

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
}

// Đăng ký Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ServiceWorker.js').then(function(registration) {
    console.log('Service Worker Registered');
  }).catch(function(error) {
    console.log('Service Worker Registration failed:', error);
  });
} else {
  console.log('Service Worker not supported');
}
