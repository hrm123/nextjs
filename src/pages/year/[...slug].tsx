import { useRouter } from "next/router";


export default function YearClientsPage(){
    //could get yyyy/mm (or) yyyy
    const router = useRouter();
    console.log(router.query);
    return(
        <div>clients</div>
    )
}