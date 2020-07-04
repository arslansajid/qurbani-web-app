import * as React from 'react';
import { Button } from '@material-ui/core';

interface Props {
    history: object;
}

const styles = {
    conatiner: {
        width: '100vw',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    } as React.CSSProperties,
};

const NotFoundPage: React.FC<Props> = (props: any) => {
    const goBack = () => {
        props.history.goBack();
    };

    return (
        <div style={styles.conatiner}>
            <h1>Sorry, Page Not Found :(</h1>
            <Button variant='contained' size='large' color='secondary' onClick={() => goBack()}>
                Go Back
            </Button>
        </div>
    );
};
export default NotFoundPage;
