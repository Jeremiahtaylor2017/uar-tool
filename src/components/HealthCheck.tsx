"use client"
import React from 'react';
import { trpc } from '@/app/_trpc/client';

type Props = {}

const HealthCheck = (props: Props) => {
    const healthCheck = trpc.healthcheck.useQuery();
    return (
        <div>{JSON.stringify(healthCheck.data)}</div>
    )
}

export default HealthCheck;