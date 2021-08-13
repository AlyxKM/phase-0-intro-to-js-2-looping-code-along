
  function writeCards(friends, event) {
      const cards = []
      for (let i = 0; i < friends.length; i++) {
          cards.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
        }
        return cards;
      }

function countDown() {
      let countDown = 10;
      while (countDown > -1) {
        console.log(countDown--);
      } 
    }