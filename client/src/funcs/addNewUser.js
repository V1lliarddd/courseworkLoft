export const addNewUser = async (data) => {
  try {
    await fetch("http://localhost:3002/addUser", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return "Ok!";
  } catch (e) {
    console.log(e.message);
  }
};
