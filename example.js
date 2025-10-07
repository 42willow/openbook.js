const { OpenLibraryClient } = require("./dist/index.js");
const client = new OpenLibraryClient("MyAppName/1.0 (myemail@example.com)");

async function searchExample(
  query = "One Hundred Years of Solitude",
  limit = 3
) {
  try {
    console.log("=== Search Example ===");
    const searchResults = await client.search({
      q: query,
      limit: limit,
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
    console.error(
      "Search failed:",
      error instanceof Error ? error.message : String(error)
    );
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
    console.error(
      "Failed to get work:",
      err instanceof Error ? err.message : String(err)
    );
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
    console.error(
      "Failed to get work editions:",
      err instanceof Error ? err.message : String(err)
    );
  }
}

async function getAuthorExample(authorId) {
  try {
    console.log("=== Author Example ===");
    const author = await client.getAuthor(authorId);
    console.log(author);
  } catch (err) {
    console.error(
      "Failed to get author:",
      err instanceof Error ? err.message : String(err)
    );
  }
}

async function getAuthorWorksExample(authorId) {
  try {
    console.log("=== Author Works Example ===");
    const worksResponse = await client.getAuthorWorks(authorId);
    console.log(`Total works: ${worksResponse.size}`);
  } catch (err) {
    console.error(
      "Failed to get author works:",
      err instanceof Error ? err.message : String(err)
    );
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
    console.error(
      "Failed to get edition:",
      err instanceof Error ? err.message : String(err)
    );
  }
}

async function runAllExamples() {
  // await searchExample("One Hundred Years of Solitude", 3);
  // await getWorkExample("OL274505W"); // One Hundred Years of Solitude
  // await getWorkEditionsExample("OL274505W"); // One Hundred Years of Solitude editions
  await getEditionExample({id: "OL60001193M"}); // Specific edition
  // await getAuthorExample("OL27363A"); // Gabriel García Márquez
  // await getAuthorWorksExample("OL27363A"); // Gabriel García Márquez's works
}

runAllExamples().catch(console.error);
