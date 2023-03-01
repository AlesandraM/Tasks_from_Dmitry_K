class BigNumber {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        let num1 = Array.from(this.num1).reverse();
        let num2 = Array.from(this.num2).reverse();

        for(let i = 0; i < num2.length; ++i) {
            num1[i] = ~~num1[i] + ~~num2[i]
            if (num1[i] > 9) {
                num1[i] -= 10
                num2[i+1] = ~~num2[i+1] + 1
            }
        }
        return(num1.reverse().join(""));
    }

    sub() {
        if(Number(this.num1)>Number(this.num2)){
            let num1 = Array.from(this.num1).reverse();
            let num2 = Array.from(this.num2).reverse();
        
            for(let i = 0; i < num2.length; ++i){
                if ((num1[i] - num2[i]) < 0) {
                    num1[i] = (~~num1[i] + 10) - num2[i];
                    num1[i+1] = num1[i+1] - 1;
                }else{
                    num1[i] -= num2[i];
                }
            }
            return(num1.reverse().join(""));
        }else{
            let num1 = Array.from(this.num2).reverse();
            let num2 = Array.from(this.num1).reverse();
        
            for(let i = 0; i < num2.length; ++i){
                if ((num1[i] - num2[i]) < 0) {
                    num1[i] = (~~num1[i] + 10) - num2[i];
                    num1[i+1] = num1[i+1] - 1;
                }else{
                    num1[i] -= num2[i];
                }
            }
            return("-" + num1.reverse().join(""));
        }
    }

    multi() {
        if (this.num1 === '0' || this.num2 === '0') {
            return '0';
        }
        
        let arr1 = Array.from(this.num1).reverse();
        let arr2 = Array.from(this.num2).reverse();
         
        var mass = [];
            
        for (var i = 0; i < arr2.length; i++)
        {
            for (var j = 0; j < arr1.length; j++)
            {
                mass.push ( arr1[j] * arr2[i] + '0'.repeat(j) + '0'.repeat(i));
            }
        }
         
        mass.forEach( function(item, i, arr) { arr[i] = arr[i].split('').reverse();} )
         
        var mass2 = [];
         
        for (var i = 0; i < mass.length; i++)
        {
            for (var j = 0; j < mass[i].length; j++)
            {
                if (!mass2[j]) {mass2[j] = [];}
                
                mass2[j].push( mass[i][j] );
            }
        }
        
        var mass3 = [];
        var sumNum = 0
         
        for (var i = 0; i < mass2.length; i++)
        {
            sumNum = mass2[i].reduce( (acc, value) => acc =  +acc + +value );
            sumNum = String(sumNum);
            if (sumNum.length > 1)
                {
                    let arrayNum = sumNum.split('');
                    arrayNum.reverse();
                    for (var index = 1; index < arrayNum.length; index++)
                    {
                        if ( !mass2[i+index] ) { mass2[i+index] = [];}
                        mass2[i+index].push(arrayNum[index]);
                    }
                    sumNum = [arrayNum[0]];
                }
            
            mass3.push(sumNum[0]);
        }
         
        return mass3.reverse().join('');
    }

    div() {
        let num1 = BigInt(this.num1);
        let num2 = BigInt(this.num2);
        return String(num1 / num2);
    }
}




