import { useAppContext } from '../../hooks/useAppContext';

const Starred = () => {
  const { starredIds } = useAppContext();

  return <div>{JSON.stringify(starredIds)}</div>;
};
export default Starred;
