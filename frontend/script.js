async function fetchQuote() {
  const res = await fetch(
    "https://v0c4so84scsckggcgwsk0so4.hosting.codeyourfuture.io/"
  );
  const data = await res.json();
  document.getElementById("quote").innerText = `"${data.quote}"`;
  document.getElementById("author").innerText = `- ${data.author}`;
}
document.getElementById("new-quote").addEventListener("click", fetchQuote);
fetchQuote();
