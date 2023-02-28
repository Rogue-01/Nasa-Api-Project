//https://api.nasa.gov/planetary/apod?api_key=QPfod0sMXlQNdhJ0s8JMd8HSmztBGqqrtLudsxCq

function displayApod(date) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=QPfod0sMXlQNdhJ0s8JMd8HSmztBGqqrtLudsxCq&date=${date}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const title = data.title;
      const explanation = data.explanation;
      const imageUrl = data.url;
      const image = document.createElement("img");
      image.src = imageUrl;
      document.body.appendChild(image);
      const heading = document.createElement("h1");
      heading.textContent = title;
      document.body.appendChild(heading);
      const paragraph = document.createElement("p");
      paragraph.textContent = explanation;
      document.body.appendChild(paragraph);
    })
    .catch((error) => {
      console.log(error);
    });
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
  const dateInput = document.querySelector("#date-input");
  const date = dateInput.value;
  displayApod(date);
});
