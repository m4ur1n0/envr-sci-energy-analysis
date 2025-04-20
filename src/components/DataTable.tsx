import { ChartData } from '@/types/chartTypes';
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

type Props = {
    csvData : ChartData;

}

const DataTable = (props: Props) => {

    const one = props.csvData;

    const prod_by_type = one.map((arr, idx) => {
        if (idx === 0) {
            return arr;
        } else {
            return [new Date(arr[0]), ...arr.slice(1)]
        }
    });
    
  return (
    <Table className='production-data-table w-full'>

        <TableCaption>
            <a 
                href='https://docs.google.com/spreadsheets/d/1Zm6Ee_K-NYuXtVHsnpx8-Mxgo7YgX7He6h8BbLc9tIk/edit?usp=sharing'
                className='text-gray-400 cursor-pointer underline'
                target={'_blank'}
                >
                    View table with indexed sources in Google Sheets.
            </a>
        </TableCaption>

        <TableHeader>
            <TableRow>
                {
                    prod_by_type[0].map((header, idx) => {
                        return(
                            <TableHead key={idx} className='w-auto'>{header as string}</TableHead>
                        );
                    })
                }
            </TableRow>
        </TableHeader>

        <TableBody>
            {
                prod_by_type.slice(1).map((row, idx) => {
                    return(
                        <TableRow key={idx}>
                            {
                                row.map((val, index) => {
                                    if (val instanceof Date) {
                                        return (
                                            <TableCell key={index}>{val.getFullYear() as number}</TableCell>
                                        )
                                    } else {
                                        return (
                                            <TableCell key={index}>{val}</TableCell>
                                        );
                                    }
                                })
                            }
                        </TableRow>
                    );
                })
            }
        </TableBody>
    </Table>
  )
}

export default DataTable