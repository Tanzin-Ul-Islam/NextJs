import { useRouter } from "next/router"
export default function FeatureDetails() {
    let { categoryId, featureId } = useRouter().query
    return (
        <div>
            FeatureDetails {categoryId} {featureId}
        </div>
    )
}