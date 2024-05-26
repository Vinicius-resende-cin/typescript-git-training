function sayHello(username: string) {
  alert(`Hello, ${username}!`);
}

// get the button element
const greeter = document.querySelector("button#greeter") as HTMLButtonElement;

// get the user's name
const nameInput = document.querySelector("input#username") as HTMLInputElement;

// add a click event listener to the button
greeter.addEventListener("click", () => {
  let username = nameInput.value;
  sayHello(username);
});
