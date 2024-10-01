import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const Users = () => {
  return (
    <Layout model='Usuarios'>
      <TanStackTable />
    </Layout>
  );
};

export default Users;
