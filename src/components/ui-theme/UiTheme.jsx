import { useAppContext } from '../../hooks/useAppContext';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const UiTheme = () => {
  const { uiMode, toggleUiMode } = useAppContext();

  return (
    <div className='absolute top-[20px] right-[20px]' onClick={() => toggleUiMode()}>
      {uiMode === 'light' ? (
        <BsFillSunFill size={24} color='#fcd34d' />
      ) : (
        <BsMoonFill size={24} color='#fff' />
      )}
    </div>
  );
};
export default UiTheme;
