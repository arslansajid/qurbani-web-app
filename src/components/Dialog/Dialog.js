import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DialogForm = ({
    title,
    open,
    message,
    applyForm,
    cancelForm,
    hideActions,
    disableBackdropClick
}) => {
    console.log("disableBackdropClick", disableBackdropClick)
    return (
        <div>
            <Dialog open={open} onClose={cancelForm} fullWidth={true} maxWidth={'sm'} disableBackdropClick={disableBackdropClick}>
                <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText component={'div'}>{message}</DialogContentText>
                </DialogContent>
                {hideActions ? null : (
                    <>
                        <DialogActions>
                            {
                                applyForm && (
                                    <Button onClick={applyForm} color='primary' type='submit'>
                                        Save
                                    </Button>
                                )
                            }
                            {
                                cancelForm && (
                                    <Button onClick={cancelForm} color='secondary' type='submit'>
                                        Cancel
                                    </Button>
                                )
                            }
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
};

export default DialogForm;
