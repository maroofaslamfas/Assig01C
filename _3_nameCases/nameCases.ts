let p_name: string = "mashood rAza hashmI";

console.log(`lower case: ${p_name.toLowerCase()}`);
console.log(`upper case: ${p_name.toUpperCase()}`);

const titleName = p_name.toLowerCase().split(" ").map((l: string) => l[0].toUpperCase() + l.slice(1)).join(" ");
console.log(`title case: ${titleName}`);

for (let i = 0; i<5; i++){
}