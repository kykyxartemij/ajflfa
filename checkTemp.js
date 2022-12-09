
let checkTemp = (temp) => { 
    const t = Number(temp); 
    if (t <= 20) { 
        return //-1
    }
    if (t <=40 && t >=21  )return 0 
    return 1; 
    }