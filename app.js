async function getUserInfo() {
  const userId = Math.floor(Math.random() * 10) + 1; // 1부터 10까지 무작위 사용자 ID 선택
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const userInfoResult = `
          <h2>${data.name}</h2>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
          <p>Website: ${data.website}</p>
      `;
    document.getElementById("userInfoResult").innerHTML = userInfoResult;
  } catch (error) {
    console.error("Error fetching user info:", error);
    document.getElementById(
      "userInfoResult"
    ).innerHTML = `<p>Error fetching user info</p>`;
  }
}
