//* What is a hashtable ?
//?

//* Implementation

class HashTable {

    constructor(size){
        this.size = size;
        this.table = new Array(size);

    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    
    insertAt(key,value) {

        this.table[this.hash(key)] = value;
    }

    valueAt(key){
        this.table[this.hash(key)];
    }

    removeAt(key){
        this.table(this.hash(key)) = undefined;
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i])
            console.log(i,this.table[i])
        }
    }
}

const table = new HashTable(5);
console.log(table);

table.insertAt("name", "Balu");
table.insertAt("age", 55);

table.display();

console.log(table.valueAt("name"));