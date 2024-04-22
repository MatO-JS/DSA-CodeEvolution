class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    // Check if there is no value stored at that index.If there is no bucket we create a new array and push the key value pair
    if (!bucket) {
      this.table[index] = [[key, value]];

      // If the value already exists at that index then
    } else {
      // We first check if the array contains a sub array with the same key.We use array.find() for that
      const sameKeyItem = bucket.find((item) => item[0] === key);
      // If such an item exists we update its value.
      if (sameKeyItem) {
        sameKeyItem[1] = value;

        // If not we push the key value pair
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
      return undefined;
    }
    // return this.table[this.hash(key)];
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
console.log(table);

table.set("name", "Balu");
table.set("age", 55);
table.set("mane", "Clark");
table.set("name", "Diana");
table.display();
table.remove("name");
console.log("----------------");
table.display();
console.log(table.get("name"));
console.log(table.get("mane"));
