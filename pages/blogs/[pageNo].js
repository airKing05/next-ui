import React from 'react';
import {useRouter} from 'next/router'

export default function pageNo() {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
    return (
        <div>
            this is blog number: {pageNumber}
        </div>
    )
}
