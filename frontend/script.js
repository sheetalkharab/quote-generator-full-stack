async function fetchQuote() {
  const res = await fetch("http://127.0.0.1:3000/");
  const data = await res.json();
  document.getElementById("quote").innerText = `"${data.quote}"`;
  document.getElementById("author").innerText = `- ${data.author}`;
}
document.getElementById("new-quote").addEventListener("click", fetchQuote);
fetchQuote();
