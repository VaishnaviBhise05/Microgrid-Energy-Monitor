export const getDummyData = (metric: string, days: number = 7) => {
  const data = [];
  for (let i = days; i > 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    let value: number;
    switch (metric) {
      case 'Voltage':
        value = Math.floor(Math.random() * 20) + 210;
        break;
      case 'Current':
        value = (Math.random() * 5) + 0.5;
        break;
      case 'Real Power':
        value = Math.floor(Math.random() * 500) + 100;
        break;
      case 'Total Energy':
        value = Math.floor(Math.random() * 1000) + 500;
        break;
      case 'Power Factor':
        value = (Math.random() * 0.3) + 0.7;
        break;
      default:
        value = 0;
    }
    data.push({
      name: date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }),
      value: parseFloat(value.toFixed(2)),
    });
  }
  return data;
};

export const getDummyAverageData = (metric: string, data: { name: string, value: number }[]) => {
  const averageData = [];
  const movingAveragePeriod = 1;

  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - movingAveragePeriod);
    const end = i + 1;
    const subset = data.slice(start, end);
    const sum = subset.reduce((acc, current) => acc + current.value, 0);
    const average = sum / subset.length;

    averageData.push({
      name: data[i].name,
      value: parseFloat(average.toFixed(2))
    });
  }
  return averageData;
};