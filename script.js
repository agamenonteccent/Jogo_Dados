new Vue({
    el: '#app',
    data() {
      return {
        playerDice: '-',
        computerDice: '-',
        isPlayerTurn: true,
        isGameOver: false,
        resultMessage: '',
      };
    },
    methods: {
      rollPlayerDice() {
        this.playerDice = this.rollDice();
        this.computerDice = this.rollDice();
        this.checkWinner();
        this.isPlayerTurn = false;
      },
    },
      rollDice() {
        return Math.floor(Math.random() * 6) + 1;
      },
      checkWinner() {
        if (this.playerDice > this.computerDice) {
          this.resultMessage = 'Você ganhou!';
        } else if (this.playerDice < this.computerDice) {
          this.resultMessage = 'A máquina ganhou!';
        } else {
          this.resultMessage = 'Empate!';
        }
    }
})
  