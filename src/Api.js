import axios from "axios";

export const postUser = async (user) => {
  await axios({
    method: "POST",
    url: "https://6319ae198e51a64d2be99876.mockapi.io/users",
    data: { name: user },
  })
    .then((res) => {
      localStorage.setItem("id", res.data.id);
    })
    .catch((e) => console.log(e));
};

export const updateUser = async (user, id) => {
  await axios({
    method: "PUT",
    url: `https://6319ae198e51a64d2be99876.mockapi.io/users/${String(id)}`,
    data: { name: user },
  })
    .then((res) => console.log("User successfully updated."))
    .catch((e) => console.log(e));
};

export const postTodo = async (todo, id) => {
  await axios({
    method: "POST",
    url: `https://6319ae198e51a64d2be99876.mockapi.io/users/${id}/todos`,
    data: {
      "todo": todo,
      "isCompleted" : false
    }
  })
    .then((res) => console.log("To do successfully added."))
    .catch((e) => console.log(e))
}