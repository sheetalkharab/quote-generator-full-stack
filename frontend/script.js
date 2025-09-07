async function fetchQuote() {
  const res = await fetch(
    "https://sheetalkharab-backend.hosting.codeyourfuture.io/"
  );
  const data = await res.json();
  document.getElementById("quote").innerText = `"${data.quote}"`;
  document.getElementById("author").innerText = `- ${data.author}`;
}

async function addNewQuote() {
  const quote = document.getElementById("newQuote").value;
  const author = document.getElementById("newAuthor").value;

  if (!quote || !author) {
    alert("Please enter both quote and author.");
    return;
  }

  const res = await fetch(
    "https://sheetalkharab-backend.hosting.codeyourfuture.io/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quote, author }),
    }
  );

  if (res.ok) {
    alert("Quote added successfully!");
    // Optionally clear input fields after submission of new quote
    document.getElementById("newQuote").value = "";
    document.getElementById("newAuthor").value = "";
    fetchQuote(); // show a random quote after adding new quote by user
  } else {
    alert("Failed to add quote.");
  }
}
document.getElementById("new-quote").addEventListener("click", fetchQuote);
document.getElementById("addNew-quote").addEventListener("click", addNewQuote);
fetchQuote();
