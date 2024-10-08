new Vue({
    el: '#app',
    data: {
      celebrities: [
        { name: "Messi", img: "./images/messi.jpg" },
        { name: "Michael Jackson", img: "./images/michael-jackson.jpg" },
        { name: "Freddie Mercury", img: "./images/freddie-mercury.jpg" },
        { name: "Cristiano Ronaldo", img: "./images/cristiano-ronaldo.jpg" },
        { name: "Adele", img: "./images/adele.jpg" },
        { name: "Katy Perry", img: "./images/katy-perry.jpg" },
        { name: "Curry", img: "./images/curry.jpg" },
        { name: "Maradona", img: "./images/maradona.jpg" },
        { name: "Jim Carrey", img: "./images/jim-carrey.jpg" },
        { name: "Isaac Brizuela", img: "./images/isaac-brizuela.jpg" }
      ],
      currentCelebrityIndex: 0,
      userInput: '',
      feedback: '',
      score: 0
    },
    computed: {
      currentCelebrity() {
        return this.celebrities[this.currentCelebrityIndex];
      }
    },
    methods: {
      checkAnswer() {
        const correctAnswer = this.celebrities[this.currentCelebrityIndex].name.toLowerCase();
        if (this.userInput.trim().toLowerCase() === correctAnswer) {
          this.feedback = '';
          this.score++;
          this.userInput = ''; // Limpiar el campo de texto
          if (this.currentCelebrityIndex < this.celebrities.length - 1) {
            this.currentCelebrityIndex++;
          } else {
            this.feedback = "¡Felicidades! Has adivinado todos los famosos.";
          }
        } else {
          this.feedback = 'Respuesta incorrecta. Inténtalo de nuevo.';
          this.userInput = ''; // Limpiar campo tras respuesta incorrecta
        }
      }
    }
  });
  