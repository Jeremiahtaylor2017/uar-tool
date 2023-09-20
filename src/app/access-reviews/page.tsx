import React from 'react';
import HealthCheck from '@/components/HealthCheck';
import { AccessReviewTable } from '@/components/AccessReviewTable';

type Props = {}

const AccessReviews = (props: Props) => {

    return (
        <div>
            <h1>Access Reviews</h1>
            <div>
                <AccessReviewTable />
            </div>
        </div>
    )
}

export default AccessReviews;