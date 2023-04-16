const fs= require('fs');

const writableStream=fs.createWriteStream('output.txt');
writableStream.write('Ini Teks Pertama\n');
writableStream.write('Ini Teks Kedua\n');
writableStream.end;
/*
file output.txt akan otomatis muncul pada saat file dijalankan pastikan tujuan folder cd writableStream dan jalankan node index.js
*/