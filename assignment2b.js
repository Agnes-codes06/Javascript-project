let income=1000001

if (income<=5999){

    console.log('your monthly contribution is ksh150');
}

else if(income>=6000 && income<=7999){

    console.log('your monthly contribution is ksh300');
}

else if(income>=8000 && income<=11999){

    console.log('your monthly contribution is ksh400');
}

else if(income>=12000 && income<=14999){

    console.log('your monthly contribution is ksh500');
}

else if(income>=15000 && income<=19999){

    console.log('your monthly contribution is ksh600')
}

else if(income>=20000 && income<=24999){

    console.log('your monthly contribution is ksh750');
}

else if(income>=25000 && income<=29999){

    console.log('your monthly contribution is ksh850');
}

else if(income>=30000 && income<=49999){

    console.log('your monthly contribution is ksh1000');
}

else if(income>=50000 && income<=99999){

    console.log('your monthly contribution is ksh1500');
}

else if(income>=100000){
    console.log('your monthly contribution is ksh2000');
}

else{

    console.log('Invalid Income')
}