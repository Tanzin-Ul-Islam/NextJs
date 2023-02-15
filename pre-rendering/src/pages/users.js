import Users from "@/components/users";

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data,
        }
    }
}


export default function UserList({ users }) {
    return (
        <>
            <h2>User List</h2>
            {
                users && users.length > 0 ? users.map(el => {
                    return (
                        <Users user={el}/>
                    )
                }) : 'No data found'
            }
        </>
    )
}