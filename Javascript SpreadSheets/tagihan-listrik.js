var tarifPerKWH = 1700;


var dataKamar = [
  { noKamar: "A01", nama: "Budi",   tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A02", nama: "Soni",   tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A03", nama: "Ijum",   tipe: "Deluxe",   tarifTetap: 100000 },
  { noKamar: "A04", nama: "Eko",    tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A05", nama: "Jaya",   tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A06", nama: "Rendi",  tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A07", nama: "Heri",   tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A08", nama: "Wawan",  tipe: "Deluxe",   tarifTetap: 100000 },
  { noKamar: "A09", nama: "Didin",  tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A10", nama: "Rahmat", tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A11", nama: "Rafly",  tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A12", nama: "Robi",   tipe: "Deluxe",   tarifTetap: 100000 },
  { noKamar: "A13", nama: "Fakhri", tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A14", nama: "Faujan", tipe: "Deluxe",   tarifTetap: 100000 },
  { noKamar: "A15", nama: "Rayhan", tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A16", nama: "Firman", tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A17", nama: "Agung",  tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A18", nama: "Asep",   tipe: "Deluxe",   tarifTetap: 100000 },
  { noKamar: "A19", nama: "Dodi",   tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A20", nama: "Dika",   tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A21", nama: "Nazril", tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A22", nama: "Fadhil", tipe: "Deluxe",   tarifTetap: 100000 },
  { noKamar: "A23", nama: "Adul",   tipe: "Premium",  tarifTetap: 150000 },
  { noKamar: "A24", nama: "Imam",   tipe: "Standard", tarifTetap: 75000 },
  { noKamar: "A25", nama: "Muji",   tipe: "Premium",  tarifTetap: 150000 },
];


var dataMeter = [
  { noKamar: "A01", meterAwal: 1200, meterAkhir: 1345 },
  { noKamar: "A02", meterAwal: 1878, meterAkhir: 1957 },
  { noKamar: "A03", meterAwal: 1789, meterAkhir: 1882 },
  { noKamar: "A04", meterAwal: 1281, meterAkhir: 1405 },
  { noKamar: "A05", meterAwal: 1439, meterAkhir: 1591 },
  { noKamar: "A06", meterAwal: 1211, meterAkhir: 1403 },
  { noKamar: "A07", meterAwal: 1094, meterAkhir: 1204 },
  { noKamar: "A08", meterAwal: 1105, meterAkhir: 1242 },
  { noKamar: "A09", meterAwal: 1781, meterAkhir: 1947 },
  { noKamar: "A10", meterAwal: 1142, meterAkhir: 1228 },
  { noKamar: "A11", meterAwal: 1503, meterAkhir: 1728 },
  { noKamar: "A12", meterAwal: 1180, meterAkhir: 1275 },
  { noKamar: "A13", meterAwal: 1360, meterAkhir: 1562 },
  { noKamar: "A14", meterAwal: 1070, meterAkhir: 1291 },
  { noKamar: "A15", meterAwal: 1827, meterAkhir: 1885 },
  { noKamar: "A16", meterAwal: 1582, meterAkhir: 1804 },
  { noKamar: "A17", meterAwal: 1947, meterAkhir: 2158 },
  { noKamar: "A18", meterAwal: 1919, meterAkhir: 2014 },
  { noKamar: "A19", meterAwal: 1159, meterAkhir: 1297 },
  { noKamar: "A20", meterAwal: 1148, meterAkhir: 1204 },
  { noKamar: "A21", meterAwal: 1490, meterAkhir: 1598 },
  { noKamar: "A22", meterAwal: 1224, meterAkhir: 1373 },
  { noKamar: "A23", meterAwal: 1816, meterAkhir: 1997 },
  { noKamar: "A24", meterAwal: 1234, meterAkhir: 1479 },
  { noKamar: "A25", meterAwal: 1951, meterAkhir: 2084 },
];

console.log("Sheet KAMAR");
console.table(dataKamar);

console.log("Sheet METERAN");
console.table(dataMeter);

function cekStatus(pakai) {
  if (pakai < 100) {
    return "HEMAT";
  } else if (pakai >= 200) {
    return "TINGGI";
  } else {
    return "NORMAL";
  }
}

var hasil = [];
for (var i = 0; i < dataKamar.length; i++) {
    var no = dataKamar[i].noKamar;
    var nama = dataKamar[i].nama;
    var tipe = dataKamar[i].tipe;
    var tarifTetap = dataKamar[i].tarifTetap;

    var awal = dataMeter[i].meterAwal;
    var akhir = dataMeter[i].meterAkhir;
    var pakai = akhir - awal;

    var biaya = pakai * tarifPerKWH;
    var total = biaya + tarifTetap;

    hasil.push({
        kamar : no,
        nama : nama,
        tipe : tipe,
        pakai : pakai,
        biaya : biaya,
        tarifTetap : tarifTetap,
        total : total,
        status : cekStatus(pakai),
    });
}

console.log("Tagihan Listrik");
console.table(hasil);

var totalPakai = 0;
var totalTagihan = 0;
var tertinggi = hasil[0].pakai;
var terendah = hasil[0].pakai;

for (var i = 0; i < hasil.length; i++) {
    totalPakai += hasil[i].pakai;
    totalTagihan += hasil[i].total;
    if (hasil[i].pakai > tertinggi) tertinggi = hasil[i].pakai;
    if (hasil[i].pakai < terendah) terendah = hasil[i].pakai;
}

var rataRata = totalPakai / hasil.length;

console.log(" ");
console.log(" Ringkasan ");
console.log("total konsumsi seluruh kos: "+ totalPakai);
console.log("total tagihan seluruh kos : "+ totalTagihan);
console.log("rata konsumsi listrik     : "+ rataRata.toFixed(2));
console.log("konsumsi tertinggi        : "+ tertinggi);
console.log("konsumsi terendah         : "+ terendah);
console.log(" ");

var tipeList = ["Standard", "Deluxe", "Premium"];
for (var t = 0; t < tipeList.length; t++) {
    var jumlah = 0;
    var count = 0;
    for (var i = 0; i < hasil.length; i++) {
        if (hasil[i].tipe === tipeList[t]) {
            jumlah += hasil[i].pakai;
            count++;
        }
    }
    console.log("rata-rata " + tipeList[t] + ": " + (jumlah / count).toFixed(1));
}

var konsumsiMax = hasil[0];
var tagihanMax = hasil[0];
var jumlahHemat = 0;
var jumlahNormal = 0;
var jumlahTinggi = 0;

for (var i = 0; i < hasil.length; i++) {
  if (hasil[i].pakai > konsumsiMax.pakai) {
    konsumsiMax = hasil[i];
  }
  if (hasil[i].total > tagihanMax.total) {
    tagihanMax = hasil[i];
  }
  if (hasil[i].status === "HEMAT") jumlahHemat++;
  else if (hasil[i].status === "NORMAL") jumlahNormal++;
  else if (hasil[i].status === "TINGGI") jumlahTinggi++;
}
console.log("Kamar dengan konsumsi terbesar: " + konsumsiMax.kamar);
console.log("Kamar dengan tagihan terbesar : " + tagihanMax.kamar);
console.log("Jumlah kategori HEMAT         : " + jumlahHemat);
console.log("Jumlah kategori NORMAL        : " + jumlahNormal);
console.log("Jumlah kategori TINGGI        : " + jumlahTinggi);