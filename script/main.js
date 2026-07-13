document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
    "Tap tap layarnya ya cantikku",
    "For<br>💖 Dina Favliana Safii 💖,",
    "<img src='assets/1.jpg'>",
  "haiii kamuu 🤍",
  "<div style='text-align: justify;'>Hari ini adalah hari yang spesial, karena 25 tahun yang lalu, dunia ini jadi lebih baik dengan kehadiranmu. Dan aku, aku merasa jadi orang paling beruntung karena bisa mengenalmu, mencintaimu, dan menjalani hari-hari bersamamu.<br><br>Kalau aku diminta untuk menggambarkan kamu dalam satu kata, aku nggak akan bisa. Karena kamu bukan cuma satu hal. Kamu adalah tawa yang bikin hari burukku jadi baik lagi. Kamu adalah pelukan yang selalu terasa seperti rumah. Kamu adalah alasan kenapa aku percaya sama cinta yang tulus dan sederhana, yang nggak butuh drama, cuma butuh dua orang yang saling mengerti.</div>",

"<div style='text-align: justify;'>Di usia 25 tahun ini, aku ingin kamu tahu betapa aku bangga sama perjalanan yang sudah kamu lalui. Semua perjuangan, semua air mata yang kadang kamu sembunyikan, semua kerja keras yang kamu lakukan diam-diam — aku lihat semuanya, dan aku kagum sama kekuatan yang kamu punya. Kamu itu jauh lebih hebat dari yang kamu sadari, Dina.<br><br>Aku juga mau bilang terima kasih. Terima kasih sudah sabar sama aku di hari-hari sulit. Terima kasih sudah tetap memilih untuk bertahan bareng aku, walaupun kita pasti pernah salah paham, pernah berantem, pernah capek. Tapi di setiap akhir dari itu semua, kita selalu memilih untuk kembali satu sama lain. Dan itu, buat aku, adalah bukti kalau cinta kita nyata.</div>",

"<div style='text-align: justify;'>Semoga di usia yang baru ini, semua doa dan harapan Dina perlahan-lahan terwujud. Semoga kariermu makin cemerlang, kesehatanmu selalu terjaga, dan hati kamu selalu dipenuhi rasa syukur dan kebahagiaan.<br><br>Dan kalau boleh aku titip satu harapan lagi — semoga aku masih diberi kesempatan untuk terus ada di sisimu, menemani setiap ulang tahunmu yang berikutnya, dan yang berikutnya lagi, sampai suatu saat nanti kita bisa merayakan ini bukan cuma sebagai sepasang kekasih, tapi sebagai satu keluarga kecil yang utuh.</div>",

"<div style='text-align: justify;'>Aku tahu kata-kata ini mungkin nggak cukup untuk menggambarkan seberapa besar rasa sayangku sama kamu. Tapi aku harap, dari tulisan sederhana ini, kamu bisa merasakan betapa tulusnya cinta yang aku punya untukmu.<br><br>Selamat ulang tahun, cintaku Dina Favliana Safii. Semoga umur panjang, sehat selalu, dan bahagia terus ya. Aku sayang kamu, hari ini, besok, dan seterusnya.</div>",
"btw ini aku buat sendiri loh buat kamu sayang hehe semoga kamu suka yaa 💖🤍",  
"oh iya...",
  "masih ada satu hal nih 👀",
  "<img src='assets/2.jpg'>",
  "<img src='assets/3.jpg'>",
  "<img src='assets/4.jpg'>",
  "<img src='assets/5.jpg'>",
  "<img src='assets/6.jpg'>",
  "<img src='assets/7.jpg'>",
  "coba pencet tombol di bawah yaa 💝"
];

let currentPage = 0;
let isLastPage = false;

function showMessage() {
    $('.message').html(messages[currentPage]);
    
    isLastPage = currentPage === messages.length - 1;
    
    if (isLastPage) {
        $('.next-button').show();
        $('.bg_heart').css('cursor', 'default');
    } else {
        $('.next-button').hide();
        $('.bg_heart').css('cursor', 'pointer');
    }
}

$('.bg_heart').on('click', function() {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);

showMessage();

function clearMusicState() {
    localStorage.removeItem('musicPlaying');
    localStorage.removeItem('musicCurrentTime');
}

window.onload = function() {
    clearMusicState(); 
}

function setupMusic() {
    const music = document.getElementById('backgroundMusic');
    
    if (!localStorage.getItem('initialLoad')) {
        clearMusicState();
        localStorage.setItem('initialLoad', 'true');
        music.currentTime = 0;
    }

    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

    if (isMusicPlaying) {
        music.currentTime = parseFloat(musicCurrentTime);
        music.play().catch(error => console.log('Playback failed', error));
    }

    music.addEventListener('play', () => {
        localStorage.setItem('musicPlaying', 'true');
    });

    music.addEventListener('pause', () => {
        localStorage.setItem('musicPlaying', 'false');
    });

    setInterval(() => {
        localStorage.setItem('musicCurrentTime', music.currentTime);
    }, 1000);

    document.addEventListener('click', function startMusic() {
        music.play().catch(error => {
            console.log('Autoplay prevented', error);
        });
        document.removeEventListener('click', startMusic);
    });
}

document.addEventListener('DOMContentLoaded', setupMusic);