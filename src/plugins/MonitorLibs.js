import dayjs from 'dayjs';

//获取监视器类型
export const getMonitorType = (type) => {
    switch (type) {
        case 1:
            return "HTTP(s)";
        case 2:
            return "Keyword";
        case 3:
            return "Ping";
        case 4:
            return "Port";
        case 5:
            return "Heartbeat";
    }
}

//获取运行时间所需 Unix 时间戳
export const getCustomUptimeUnixTime = (days) => {
    const dates = [];
    const today = dayjs(new Date().setHours(0, 0, 0, 0));

    for (let d = 0; d < days; d++) {
        dates.push(today.subtract(d, 'day'));
    }

    const ranges = [];

    dates.forEach(date => {
        ranges.push(`${date.unix()}_${date.add(1, 'day').unix()}`);
    });

    return ranges.join('-');
}

//计算正常运行的平均百分比
export const getUpTime = (value) => {
    return (Math.floor(value * 100) / 100).toString();
}

export const getAverage = (data) => {
    let ranges = data.split('-');
    return getUpTime(ranges.pop());
}