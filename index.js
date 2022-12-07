let submit = document.querySelector('#sub').addEventListener('click',(event) =>{
    event.preventDefault()
   onsubmit()
   console.log("here");
})

function onsubmit(){
    let income = document.querySelector('.salary').value
    
    let housing = document.querySelector('.houseamnt')
    let housecalc = 20/100 * income 
    housing.innerText = housecalc 
    let housepcntg = document.querySelector('.houseprcnt')
    let houseprcnt = housecalc/income * 100
    housepcntg.innerText = houseprcnt + "%"
    
    let school = document.querySelector('.schamnt')
    let schoolcalc = 15/100 * income
    school.innerText = schoolcalc
    let schpcntg = document.querySelector('.schprcnt')
    let schprcnt = schoolcalc/income * 100
    schpcntg.innerText = schprcnt + '%'

    let util = document.querySelector('.utamnt')
    let utilcalc = 5/100 * income
    util.innerText = utilcalc
    let utilpcntg = document.querySelector('.utprcnt')
    let utilprcnt = utilcalc/income * 100
    utilpcntg.innerText = utilprcnt + '%'

    let food = document.querySelector('.fdamnt')
    let foodcalc = 10/100 * income
    food.innerText = foodcalc
    let foodpcntg = document.querySelector('.fdprcnt')
    let fdprcnt = foodcalc/income * 100
    foodpcntg.innerText = fdprcnt + '%'

    let transport = document.querySelector('.tpamnt')
    let tpcalc = 10/100 * income
    transport.innerText = tpcalc
    let tppcntg = document.querySelector('.tpprcnt')
    let tpprcnt = tpcalc/income * 100
    tppcntg.innerText = tpprcnt + '%'

    let insurance = document.querySelector('.insrncamnt')
    let inscalc = 15/100 * income
    insurance.innerText = inscalc
    let inspcntg = document.querySelector('.insrncprcnt')
    let insprcnt = inscalc/income * 100
    inspcntg.innerText = insprcnt + '%'

    let medical = document.querySelector('.medamnt')
    let medcalc = 8/100 * income
    medical.innerText = medcalc
    let medpcntg = document.querySelector('.medprcnt')
    let medprcnt = medcalc/income * 100
    medpcntg.innerText = medprcnt + '%'
    
    let recreation = document.querySelector('.recamnt')
    let reccalc = 3/100 * income
    recreation.innerText = reccalc
    let recpcntg = document.querySelector('.recprcnt')
    let recprcnt = reccalc/income * 100
    recpcntg.innerText = recprcnt + '%'

    let saves = document.querySelector('.saveamnt')
    let savecalc = 9/100 * income
    saves.innerText = savecalc
    let savepcntg = document.querySelector('.saveprcnt')
    let saveprcnt = savecalc/income * 100
    savepcntg.innerText = saveprcnt + '%'
    
    let personal = document.querySelector('.prsnlamnt')
    let personalcalc = 3/100 * income
    personal.innerText = personalcalc
    let personalpcntg = document.querySelector('.prsnlprcnt')
    let personalprcnt = personalcalc/income * 100
    personalpcntg.innerText = personalprcnt + '%'

    // calculating total spent
    let amounts = [housecalc,schoolcalc,utilcalc,foodcalc,tpcalc,inscalc,medcalc,reccalc,savecalc,personalcalc]
    let percents = [houseprcnt,schprcnt,utilprcnt,fdprcnt,tpprcnt,insprcnt,medprcnt,recprcnt,saveprcnt,personalprcnt]
    let totalamnt = document.querySelector('.totalspnt')
    let totalpcnts = document.querySelector('.totalpcnt')
    let total = 0
    let percenttotal = 0
    for(i=0;i<amounts.length;i++){
        total += amounts[i]
    }
    totalamnt.innerText = total
    for(i=0;i<percents.length;i++){
        percenttotal += percents[i]
    }
    totalpcnts.innerText = percenttotal + '%'
    
    // highest spend
    let max = amounts[0]
    for(i=0;i<amounts.length;i++){
        if(amounts[i]>max){
            max = amounts[i]
        }
    }
    let maxspent = document.querySelector('.hghstspnd')
    maxspent.innerText = max
    let highpcnt = document.querySelector('.hghstprcnt')
    let maxipcnt = Math.max(...percents.values())
    highpcnt.innerText = maxipcnt + '%'

    // total remainder
    let remainder = document.querySelector('.rmnder')
    let remnpcnt = document.querySelector('.remngpcnt')
    let totalremain = income - total
    remainder.innerText = totalremain 
    let remainpcntg = 100 - percenttotal
    remnpcnt.innerText = remainpcntg + '%'
}