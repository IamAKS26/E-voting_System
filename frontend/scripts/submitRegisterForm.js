const form = document.querySelector(".registerForm");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const fullName = name.value + " " + surname.value;
  const age = document.querySelector(".age");
  const gender = document.querySelector(".gender");
  const password = document.querySelector(".password");
  const email = document.querySelector(".email");
  console.log(fullName);
  const formData = {
    name: fullName,
    age: age.value,
    password: password.value,
    email: email.value,
  };

  try {
    const { data } = await axios.post(
      "http://localhost:3000/user/signup",
      formData
    );
    console.log(data);
  } catch (e) {
    alert("Something went wrong!");
    console.log(e);
  }
});
