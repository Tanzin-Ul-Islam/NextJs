export default function BlogDetails({ blog }) {
    return (
        <div>{blog.title}</div>
    )
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    const paths = data.map(el=>{
        return {
            params: {blogId: el.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(constext) {
    const { params } = constext;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.blogId);
    const data = await response.json()

    return {
        props: {
            blog: data
        }
    }


}