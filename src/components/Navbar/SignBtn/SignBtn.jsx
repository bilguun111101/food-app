import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { useTitleContext } from '../../../TitleContext';
import { useSignContext } from '../../../SignContext';

const style = {
  buttonColor: theme => ({
    color: theme.palette.primary.main
  })
}

const SignBtn = props => {
    const { signBool, setSignBool, setUserInformation } = useSignContext();
    const { setTitle } = useTitleContext();
    const navigate = useNavigate();
    const propsy = props.el;
    const onClick = () => {
      navigate("/home");
      setSignBool(false);
      setTitle(propsy.name);
      setUserInformation({});
    }
  return (
    <ListItem disablePadding>
      <Link to={signBool && propsy.path} onClick={() => signBool && onClick()}>
        <ListItemButton sx={style.buttonColor}>
          <ListItemIcon sx={style.buttonColor}>
              {propsy.icon}
          </ListItemIcon>
          <ListItemText primary={propsy.text}/>
        </ListItemButton>
      </Link>
    </ListItem>
  )
}

export default SignBtn