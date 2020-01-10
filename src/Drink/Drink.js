/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

class Drink extends React.Component {
    state = {
        expanded: false,
    }

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        return <Card style={{maxWidth: "345px", margin: "16px auto"}}>
            <CardHeader title={this.props.name} class="name" />
            <CardContent>
                 <Typography variant="body2" color="textSecondary" component="p"><p><b>Składniki:</b></p>
                    {this.props.ingredients_name}
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p"><p><b>Zawartość alkoholu:</b></p>
                    {this.props.power}
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p"><p><a href="https://www.google.pl/" target="_blank">Wiecej...</a></p>
</Typography>
            </CardContent>

        </Card>
    }

}
export default Drink;