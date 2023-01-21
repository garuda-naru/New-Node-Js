const buf = Buffer.from('Hey');

console.log(buf.toString())
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])


const buf2 = Buffer.alloc(4)
buf2.write('Hey!')

console.log(buf2[0])
console.log(buf2[1])
console.log(buf2[2])