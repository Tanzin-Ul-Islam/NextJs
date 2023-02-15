import Blog from "@/components/blog";
import Link from "next/link";



export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()

    return{
        props:{
            blogs: data
        }
    }

}

export default function BlogList({blogs}) {
  return (
    <div>
        <h4>Blog List</h4>
        {
            blogs.length > 0 ? blogs.map(el=>{
                return(
                    <Link href={`/blog/${el.id}`}><Blog blog={el}/></Link>
                )
            }) : "No Data Found"
        }
    </div>
  )
}

