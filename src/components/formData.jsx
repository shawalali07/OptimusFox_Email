function FD(emailDomain, emailData, image) {
  console.log(emailDomain, emailData, image);
  const formData = new FormData();
  formData.append("emailData", emailData);
  formData.append("Image", image);
  emailDomain.forEach((element) => {
    formData.append("email", element);
  });

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
  }).then((res) => (res));
}

export default FD;
