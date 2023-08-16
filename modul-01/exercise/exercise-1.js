{
    // Area of Rectangle
    let panjang = 10;
    let lebar = 20;
    let luas = panjang * lebar;
    console.info(luas)
    
    // Perimeter of Rectangle
    let keliling = panjang * 2 + lebar * 2
    console.info(keliling)
    }
    
    {
    // Diameter, Circumference, and Area of a Circle
    // Diameter
    let r = 20;
    let diameter = 2 * r
    console.info(diameter)
    
    //Circumference
    let pi = 3.14;
    let keliling = 2 * pi * r;
    console.info(keliling);
    
    // Area
    let luas = pi * r * r;
    console.info(luas);
    }
    
    {
    // Angle of Triangle
    let sudut1 = 50;
    let sudut2 = 20;
    let sudut3 = 180 - (sudut1 + sudut2);
    console.info(sudut3)
    }
    
    // Difference Between Dates in Days
    let date1 = new Date("2023-10-09");
    let date2 = new Date("2023-10-03");
    
    let result = (date1 - date2) / (24 * 60 * 60 * 1000);
    console.info(result + "hari");
    
    // Convert Days to Years, Months, and Days
    let hariHari = 390;
    let tahun = (hariHari / 365);
    let bulan = Math.floor((hariHari % 365) / 30);
    let hari = Math.floor((hariHari % 365) % 30);
    
    console.info(`${tahun} Tahun, ${bulan} Bulan, ${hari} Hari`);
    
    