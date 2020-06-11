const indexInput = () => {
  const firstIndex = document.querySelector('#first_index');
  const secondIndex = document.querySelector('#second_index');
  const letters = document.querySelectorAll('.letter');

  letters.forEach((letter) => {
    // console.log(letter.dataset.letterIndex );

      letter.addEventListener('click', (event) => {
        console.log('hello');
        if (firstIndex.value === "") {
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
          // console.log(letters[parseInt(firstIndex.value)..parseInt(secondIndex.value)]);
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


  // classList.add()


  // text.addEventListener('onclick', (event) => {
  //   console.log('hello');
  //   if (firstIndex.value === null) {
  //     firstIndex.value = currentTarget.dataset.dataletterindex ;
  //   } else {
  //     secondIndex.value = currentTarget.dataset.dataletterindex ;
  //   }

  // });



}


export { indexInput }



