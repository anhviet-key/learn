import { useParams } from 'react-router';
import { Halo } from '../api/data';
import Contact from './Contact';

const Param = () => {
  const params = useParams<{ idblog: string }>();
  const idparam = Halo.find((showId) => showId.id.toString() === params.idblog);
  console.log(idparam);
  return (
    <>
      <h1>
        {idparam ? `heelo #${idparam?.id} for ${idparam?.name}` : <Contact />}
      </h1>
    </>
  );
};
export default Param;
