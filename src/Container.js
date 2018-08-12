import React from 'react'
import Paper from 'material-ui/Paper'

const style= {
    margin: "30px",
    padding: "30px"

}

const Container = (props) => (
    <Paper style={style}>
    {props.children}
    </Paper>
)

export default Container