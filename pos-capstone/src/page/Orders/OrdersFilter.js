export const filterorder = (result, inputfilter) => {
    if (inputfilter.inputid.length != 0) {
        result = filterid(result, inputfilter)
    }
    if (inputfilter.datefrom.length != 0) {
        result = filterdatefrom(result, inputfilter)
    }
    if (inputfilter.dateto.length != 0) {
        result = filterdateto(result, inputfilter)
    }
    return result
}

export const filterid = (array, inputfilter) => {
    return array.filter((datas) =>
        datas.order_id.includes(`${inputfilter.inputid}`)
    )
}
export const filterdatefrom = (array, inputfilter) => {
    const datefrom = array.filter(function(datas) {
        var tanggalItem = new Date(datas.created_at);
        return tanggalItem.toISOString().split("T")[0] >= inputfilter.datefrom;

    })
    return datefrom;
}
export const filterdateto = (array, inputfilter) => {
    const dateto = array.filter(function(datas) {
        var tanggalItem = new Date(datas.created_at);
        return tanggalItem.toISOString().split("T")[0] <= inputfilter.dateto;

    })
    return dateto;
}

export const formatedDate = (data) => {
    const formatedData = data.map(obj => {
        const dateWithoutTimezone = new Date(obj.created_at).toISOString().split('T')[0];
        return {...obj, created_at: dateWithoutTimezone  };
    })
    return formatedData
}