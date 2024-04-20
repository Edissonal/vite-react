
import { Fragment } from "react";
import propTypes from 'prop-types';

    export const FirstApp = ({title,subtitle,name}) => {

        return (
            <>
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            <h1>{name}</h1>
         {/*
         <h1>{JSON.stringify(newMessage)}</h1>
         */}
          <p>error de titulos</p>
            </>

        )
      }

FirstApp.propTypes ={
title:propTypes.string.isRequired,
subtitle:propTypes.number.isRequired,
}
 
FirstApp.defaultProps={
title:'no hay titulo',
subTitle:'no hay subtitulo',
name:'SUE ROCK'
}