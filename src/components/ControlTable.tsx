'use client';

import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter
} from "@material-tailwind/react";
import Link from "next/link";


const TABLE_HEAD: Array<string> = ["Name", "Owner", "Status", "Date Started", "Date Completed"];

type TableRow = {
    id: string,
    name: string,
    user: string,
    complete: boolean,
    dateStarted: string,
    dateCompleted: string
}

const TABLE_ROWS: Array<TableRow> = [
    {
        id: "8",
        name: "2023 Q2 Access Review",
        user: "Jeremiah Taylor",
        complete: true,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    },
    {
        id: "7",
        name: "2023 Q2 Access Review",
        user: "Tim Mendenhall",
        complete: false,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    },
    {
        id: "6",
        name: "2023 Q2 Access Review",
        user: "Jeremiah Taylor",
        complete: false,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    },
    {
        id: "5",
        name: "2023 Q2 Access Review",
        user: "Jeremiah Taylor",
        complete: true,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    },
    {
        id: "4",
        name: "2023 Q2 Access Review",
        user: "Tim Mendenhall",
        complete: false,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    },
    {
        id: "3",
        name: "2023 Q2 Access Review",
        user: "Tim Mendenhall",
        complete: false,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    },
    {
        id: "2",
        name: "2023 Q2 Access Review",
        user: "Tim Mendenhall",
        complete: false,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    },
    {
        id: "1",
        name: "2023 Q2 Access Review",
        user: "Tim Mendenhall",
        complete: false,
        dateStarted: "08/15/23",
        dateCompleted: "08/20/23"
    }
];

export function ControlTable() {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Access Control History
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See list of all employee source of truth documents
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button className="flex items-center gap-3" size="sm">
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Control Document
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />} crossOrigin={undefined} />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ id, name, user, complete, dateStarted, dateCompleted }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <Link href={`/controls/${id}`}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {user}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={complete ? "complete" : "incomplete"}
                                                    color={complete ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dateStarted}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dateCompleted}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}