const { OpenLibraryClient } = require("./dist/index.js");
const client = new OpenLibraryClient();

async function searchExample() {
  try {
    console.log("=== Search Example ===");
    const searchResults = await client.search({
      q: "Harry Potter",
      limit: 3,
    });

    console.log(
      `Found ${searchResults.num_found} results, showing first ${searchResults.docs.length}:`
    );
    searchResults.docs.forEach((doc, index) => {
      console.log(
        `${index + 1}. "${doc.title}" by ${
          doc.author_name?.[0] || "Unknown"
        } (${doc.first_publish_year || "N/A"})`
      );
    });
    console.log("\n");
  } catch (error) {
    console.error("Search failed:", error.message);
    console.log(
      "Note: Search might fail due to network issues. The other examples should still work.\n"
    );
  }
}

async function getWorkExample(workId) {
  try {
    console.log("=== Work Example ===");
    const work = await client.getWork(workId);
    console.log(work);
  } catch (err) {
    console.error("Failed to get work:", err.message);
  }
}

async function getWorkEditionsExample(workId) {
  try {
    console.log("=== Work Editions Example ===");
    const editionsResponse = await client.getWorkEditions(workId);
    console.log(`Total editions: ${editionsResponse.size}`);
    console.log(`Showing first ${editionsResponse.entries.length} editions:`);

    editionsResponse.entries.slice(0, 10).forEach((edition, index) => {
      console.log(
        `${index + 1}. "${edition.title}" (${
          edition.publish_date || "Unknown year"
        }) - ${edition.publishers?.[0] || "Unknown publisher"}`
      );
    });

    console.log(
      `\nPagination links available: ${Object.keys(
        editionsResponse.links || {}
      ).join(", ")}`
    );
    console.log("\n");
  } catch (err) {
    console.error("Failed to get work editions:", err.message);
  }
}

async function getAuthorExample(authorId) {
  try {
    console.log("=== Author Example ===");
    const author = await client.getAuthor(authorId);
    console.log(`Author: ${author.name}`);
    console.log(
      `Bio: ${
        author.bio?.value
          ? author.bio.value.substring(0, 200) + "..."
          : "No bio available"
      }`
    );
    console.log(`Birth Date: ${author.birth_date || "Unknown"}`);
    console.log(`Death Date: ${author.death_date || "Unknown"}`);
    console.log(`Personal Name: ${author.personal_name || "None"}`);
    console.log(
      `Alternate Names: ${
        author.alternate_names?.slice(0, 3).join(", ") || "None"
      }`
    );
    console.log(`Key: ${author.key}`);
    console.log("\n");
  } catch (err) {
    console.error("Failed to get author:", err.message);
  }
}

async function getAuthorWorksExample(authorId) {
  try {
    console.log("=== Author Works Example ===");
    const worksResponse = await client.getAuthorWorks(authorId);
    console.log(`Total works: ${worksResponse.size}`);
    console.log(
      `Showing first ${Math.min(10, worksResponse.entries.length)} works:`
    );

    worksResponse.entries.slice(0, 10).forEach((work, index) => {
      console.log(`${index + 1}. "${work.title}" (${work.key})`);
    });

    console.log(
      `\nPagination links available: ${Object.keys(
        worksResponse.links || {}
      ).join(", ")}`
    );
    console.log("\n");
  } catch (err) {
    console.error("Failed to get author works:", err.message);
  }
}

async function getAuthorExample(authorId) {
  try {
    console.log("=== Author Example ===");
    const author = await client.getAuthor(authorId);
    console.log(author);
  } catch (err) {
    console.error("Failed to get author:", err.message);
  }
}

async function getAuthorWorksExample(authorId) {
  try {
    console.log("=== Author Works Example ===");
    const worksResponse = await client.getAuthorWorks(authorId);
    console.log(`Total works: ${worksResponse.size}`);
  } catch (err) {
    console.error("Failed to get author works:", err.message);
  }
}

async function getEditionExample(editionId) {
  try {
    console.log("=== Edition Example ===");
    const edition = await client.getEdition(editionId);
    console.log(`Edition: "${edition.title}"`);
    console.log(`Subtitle: ${edition.subtitle || "None"}`);
    console.log(`Publishers: ${edition.publishers?.join(", ") || "Unknown"}`);
    console.log(`Published: ${edition.publish_date || "Unknown"}`);
    console.log(`Pages: ${edition.number_of_pages || "Unknown"}`);
    console.log(`Format: ${edition.physical_format || "Unknown"}`);
    console.log(`Key: ${edition.key}`);
    console.log("\n");
  } catch (err) {
    console.error("Failed to get edition:", err.message);
  }
}

async function runAllExamples() {
  // await searchExample();
  // await getWorkExample("OL468431W"); // The Great Gatsby
  // await getWorkEditionsExample("OL468431W"); // The Great Gatsby editions
  // await getEditionExample("OL27130218M"); // Specific edition
  await getAuthorExample("OL27349A"); // J.K. Rowling
  await getAuthorExample("OL391839A")

  // await getAuthorWorksExample("OL23919A"); // J.K. Rowling's works
}

runAllExamples().catch(console.error);
