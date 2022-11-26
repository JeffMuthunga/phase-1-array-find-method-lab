// code your solution here
const superbowlWin = (record) =>{
    let broncosYear = record.find(item => item.result === 'W')
    if(broncosYear !== undefined){
        return broncosYear.year
    }
    else {
        return undefined
    }
}

superbowlWin(record)
