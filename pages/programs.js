import Meta from '../components/Meta';

const Programs = ({usersdata}) => {
  console.log(usersdata)
    return (
        <>
         <Meta title="Programs"/>
        <section>
            <h2>Programs</h2>
            {usersdata.map(user => (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            ))}
        </section>
      </> 
     );
}
export const getStaticProps = async()=> {

  const users = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
  const usersdata = await users.json();
  return {
    props: {usersdata}
  }  

}
export default Programs;