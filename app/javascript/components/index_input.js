const indexInput = () => {
  const firstIndex = document.querySelector('#card_first_index');
  const secondIndex = document.querySelector('#card_second_index');
  const letters = document.querySelectorAll('.letter');

  letters.forEach((letter) => {

      letter.addEventListener('click', (event) => {
        console.log('hello');
        if (firstIndex.value === "" ) {
          firstIndex.value = letter.dataset.letterIndex;
          letter.classList.add("red");
          // letter.style.color = "red";
          console.log(typeof letter.dataset.letterIndex);
        } else if (secondIndex.value === "") {
          secondIndex.value = letter.dataset.letterIndex ;
          // console.log(parseInt(firstIndex.value));
          // console.log($(letters[parseInt(firstIndex.value)]));
          const elements = $(letters[parseInt(firstIndex.value)]).nextUntil(event.currentTarget);
          console.log(elements);
          elements.each(function(element) {
            console.log(this);
            // this.style.color = "red";
            // this.addClass("red");
            this.classList.add('red');
          });
          // letter.style.color = "red";
          letter.classList.add("red");
        } else {
          firstIndex.value = letter.dataset.letterIndex;
          secondIndex.value = "";
          console.log(typeof letter.dataset.letterIndex);
          letters.forEach((letter) => {
            // letter.style.color = "black";
            letter.classList.remove("red");
          });
          // letter.style.color = "red";
          letter.classList.add("red");
        }

      });

  });






}


export { indexInput }



