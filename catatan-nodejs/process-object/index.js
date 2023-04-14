const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2]; //penyeyuaian index arraynya
const environment = process.env.NODE_ENV;
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed;
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

//jalankan di cmd(wajib)
/*SET NODE_ENV=development && node ./process-object/index.js HANBINKIM
sasuaian namo foldernyo */
