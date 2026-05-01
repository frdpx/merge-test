export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
) {
  for (let x = 0; x < collection_2.length - 1; x++) {
    if (collection_2[x] < collection_2[x + 1]) {
      throw new Error("collection_2 must be sorted descending (max to min)");
    }
  }

  const reversed_c2 = [...collection_2].reverse();
  const result: number[] = [];
  let i = 0,
    j = 0,
    k = 0;

  while (
    i < collection_1.length &&
    j < reversed_c2.length &&
    k < collection_3.length
  ) {
    const a = collection_1[i];
    const b = reversed_c2[j];
    const c = collection_3[k];

    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= a && b <= c) {
      result.push(b);
      j++;
    } else {
      result.push(c);
      k++;
    }
  }

  while (i < collection_1.length && j < reversed_c2.length) {
    if (collection_1[i] <= reversed_c2[j]) {
      result.push(collection_1[i]);
      i++;
    } else {
      result.push(reversed_c2[j]);
      j++;
    }
  }

  while (i < collection_1.length && k < collection_3.length) {
    if (collection_1[i] <= collection_3[k]) {
      result.push(collection_1[i]);
      i++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (j < reversed_c2.length && k < collection_3.length) {
    if (reversed_c2[j] <= collection_3[k]) {
      result.push(reversed_c2[j]);
      j++;
    } else {
      result.push(collection_3[k]);
      k++;
    }
  }

  while (i < collection_1.length) {
    result.push(collection_1[i]);
    i++;
  }
  while (j < reversed_c2.length) {
    result.push(reversed_c2[j]);
    j++;
  }
  while (k < collection_3.length) {
    result.push(collection_3[k]);
    k++;
  }

  return result;
}
