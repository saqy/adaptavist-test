import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import { Data,Order } from "types/Types";



interface HeadCell {
    id: keyof Data;
    label: string;
}

const headCells: HeadCell[] = [

    {
        id: 'word',
        label: 'word',
    },
    {
        id: 'count',
        label: 'count ',
    },
];

interface TableHeaderProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
}

export const TableHeader = (props: TableHeaderProps) => {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}