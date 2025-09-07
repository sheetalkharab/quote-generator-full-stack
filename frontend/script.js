async function fetchQuote() {
  const res = await fetch(
    "https://sheetalkharab-backend.hosting.codeyourfuture.io/"
  );
  const data = await res.json();
  document.getElementById("quote").innerText = `"${data.quote}"`;
  document.getElementById("author").innerText = `- ${data.author}`;
}
document.getElementById("new-quote").addEventListener("click", fetchQuote);
fetchQuote();
