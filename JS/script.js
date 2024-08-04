// Navbar and move to top button
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
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-lofi1.webp"; // Thay đổi hình ảnh phù hợp
  song.src = "./assets/Songs/Nghe-Xanh Lofi 1.mp3";
  songName.innerText = "Nghe - Xanh Lofi 1";
  songBy.innerText = "Lofi Beats";
  title.innerText = "Nghe - Xanh Lofi 1";
  download.href = "./assets/Songs/Nghe-Xanh Lofi 1.mp3";
  aboutSong.innerText = "Nhạc lofi mang lại cảm giác thư giãn và yên bình, giúp tâm hồn bạn được tĩnh lặng và bình an. Hãy cùng thưởng thức 'Nghe-Xanh Lofi 1' và để âm nhạc giúp bạn thư giãn sau một ngày dài. Chúng tôi hy vọng rằng qua mỗi lần bạn lắng nghe, bạn sẽ cảm nhận được giá trị của việc bảo vệ môi trường. Hãy tham gia cùng chúng tôi trong dự án trồng cây gây quỹ. Mỗi lần phát bài hát này, bạn đang góp phần tạo nên một thế giới xanh hơn. Hãy cùng nhau trồng cây và bảo vệ môi trường vì một tương lai bền vững.";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-alpha1.webp";
  song.src = "./assets/Songs/Nghe-Xanh Alpha 1.mp3";
  songName.innerText = "Nghe - Xanh Alpha 1";
  songBy.innerText = "Nghe - Xanh Alpha 1";
  title.innerText = "Nghe - Xanh Alpha 1";
  download.href = "./assets/Songs/Nghe-Xanh Alpha 1.mp3";
  aboutSong.innerText = "Nhạc sóng não alpha là một công cụ mạnh mẽ để cải thiện khả năng tập trung và thư giãn. 'Nghe-Xanh Alpha 1' là một bài hát đặc biệt giúp bạn dễ dàng đạt được trạng thái tập trung cao độ và giảm căng thẳng. Mỗi lần bạn nghe bài hát này, âm nhạc sẽ giúp não bộ của bạn đồng bộ với tần số alpha, mang lại cảm giác bình yên và sáng tạo. Hãy để âm nhạc dẫn lối bạn đến sự tập trung và hiệu quả trong công việc, đồng thời góp phần bảo vệ môi trường thông qua dự án trồng cây gây quỹ của chúng tôi.";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-piano1.webp";
  song.src = "./assets/Songs/Nghe-Xanh Piano 1.mp3";
  songName.innerText = "Nghe - Xanh Piano 1";
  songBy.innerText = "Nghe - Xanh Piano 1";
  title.innerText = "Nghe - Xanh Piano 1";
  download.href = "./assets/Songs/Nghe-Xanh Piano 1.mp3";
  aboutSong.innerText = "Khám phá sự thư giãn tuyệt đối với 'Nghe - Xanh Piano 1'. Bản nhạc piano này được thiết kế để mang lại cảm giác bình yên và tĩnh lặng. Mỗi lần bạn nghe bài hát này, âm nhạc sẽ giúp tâm hồn bạn được tĩnh lặng và bình an. Hãy để giai điệu piano nhẹ nhàng dẫn bạn vào trạng thái thư giãn sâu, giúp bạn giảm căng thẳng và tái tạo năng lượng. Mỗi lần bạn thưởng thức 'Nghe - Xanh Piano 1', bạn không chỉ chăm sóc bản thân mà còn góp phần vào việc bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ và cùng nhau tạo nên một tương lai xanh tươi.";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-lofi2.webp";
  song.src = "./assets/Songs/Nghe-Xanh Lofi 2.mp3";
  songName.innerText = "Nghe - Xanh Lofi 2";
  songBy.innerText = "Lofi Beats";
  title.innerText = "Nghe - Xanh Lofi 2";
  download.href = "./assets/Songs/Nghe-Xanh Lofi 2.mp3";
  aboutSong.innerText = "Đắm mình trong giai điệu thư giãn của 'Nghe-Xanh Lofi 2' với nhạc lofi, giúp bạn xua tan mọi căng thẳng và tìm lại sự bình yên trong tâm hồn. Mỗi lần bạn nghe bài hát này, không chỉ là một phút giây tĩnh lặng cho bản thân mà còn là một hành động nhỏ để bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ, để âm nhạc không chỉ chạm đến trái tim mà còn góp phần tạo nên một thế giới xanh hơn. Hãy để từng nốt nhạc lofi dẫn lối, từng cây xanh thêm sự sống cho hành tinh của chúng ta.";
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-alpha2.webp";
  song.src = "./assets/Songs/Nghe-Xanh Alpha 2.mp3";
  songName.innerText = "Nghe - Xanh Alpha 2";
  songBy.innerText = "Nghe - Xanh Alpha 2";
  title.innerText = "Nghe - Xanh Alpha 2";
  download.href = "./assets/Songs/Nghe-Xanh Alpha 2.mp3";
  aboutSong.innerText = "Khám phá sự tập trung tối đa với 'Nghe - Xanh Alpha 2'. Bản nhạc sóng não alpha này được thiết kế để đồng bộ hóa não bộ của bạn với tần số alpha, mang lại cảm giác bình yên và tăng cường sự sáng tạo. Hãy để giai điệu nhẹ nhàng dẫn bạn vào trạng thái tập trung sâu, giúp bạn hoàn thành công việc một cách hiệu quả và thư giãn tinh thần. Mỗi lần bạn thưởng thức 'Nghe - Xanh Alpha 2', bạn không chỉ chăm sóc bản thân mà còn góp phần vào việc bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ và cùng nhau tạo nên một tương lai xanh tươi. Âm nhạc vì sự tập trung, hành động vì hành tinh.";
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-piano2.webp";
  song.src = "./assets/Songs/Nghe-Xanh Piano 2.mp3";
  songName.innerText = "Nghe - Xanh Piano 2";
  songBy.innerText = "Nghe - Xanh Piano 2";
  title.innerText = "Nghe - Xanh Piano 2";
  download.href = "./assets/Songs/Nghe-Xanh Piano 2.mp3";
  aboutSong.innerText = "Hòa mình vào giai điệu piano thư giãn của 'Nghe - Xanh Piano 2'. Bản nhạc này mang lại cảm giác bình yên và tĩnh lặng, giúp bạn thư giãn và tái tạo năng lượng. Mỗi lần bạn nghe bài hát này, không chỉ là để thư giãn mà còn góp phần vào việc bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ, để mỗi nốt nhạc piano đều gieo mầm cho một tương lai xanh tươi. Hãy cùng nhau làm cho thế giới trở nên xanh hơn và bền vững hơn thông qua âm nhạc.";
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-lofi3.webp";
  song.src = "./assets/Songs/Nghe-Xanh Lofi 3.mp3";
  songName.innerText = "Nghe - Xanh Lofi 3";
  songBy.innerText = "Lofi Beats";
  title.innerText = "Nghe - Xanh Lofi 3";
  download.href = "./assets/Songs/Nghe-Xanh Lofi 3.mp3";
  aboutSong.innerText = "Đắm chìm trong giai điệu nhẹ nhàng của 'Nghe-Xanh Lofi 3', giúp bạn thư giãn và tái tạo năng lượng. Âm nhạc có sức mạnh nâng cao tâm trạng và mang đến sự ấm áp của những cảm xúc đáng nhớ nhất. Mỗi lần bạn nghe bài hát này, bạn không chỉ tận hưởng âm nhạc mà còn góp phần bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ, để mỗi nốt nhạc lofi đều gieo mầm cho một tương lai xanh tươi. Hãy cùng nhau làm cho thế giới trở nên xanh hơn và bền vững hơn thông qua âm nhạc.";
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-alpha3.webp";
  song.src = "./assets/Songs/Nghe-Xanh Alpha 3.mp3";
  songName.innerText = "Nghe - Xanh Alpha 3";
  songBy.innerText = "Nghe - Xanh Alpha 3";
  title.innerText = "Nghe - Xanh Alpha 3";
  download.href = "./assets/Songs/Nghe-Xanh Alpha 3.mp3";
  aboutSong.innerText = "Khám phá sức mạnh của sự tập trung với 'Nghe - Xanh Alpha 3'. Bản nhạc sóng não alpha này được tạo ra để giúp bạn đạt được trạng thái bình tĩnh và sáng tạo tối ưu. Âm thanh dịu nhẹ sẽ đồng bộ hóa não bộ của bạn với tần số alpha, mang lại sự tập trung và hiệu quả trong công việc. Hãy để âm nhạc dẫn dắt bạn vào một không gian yên tĩnh và đầy cảm hứng. Mỗi lần bạn thưởng thức 'Nghe - Xanh Alpha 3', bạn không chỉ cải thiện sức khỏe tinh thần mà còn đóng góp vào việc bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ và cùng nhau kiến tạo một hành tinh xanh hơn. Âm nhạc vì sự tập trung, hành động vì trái đất.";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-piano3.webp";
  song.src = "./assets/Songs/Nghe-Xanh Piano 3.mp3";
  songName.innerText = "Nghe - Xanh Piano 3";
  songBy.innerText = "Nghe - Xanh Piano 3";
  title.innerText = "Nghe - Xanh Piano 3";
  download.href = "./assets/Songs/Nghe-Xanh Piano 3.mp3";
  aboutSong.innerText = "Thư giãn với giai điệu piano êm dịu của 'Nghe - Xanh Piano 3'. Bản nhạc này được thiết kế để mang lại sự bình yên và tĩnh lặng, giúp bạn giảm căng thẳng và thư giãn tinh thần. Mỗi lần bạn lắng nghe 'Nghe - Xanh Piano 3', bạn không chỉ chăm sóc bản thân mà còn đóng góp vào việc bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ và cùng nhau tạo nên một tương lai xanh tươi. Âm nhạc vì sự thư giãn, hành động vì môi trường.";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-lofi4.webp";
  song.src = "./assets/Songs/Nghe-Xanh Lofi 4.mp3";
  songName.innerText = "Nghe - Xanh Lofi 4";
  songBy.innerText = "Lofi Beats";
  title.innerText = "Nghe - Xanh Lofi 4";
  download.href = "./assets/Songs/Nghe-Xanh Lofi 4.mp3";
  aboutSong.innerText = "Đắm chìm trong giai điệu nhẹ nhàng của 'Nghe-Xanh Lofi 4', mang đến cho bạn cảm giác thư giãn và yên bình. Âm nhạc có sức mạnh nâng cao tinh thần và mang lại sự ấm áp của những cảm xúc đáng nhớ nhất. Mỗi lần bạn lắng nghe bài hát này, không chỉ là để thư giãn mà còn góp phần vào việc bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ, để mỗi nốt nhạc lofi đều gieo mầm cho một tương lai xanh tươi. Hãy cùng nhau làm cho thế giới trở nên xanh hơn và bền vững hơn thông qua âm nhạc.";
});

