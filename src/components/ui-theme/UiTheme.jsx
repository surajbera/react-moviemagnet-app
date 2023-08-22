import { useAppContext } from '../../hooks/useAppContext';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const UiTheme = () => {
  const { uiThemeMode, toggleUiThemeMode } = useAppContext();

  return (
    <div
      className='absolute top-[20px] right-[20px] cursor-pointer'
      onClick={() => toggleUiThemeMode()}
    >
      {uiThemeMode === 'light' ? (
        <BsFillSunFill size={24} color='#fcd34d' />
      ) : (
        <BsMoonFill size={18} color='#fff' />
      )}
    </div>
  );
};
export default UiTheme;
