const form = document.querySelector(".loginForm");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  try {
    const { data } = await axios.post("http://localhost:3000/user/login", {
      email: email.value,
      password: password.value,
    });
    console.log(data);
  } catch (e) {
    alert("Incorrect username or password");
  }
});
