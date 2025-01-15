import { DateTime } from 'luxon';

  export function groupByMonth(data) {
    if (!data || !Array.isArray(data)) {
        console.error("Datos inválidos para agrupar:", data);
        return {};
    }

    return data.reduce((acc, row) => {
        if (!row.fecha || !row.valor) {
            return acc;
        }
        const date = DateTime.fromISO(row.fecha);
        const monthKey = date.toFormat("yyyy-MM");

        if (!acc[monthKey]) {
            acc[monthKey] = [];
        }
        acc[monthKey].push(row);
        return acc;
    }, {});
}