//* hashtable or hashmap is a fixed sized array whose indexs are mapped to a hash code produced from the keys of a map by a hashing function.

// ? Implementing a hashmap

/*

create a class with size property and array with size


*/

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
    this.table[this.hash(key)] = value;
  }

  get(key) {
    return this.table[this.hash(key)];
  }

  clear(key) {
    this.table[this.hash(key)] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(5);
console.log(table);

table.set("name", "Balu");
table.set("age", 55);

table.display();

console.log(table.get("name"));
