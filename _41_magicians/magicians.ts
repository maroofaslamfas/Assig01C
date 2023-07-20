let magicians = ["maroof", "zain", "aslam", "ali", "raza", "khan"];

function print_magicians(arr: string[]){
    for(let i=0; i<arr.length; i++){
        console.log(`Magician ${i+1}: ${arr[i]}`);
    }
}

print_magicians(magicians);