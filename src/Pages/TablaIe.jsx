// import * as React from 'react';
import { CircularProgress, Divider, MenuItem, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DateTime } from 'luxon';
import numeral from 'numeral';
import { useState } from 'react';
import ErrorBoundary from '../Component/ErrorBoundary';
import useFetch2 from '../hooks/useFetch2';
import { groupByMonth } from '../utils';

export default function TablaIe(props) {
    const currenYear = new Date().getFullYear()

    const [inputValue, setInputValue] = useState(currenYear);
   
    const [update, setUpdate] = useState(false);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        setUpdate(!update)
    };

    const rutaApi = props.dirApi  
    const yearB = inputValue

    const { data, loading, error } = useFetch2(`${rutaApi}${yearB}`, update)

    if (loading) {
        return (
            <div
                style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: 100 }}
            >
                <CircularProgress size={48} color="success" />
            </div>
        );
    }

    function NumberFormatter({ number }) {
        return <span>{numeral(number).format('0,0.00')}</span>;
    }

    const yearsData = Array.from({
        length: currenYear - 1999 + 1
    }, (_, index) => 1999 + index)

    const groupedData = groupByMonth(data.serie)

    return (
        <ErrorBoundary error={error}>
            <Paper
                elevation={24}
                sx={{
                    width: "90%",
                    margin: "auto",
                    padding: 2,
                    textAlign: "center",
                    marginTop: 2,
                    zIndex: 1
                }}
            >
                <Typography variant="h5" fontWeight={700} sx={{ margin: 2 }}>{props.titleIe} ({data.unidad_medida})</Typography>

                <TextField
                    id="outlined-select-currency"
                    select
                    defaultValue={yearB}
                    helperText="Seleccione el Año a consultar"
                    value={inputValue}
                    onChange={handleChange}
                >
                    {yearsData.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>

                <Divider sx={{ borderColor: 'greenyellow', borderStyle: 'solid', padding: "5px" }} />
                {!loading ?
                    (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, fontSize: '0.75rem' }} aria-label="monthly table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Día</TableCell>
                                        {Array.from({ length: 12 }).map((_, index) => {
                                            const monthName = DateTime.local(parseInt(yearB), index + 1).setLocale('es').toFormat("MMMM");
                                            return (
                                                <TableCell key={index} align="center" sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>
                                                    {monthName.charAt(0).toUpperCase() + monthName.slice(1)}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Array.from({ length: 31 }).map((_, dayIndex) => {
                                        const day = dayIndex + 1;
                                        return (

                                            <TableRow key={day}>
                                                <TableCell sx={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{day}</TableCell>
                                                {Array.from({ length: 12 }).map((_, monthIndex) => {
                                                    const monthKey = DateTime.local(parseInt(yearB), monthIndex + 1).toFormat("yyyy-MM");

                                                    const valueForDay = groupedData[monthKey]?.find((row) => {
                                                        const rowDate = DateTime.fromISO(row.fecha);

                                                        return rowDate.day === day;
                                                    });
                                                    return (
                                                        <TableCell key={`${day}-${monthIndex}`} align="center" sx={{ fontSize: '0.75rem' }}>
                                                            {valueForDay ? <NumberFormatter number={valueForDay.valor} /> : "-"}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>

                        </TableContainer>
                    ) : (
                        <div
                            style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: 100 }}
                        >
                            <CircularProgress size={48} color="success" />
                        </div>)}
            </Paper>
        </ErrorBoundary>
    );
}