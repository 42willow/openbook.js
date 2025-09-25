const { OpenLibraryClient } = require("./dist/index.js");

async function example() {
  const client = new OpenLibraryClient();

  try {
    // Search for books
    const searchResults = await client.search({
      q: "JavaScript",
      limit: 3,
    });

    console.log("Search Results:");
    searchResults.docs.forEach((doc, index) => {
      console.log(
        `${index + 1}. ${doc.title} by ${doc.author_name?.[0] || "Unknown"}`
      );
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

example();
