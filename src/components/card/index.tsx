import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContend from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export default (props: { content: React.ReactNode; }) => {
    return (
        <Card>
            <CardContend>{props.content}</CardContend>
            <CardActions>
                <button>Go to</button>
            </CardActions>
        </Card>
    );
}
