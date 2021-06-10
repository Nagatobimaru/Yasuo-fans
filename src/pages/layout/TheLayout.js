import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApplication } from '../../service/ApplicationService'

import {
  TheContent,
  TheSidebar,
  TheFooter,
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
