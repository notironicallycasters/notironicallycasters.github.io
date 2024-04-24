<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer et Questions</title>
    <style>
        body {
            background-size: cover;
            background-repeat: no-repeat;
            transition: background-image 1s ease;
        }
    </style>
    <audio controls autoplay>
        <source src="music.ogg" type="audio/ogg">
        <source src="music.mp3" type="audio/mpeg">
    </audio>
</head>
<body style="bg-image">
    <center>
        <h1 class="tab">​ ​</h1>
        <h1 class="tab">10 seconds</h1>
        <h2>Created by Ilyas Casters, Sami Sbai, and Anas Chafik</h2>
        <button onclick="startTimer()">Commencer</button>
        <p id="timer"></p>
        <h1 class="tab">​ ​</h1>
    </center>

    <script>
        var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        var currentIndex = 0;

        function changeBackground() {
            document.body.style.backgroundImage = 'url("' + images[currentIndex] + '")';
            currentIndex = (currentIndex + 1) % images.length;
        }

        setInterval(changeBackground, 10000);

        function startTimer() {
            var seconds = 10;
            var timerDisplay = document.getElementById('timer');
            var countdown = setInterval(function() {
                seconds--;
                timerDisplay.textContent = seconds;

                if (seconds <= 0) {
                    clearInterval(countdown);
                    timerDisplay.textContent = 'Temps écoulé!';
                    showAnswer();
                }
            }, 1000);
        }

        function showAnswer() {
            var questions = [
                "Quelle est la capitale de la France?",
                "Combien de continents y a-t-il sur Terre?",
                "Quel est l'organe principal du système respiratoire?",
                "Quel est le symbole chimique de l'eau?"
            ];

            var answers = [
                "Paris",
                "7",
                "Les poumons",
                "H2O"
            ];

            var randomIndex = Math.floor(Math.random() * questions.length);
            var randomQuestion = questions[randomIndex];
            alert('Question: ' + randomQuestion);

            var responseToShow = answers[randomIndex];
            alert('Réponse: ' + responseToShow);
        }
    </script>
</body>
</html>
