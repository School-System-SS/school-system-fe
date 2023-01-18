'use client';

import { useRouter } from "next/navigation";

function page() {
    const router = useRouter();
    const omarId = router.query.omarId;

    return (
        <>

            <h1>hi from details{omarId}</h1>

        </>
    )
}
export default page;