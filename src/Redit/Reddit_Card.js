import React from 'react'
import classes from './Reddit_Card.module.css'

export default function Reddit_Card(props) {
  return (
    <div className={classes.card} key={props.index}>
    <h5>{props.title}</h5>
    <a href={"https://www.reddit.com"+ props.link} target="_blank"><button className={classes.read}>Read More</button></a>
    </div>
  )
}
