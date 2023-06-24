export const formatedDate = (data) => {
    if (data.length > 0) {
        var formatedData = data.map(obj => {
            const dateWithoutTimezone = new Date(obj.created_at).toISOString().split('T')[0];
            return {...obj, created_at: dateWithoutTimezone  };
        })
    }
    return formatedData
}