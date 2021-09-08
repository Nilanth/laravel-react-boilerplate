import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import actions from './redux/Authenticate/actions';
import Spinner from './components/Spinner';
import {AppRoutes} from './routes/AppRoutes';

function ReactApp() {
  //Getting isAuthenticated store value from Authentication reducer.
  const {isAuthenticated, validateUserLoader} = useSelector(state => state.authenticateReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch({
        type: actions.GET_AUTH_USER,
      });
    }
  }, [])

  if (validateUserLoader) {
    return <Spinner/>;
  }
  return <AppRoutes isAuthenticated={isAuthenticated}/>
}

export default ReactApp;
