export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data,
        }
    }
}



export default function Users({ users }) {
    return (
        <>
            <h2>User List</h2>
            {
                users && users.length > 0 ? users.map(el => {
                    return (
                        <h3>{el.name}</h3>
                    )
                }) : 'No data found'
            }
        </>
    )
}