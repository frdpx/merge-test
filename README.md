# Merge

Merges three sorted integer arrays into a single ascending-sorted array without using any built-in sort function.

## Function Interface

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

| Parameter      | Order      |
| -------------- | ---------- |
| `collection_1` | ascending  |
| `collection_2` | descending |
| `collection_3` | ascending  |

**Returns** a new array containing all elements sorted in ascending order.

## Requirements

- Node.js >= 18
- npm >= 9

## Setup

```bash
npm install
```

## Run Unit Tests

```bash
npm test
```

## Example

```ts
import { merge } from "./merge";

merge([1, 3, 5], [6, 4, 2], [2, 7, 9]);
// => [1, 2, 2, 3, 4, 5, 6, 7, 9]
```
