import { useRouter } from "next/router"
export default function CategoryDetails() {
    let { categoryId } = useRouter().query;
    return (
        <div>CategoryDetails {categoryId}</div>
    )
}
