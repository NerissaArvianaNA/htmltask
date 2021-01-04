// fundamental exams 1

function bracket (string){
    var myArr = string.split("");
    for (var i = 0; i<myArr.length; i++){
        if(myArr[0]=="(" && myArr[myArr.length-1]==")" && myArr.length%2==0)
        return console.log({
            success: true,
            message: "Berhasil!"
        })
        else {
            return console.log({
            success: false,
            message: "String tidak memenuhi kriteria"  
            })
        }
    }
}
 
bracket("(()"); 

// fundamental exams 2

let Parking =[];
var maxParkLot = 0; 
var Loc = 1;

function ParkingLot (kapasitas,lokasi,no_plat) {
    this.Kapasitas = kapasitas;
    this.Lokasi = lokasi;
    this.NoPlat = no_plat;
}   

function createParkingLot(kapasitas){
    if (kapasitas>0 && kapasitas!="") maxParkLot=kapasitas; 
    else {
        return console.log ("Parking Lot not yet created")
    }
        return console.log({ 
        success: true,
        message: "Parking Lot Capacity created"
        })
    }

function Park (kapasitas,lokasi,no_plat){
        Parking.push(new ParkingLot(kapasitas,lokasi,no_plat));
        for (var i =0; i<Parking.length; i++){
            if(Parking.length>=0 && Parking.length<=maxParkLot&& Parking[i]!=0)
        Loc ++;
        maxParkLot--;
        }
        
    return console.log ({
        success :true,
        message :"Plat mobil terinput, parklot tersedia"
        })
}

function Exit(no_plat){
    for (var i =0; i<Parking.length; i++){
        if(Parking[i].NoPlat===no_plat) {
            return console.log (`Mobil ada di slot ke:${Parking[i].NoPlat}`) 
            Parking.splice(i,0);
        }
        return console.log ({
            success :true})     
    }
}

function FindCar(no_plat){
    for (var i =0; i<Parking.length; i++){
        if(Parking[i].NoPlat===no_plat) {
            return console.log (`Mobil ada di slot ke:${Parking[i].Lokasi}`) 
        }
        return console.log ({
            success :true})     
    }
}

function seeParkingLot(){
    return console.log(Parking());s
}

createParkingLot(8);
Park(maxParkLot,Loc,"B 123 MAI");
Park(maxParkLot,Loc,"B 456 MAI");
console.log(Parking[1].Lokasi);