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

// Get work editions
const workEditions = await client.getWorkEditions('OL45804W');
console.log(workEditions.entries); // Array of editions
console.log(workEditions.size); // Total number of editions
console.log(workEditions.links); // Pagination links

// Get a specific edition
const edition = await client.getEdition('OL7353617M');
console.log(edition.title);
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

#### `getWorkEditions(id: string): Promise<WorkEditionResponse>`

Get all editions of a specific work by its Open Library ID. Returns an object containing:
- `entries`: Array of `WorkEdition` objects
- `size`: Total number of editions available
- `links`: Pagination links for additional results

#### `getEdition(id: string): Promise<Edition>`

Get a specific edition by its Open Library ID.

## Types

The library exports TypeScript types for all API responses:

- `SearchRequest` - Parameters for search requests
- `SearchResponse` - Response from search API
- `Work` - A work object from Open Library
- `WorkEdition` - An edition within a work's editions response
- `WorkEditionResponse` - Response containing work editions with pagination
- `Edition` - A standalone edition object

## License

ISC