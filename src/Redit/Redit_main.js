import React from 'react'
import Reddit_Card from './Reddit_Card'
import classes from './Redit_main.module.css'
import { useEffect, useState } from 'react'

export default function Redit_main() {
    const [links, setlinks] = useState([])
    const [inputed, setinputed] = useState()
    const [searched, setsearched] = useState("javascript")
  

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${searched}.json`).then(data => data.json()).then(data => {
            console.log(data.data.children);

            setlinks(data.data.children)
        }).catch(error => {

            console.log("Something went wrong...");
          
        })


    }, [searched])

    function onChangeHandler(event) {
        const input = event.target.value
        setinputed(input)
    }
    function onClickHandler(event) {

        setsearched(inputed)
    }

    return (
        <>

            <div className={classes.main}>
                <div className={classes.search_content}>
                    <h2>Searchig Anything? Try it here...</h2>
                    <input type="text" placeholder='e.g. javascript' value={inputed} onChange={onChangeHandler} />
                    <button className={classes.button} onClick={onClickHandler}>Okay</button>
                </div>
            </div>
            <div className={classes.cards}>

                {
                    links.map((link, index) => {
                        return <Reddit_Card index={index} title={link.data.title} link={link.data.permalink} />
                    }) 
                }
            </div>


        </>
    )
}
