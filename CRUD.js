

//CRUD
let karyawan = [];
let counter = 1;

// function autoCounter (ID){
//     for (var i=0; i<karyawan.length; i++) {
//         if(karyawan.length>1) {
//         // counter ++; 
//         }
//     }
//      return counter;            
//  }

function Karyawan (ID, Nama, Usia, Posisi, Gaji) {
        this.NIK = ID;
        this.NamaKaryawan = Nama;
        this.UsiaKaryawan = Usia;
        this.PosisiKaryawan = Posisi;
        this.TakeHomePay = Gaji;
}   

function CreateKaryawan (Nama, Usia, Posisi, Gaji) {
    karyawan.push(new Karyawan(counter, Nama, Usia, Posisi, Gaji));
    counter++;
    return console.log ({success: true})
}
function UpdateKaryawan (ID, Update_Karyawan) {
        for (var i=0; i<karyawan.length-1; i++) {
            if(karyawan[i].NIK== ID) {
             karyawan[i] = Update_Karyawan; 
             return console.log ({success: true})}
        }
    }

function SelectKaryawan (ID) {
    for (var i =0; i<karyawan.length-1; i++) {
            if(karyawan[i].NIK == ID) 
            console.log (karyawan[i]) ; 
            }
        }

function HapusKaryawan (ID) {
    for (var i=0; i<karyawan.length-1; i++) {
        if(karyawan[i].NIK== ID){
        karyawan.splice(i,0);
        console.log (`Karyawan yang dihapus adalah:${karyawan[i].NamaKaryawan}`);
        }                     
    }
}



CreateKaryawan("Vincent", 25, "Software Engineer", 50000000);
CreateKaryawan ("Ardi", 28, "Software Engineer", 75000000); 
CreateKaryawan ("Nerissa", 32, "Chief Creative Officer", 200000000); 
// console.log (autoCounter());
// console.log (karyawan[1].PosisiKaryawan);
console.log (karyawan[0].NIK);
console.log (karyawan[1].NIK);
console.log (karyawan[2].NIK);
// console.log(counter);
// console.log(karyawan[2]); 
// UpdateKaryawan (2,new Karyawan(1,"Nerissa Arviana",32,"CEO & CCO", 3000000000));
// console.log(karyawan[2]); 
// SelectKaryawan (3);
