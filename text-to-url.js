// Take a string and return with hyphens between each words in lowercase
// eg : "heLlo woRld" => hello-world

const urlSlug = (url, str) => {
  let strArr = str.toLowerCase().split(" ");
  strArr = strArr.filter(w => w !== "");

  if (strArr.length <= 1) return url + "/" + strArr.join("");
  return (
    url +
    "/" +
    strArr.map(w => (strArr[strArr.length - 1] === w ? w : w + "-")).join("")
  );
};

console.log(urlSlug("www.example.com", "hello"));
