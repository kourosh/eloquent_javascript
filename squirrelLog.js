let journal = [];

function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}

addEntry(["worked", "touched tree", "pizza", "running", "gardening", "television"], false);
addEntry(["worked", "ice cream", "cauliflower", "lasgna", "touched tree", "brushed teeth"], false);
addEntry(["rested", "cycling", "beer", "sex", "reddit", "art", "peanuts"], true);

for (i = 0; i < journal.length; i++) {
    console.log(journal[i]);
}