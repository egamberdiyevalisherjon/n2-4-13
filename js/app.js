document.addEventListener("DOMContentLoaded", async () => {
  let form = document.querySelector("form#login-form");

  let { data: products } = await axios.get("https://fakestoreapi.com/products");
  let { data: carts } = await axios.get("https://fakestoreapi.com/carts");

  // console.log(products[0]);
  // console.log(carts);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = form[0].value;
    let password = form[1].value;

    let { data } = await axios.get(
      "https://food-recipes-with-images.p.rapidapi.com",
      {
        headers: {
          "X-RapidAPI-Key":
            "4da72bf64emsh836a9c13a7495bfp1409a6jsn2c5e68b63b31",
          "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
        },
        params: {
          q: username,
        },
      }
    );
    console.log(data);

    // let {
    //   data: { token },
    // } = await axios.post("https://fakestoreapi.com/auth/login", {
    //   username,
    //   password,
    // });

    // console.log(token);
  });
});
