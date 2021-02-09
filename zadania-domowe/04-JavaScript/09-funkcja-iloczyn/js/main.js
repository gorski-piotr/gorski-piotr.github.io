function funkcja (par1, par2, par3) {
    let iloczyn = par1 * par2 * par3;
    return iloczyn;
}

let zmiennaGlobalna = funkcja (2, 3, 1);

console.log(zmiennaGlobalna);