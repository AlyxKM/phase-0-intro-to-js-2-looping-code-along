
  function writeCards(array, event) {
      const cards = []
      for (let i = 0; i < array.length; i++) {
          cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        }
        return cards;
      }

function countDown() {
      let countDown = 10;
      while (countDown > -1) {
        console.log(countDown--);
      } 
    }