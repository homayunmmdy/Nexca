import { Suspense } from "react"
import ReactQueryProvider from "./ReactQueryProvider"
import Loading from "@/app/loading"

const Provider = ({ children }) => {
    return (
        <>
            <ReactQueryProvider>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </ReactQueryProvider >
        </>
    )
}

export default Provider