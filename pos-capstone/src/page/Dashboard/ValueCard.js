var thisdate = new Date();

var month = thisdate.getMonth() + 1

var thismonth = `${thisdate.getFullYear()}-${(month<10)?'0'+month:(month)}`
var prevmonth = `${thisdate.getFullYear()}-0${thisdate.getMonth()}`

export const totalSales = (data) => {
    const salesthismonth = data.filter((datas) => {
        return datas.created_at.includes(thismonth)
    });

    const sales = salesthismonth.map((item) => {
        return item.grand_total
    });

    const totalsales = (sales != 0) ? sales.reduce((acc, curr) => {
        return acc + curr
    }) : 0
    return `Rp${totalsales.toLocaleString("id-ID")}`
}

export const prevtotalSales = (data) => {
    const salesthismonth = data.filter((datas) => {
        return datas.created_at.includes(prevmonth)
    });

    const sales = salesthismonth.map((item) => {
        return item.grand_total
    });

    const totalsales = (sales != 0) ? sales.reduce((acc, curr) => {
        return acc + curr
    }) : 0

    if (totalsales > 0) {
        var prevtotalsales = ((totalSales(data) - totalsales) / totalsales) * 100 / 100;
    } else {
        var prevtotalsales = '100'
    }

    if (prevtotalsales >= 0) {
        return `+${prevtotalsales}%`;
    } else { return `-${prevtotalsales}%`; }
}

export const Visitors = (data) => {
    const filterthismonth = data.filter((datas) => {
        return datas.created_at.includes(thismonth)
    });

    const visitor = filterthismonth.length;

    return `${visitor}`;


}
export const prevVisitors = (data) => {
    const filterthismonth = data.filter((datas) => {
        return datas.created_at.includes(prevmonth)
    });

    const visitorprev = filterthismonth.length;
    if (visitorprev != 0) {
        var visitors = (Visitors(data) - visitorprev) / visitorprev * 100 / 100;
    } else {
        var visitors = '100'
    }
    if (visitors >= 0) {
        return `+${visitors}%`;
    } else { return `-${visitors}%`; }

}

export const newMember = (data) => {
    const filterthismonth = data.filter((datas) => {
        return datas.created_at.includes(thismonth)
    });

    const member = filterthismonth.length;

    return `${member}`;
}

export const prevMember = (data) => {
    const filterthismonth = data.filter((datas) => {
        return datas.created_at.includes(prevmonth)
    });

    const memberprev = filterthismonth.length;
    const members = newMember(data) - memberprev;

    return `+${members}`;
}