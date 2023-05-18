let today = new Date();
const birthday = new Date("2023-05-25"); // 생일 날짜를 자신의 생일로 변경해주세요.

    if(today.getMonth() == birthday.getMonth() && today.getDate() == birthday.getDate()) {

	const songButton = document.getElementById("songButton");
	const letter = document.querySelector(".letter");
	const letterContent = document.querySelector(".letterContent");
	let isOpen = false;

	songButton.style.display = "block";
	songButton.style.margin = "0 auto";
	
	
	
	let audio = new Audio("birthdaySong.mp3"); // 생일 축하 노래 파일 경로를 변경해주세요.

	songButton.onclick = function() {
		if(audio.paused){
			audio.play();
			letter.classList.add("open");
		} else {
			audio.pause();
			letter.classList.remove("open");
		}
		
	};
    } else {
 		songButton.onclick = function () {
 			alert("아직 날짜가 맞지 않아 볼 수 없습니다.");
 		}
}	

function countdown() {

	let diff = (birthday - today) / 1000; // 초 단위로 시간 차이 계산

	let days = Math.floor(diff / (24 * 60 * 60));
	let hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
	let minutes = Math.floor((diff % (60 * 60)) / 60);
	let seconds = Math.floor(diff % 60);

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	if (diff <= 0) { // 생일이 지난 경우
		clearInterval(intervalID); // 타이머 종료
		document.getElementById("timer").innerHTML = "<h1>생일을 축하합니다!</h1>";
	}
}

countdown();
let intervalID = setInterval(countdown, 1000);