buttons[10].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-alpha4.webp";
  song.src = "./assets/Songs/Nghe-Xanh Alpha 4.mp3";
  songName.innerText = "Nghe - Xanh Alpha 4";
  songBy.innerText = "Nghe - Xanh Alpha 4";
  title.innerText = "Nghe - Xanh Alpha 4";
  download.href = "./assets/Songs/Nghe-Xanh Alpha 4.mp3";
  aboutSong.innerText = "Hòa mình vào nhịp điệu nhẹ nhàng của 'Nghe - Xanh Alpha 4', một bản nhạc sóng não alpha giúp bạn dễ dàng đạt được sự tập trung cao độ và thư giãn sâu. Âm nhạc này được thiết kế để đồng bộ hóa não bộ với tần số alpha, mang lại sự bình yên và kích thích sự sáng tạo. Mỗi lần bạn lắng nghe 'Nghe - Xanh Alpha 4', bạn không chỉ cải thiện hiệu suất làm việc mà còn góp phần bảo vệ hành tinh xanh của chúng ta. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ, và cùng nhau biến mỗi giai điệu thành một hạt giống cho tương lai tươi sáng. Âm nhạc vì sự tập trung, hành động vì môi trường.";
});

buttons[11].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/nghe-xanh-piano4.webp";
  song.src = "./assets/Songs/Nghe-Xanh Piano 4.mp3";
  songName.innerText = "Nghe - Xanh Piano 4";
  songBy.innerText = "Nghe - Xanh Piano 4";
  title.innerText = "Nghe - Xanh Piano 4";
  download.href = "./assets/Songs/Nghe-Xanh Piano 4.mp3";
  aboutSong.innerText = "Thưởng thức giai điệu piano dịu dàng của 'Nghe - Xanh Piano 4'. Bản nhạc này mang lại cảm giác thư giãn và tĩnh lặng, giúp bạn giảm căng thẳng và tái tạo năng lượng. Mỗi lần bạn nghe 'Nghe - Xanh Piano 4', bạn không chỉ tận hưởng âm nhạc mà còn đóng góp vào việc bảo vệ môi trường. Tham gia cùng chúng tôi trong dự án trồng cây gây quỹ, và cùng nhau tạo nên một tương lai xanh tươi. Âm nhạc vì sự thư giãn, hành động vì hành tinh.";
});


function loadUsers() {
  fetch('http://localhost:8081/api/users')
    .then(response => response.json())
    .then(users => {
      const userTableBody = document.getElementById('userTableBody');
      userTableBody.innerHTML = '';

      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.fullName}</td>
          <td>${user.age}</td>
          <td>${user.gender === 'male' ? 'Nam' : 'Nữ'}</td>
          <td>${user.email}</td>
          <td>${user.comment || 'Không'}</td>
        `;
        userTableBody.appendChild(row);
      });

      const totalUsers = users.length;
      const totalDonation = totalUsers * 5000;
      const formattedDonation = totalDonation.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

      document.getElementById('totalUsers').innerText = `Tổng số người đăng ký: ${totalUsers}`;
      document.getElementById('totalDonation').innerText = `Tổng số tiền sẽ quyên góp: ${formattedDonation}`;
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Đã có lỗi xảy ra. Vui lòng thử lại.");
    });
}

// Load user list on page load
window.onload = function() {
  preLoader();
  loadUsers();
};
