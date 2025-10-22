# openbook.js

A TypeScript client library for the [Open Library API](https://openlibrary.org/developers/api).

## Installation

```bash
npm install openbook.js
```

## Quick Start
When creating a client instance, it's recommended to provide a custom User-Agent string that identifies your application and provides contact information:

```typescript
const client = new OpenLibraryClient("MyAppName/1.0 (myemail@example.com)");
```

This helps Open Library administrators contact you if there are any issues with your API usage.

## API Reference

### Search Functions

Functions for searching books and authors in the Open Library database.

#### `search(params: SearchRequest): Promise<SearchResponse>`

Search for books using the Open Library search API.

**Parameters:**
- `q` (string, required): The search query
- `fields` (string, optional): Comma-separated list of fields to return
- `sort` (string, optional): Sort order, all the available options are listed [here](https://github.com/internetarchive/openlibrary/blob/b4afa14b0981ae1785c26c71908af99b879fa975/openlibrary/plugins/worksearch/schemes/works.py#L119-L153)
- `lang` (string, optional): Language filter (Does not exclude non-matching results, use ISO 639 codes)
- `language` (string, optional): Language filter, this excludes non-matching results
- `offset` (number, optional): Number of results to skip
- `limit` (number, optional): Maximum number of results to return
- `page` (number, optional): Page number for pagination

**Example:**

Basic search
```typescript
const results = await client.search({ 
  q: 'Love in the Time of Cholera' 
});
```

Advanced search with filters
```typescript
const advancedResults = await client.search({
  q: 'Love in the Time of Cholera',
  language: 'spa',
  limit: 20,
  offset: 0,
  sort: 'rating'
});
```

Search with specific fields
```typescript
const limitedFields = await client.search({
  q: 'one hundred years of solitude',
  fields: 'key,title',
  limit: 10
});
```

#### `searchAuthors(params: SearchRequest): Promise<SearchAuthorResponse>`

Search for authors using the Open Library author search API.

**Parameters:** 
- `q` (string, required): The search query
- `offset` (number, optional): Number of results to skip
- `limit` (number, optional): Maximum number of results to return
- `page` (number, optional): Page number for pagination

**Example:**


Search for authors
```typescript
const authorResults = await client.searchAuthors({ 
  q: 'García Márquez' 
});
```

Search with pagination
```typescript
const page2 = await client.searchAuthors({
  q: 'García Márquez',
  limit: 10,
  offset: 10
});
```
---

### Work Functions

Functions for retrieving work (conceptual book) information and their editions.

#### `getWork(id: string): Promise<Work>`

Get detailed information about a specific work by its Open Library ID.

**Parameters:**
- `id` (string, required): Open Library work ID (e.g., 'OL45804W')

**Example:**

```typescript
const work = await client.getWork('OL45804W');
```

#### `getWorkEditions(id: string): Promise<WorkEditionResponse>`

Get all editions of a specific work.

**Parameters:**
- `id` (string, required): Open Library work ID (e.g., 'OL45804W')

**Example:**

```typescript
const editions = await client.getWorkEditions('OL45804W');
```
---

### Edition Functions

Functions for retrieving specific edition information.

#### `getEdition(params: { id?: string; isbn?: string }): Promise<Edition>`

Get a specific edition by its Open Library ID or ISBN.

**Parameters:**
- Object with either:
  - `id` (string): Open Library edition ID (e.g., 'OL7353617M')
  - `isbn` (string): ISBN-10 or ISBN-13 (e.g., '0140328726')

**Note:** Passing a string directly is deprecated. Use an object instead.

**Example:**

```typescript
// Get edition by Open Library ID
const editionById = await client.getEdition({ 
  id: 'OL7353617M' 
});

// Get edition by ISBN
const editionByIsbn = await client.getEdition({ 
  isbn: '0140328726' 
});
```

---

### Author Functions

Functions for retrieving author information and their works.

#### `getAuthor(id: string): Promise<Author>`

Get detailed information about an author by their Open Library ID.

**Parameters:**
- `id` (string, required): Open Library author ID (e.g., 'OL23919A')

**Example:**

```typescript
const author = await client.getAuthor('OL27363A');
```

#### `getAuthorWorks(id: string, query?: AuthorWorksQuery): Promise<AuthorWorksResponse>`

Get all works by a specific author with optional pagination.

**Parameters:**
- `id` (string, required): Open Library author ID (e.g., 'OL23919A')
- `query` (object, optional):
  - `limit` (number): Maximum number of works to return
  - `offset` (number): Number of works to skip

**Example:**

```typescript
const works = await client.getAuthorWorks('OL23919A');
```
Paginated request

```typescript
const page1 = await client.getAuthorWorks('OL23919A', {
  limit: 10,
  offset: 0
});

const page2 = await client.getAuthorWorks('OL23919A', {
  limit: 10,
  offset: 10
});
```

---

## TypeScript Types
A lot of the raw Open Library API responses are inconsistent or contain fields with varying types depending on the data. This library abstracts those inconsistencies away by normalizing the data structure and types.

### Search Types
- `SearchRequest` - Parameters for search requests
- `SearchResponse` - Response from book search API
- `SearchResponseDocument` - Individual book search result
- `SearchAuthorResponse` - Response from author search API

### Work Types
- `Work` - A work object from Open Library (conceptual book)
- `WorkEdition` - An edition within a work's editions response
- `WorkEditionResponse` - Response containing work editions with pagination

### Edition Types
- `Edition` - A standalone edition object

### Author Types
- `Author` - An author object with biographical information
- `AuthorWorkEntry` - A work entry within an author's works response
- `AuthorWorksResponse` - Response containing author works with pagination
- `AuthorWorksQuery` - Query parameters for author works requests

---

## Error Handling

All API methods may throw errors. It's recommended to wrap calls in try-catch blocks:

```typescript
try {
  const work = await client.getWork('OL45804W');
  ...
} catch (error) {
  console.error('Failed to fetch work:', error.message);
}
```

## License

See [LICENSE](LICENSE) file for details.

## Contributing
One of the drawbacks of the Open Library API is that it is incomplete and sometimes inconsistent. If you find missing data or inconsistencies, consider contributing to this package or the Open Library project itself to help improve the data quality.

Contributions are welcome! Please feel free to submit a Pull Request.

## Links

- [Open Library API Documentation](https://openlibrary.org/developers/api)
- [Open Library Website](https://openlibrary.org)