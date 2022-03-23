const { fetchItems } = require("./.firebase/models/model_items");

fetchItems().then((data) => {
  console.log(data);
});
