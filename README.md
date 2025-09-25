# openbook.js

A TypeScript client library for the [Open Library API](https://openlibrary.org/developers/api).

## Installation

```bash
npm install openbook.js
```

## Usage

```typescript
import { OpenLibraryClient } from 'openbook.js';

const client = new OpenLibraryClient();

// Search for books
const searchResults = await client.search({
  q: 'Harry Potter',
  limit: 10
});

console.log(searchResults.docs);

// Get a specific work
const work = await client.getWork('OL45804W');
console.log(work.title);

// Get a specific book
const book = await client.getBook('OL7353617M');
console.log(book.title);
```

## API

### OpenLibraryClient

#### `search(params: SearchRequest): Promise<SearchResponse>`

Search for books using the Open Library search API.

**Parameters:**
- `q` (string): The search query
- `fields` (string, optional): Comma-separated list of fields to return
- `sort` (string, optional): Sort order
- `lang` (string, optional): Language filter
- `offset` (number, optional): Number of results to skip
- `limit` (number, optional): Maximum number of results to return

#### `getWork(id: string): Promise<Work>`

Get a specific work by its Open Library ID.

#### `getBook(id: string): Promise<Book>`

Get a specific book by its Open Library ID.

## Types

The library exports TypeScript types for all API responses:

- `SearchRequest`
- `SearchResponse`
- `Work`
- `Book`

## License

ISC