import { useRouter } from "next/dist/client/router"


export default function ProductByID() {

    const router = useRouter();

    console.log(router.query)

    return(
        <div>
            id
        </div>
    )
}