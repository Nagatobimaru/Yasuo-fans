import React from 'react'

import {
  TheContent,
  TheSidebar,
  TheHeader
} from './index'

const TheLayout = () => {
//  const dispatch = useDispatch()
//  const menuBar = useSelector(state => state.menuBar)
//  const getApplicationData = async () => {
//    const application = await getApplication();
//    dispatch({type: 'set', menuBar: application.data.menuBar })
//  };
//  useEffect(() => {
//    getApplicationData()
//  }, []);

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        {/*<TheFooter/>*/}
      </div>
    </div>
  )
}

export default TheLayout
