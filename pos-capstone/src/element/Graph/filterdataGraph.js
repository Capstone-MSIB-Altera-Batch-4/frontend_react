const thisdate = new Date()
const thisyear = thisdate.getFullYear()

export const datagraph = (data, thismonth) => {
    if (data.length != 0) {
        var salesthismonth = data.filter((datas) => {
            return datas.created_at.includes(`${thisyear}-${(thismonth<10)?'0'+thismonth:(thismonth)}`)
        });
        return salesthismonth.length
    } else {
        return 0
    }
}