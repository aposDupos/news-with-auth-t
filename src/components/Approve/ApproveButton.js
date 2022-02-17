import React from "react";
import Button from "../Button";
import {useDispatch} from "react-redux";
import {newsApprove} from "../../store/slices/newsSlice";

export const ApproveButton = ({id}) => {
  const dispatch = useDispatch()
  const onClick = ()=> {
    dispatch(newsApprove(id))
  }
  return (
      <Button text={'Одобрить'} onClick={onClick}/>
  )
}