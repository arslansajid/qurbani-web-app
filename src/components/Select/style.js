const selectStyles = theme => ({
    selectCnt: {
        display: "flex",
        alignItems: "center",
        width: "100%"
    },
    selectLabel: {
        marginRight: 10,
        // color: theme.palette.primary.main,
        color: 'black',
        fontSize: 14
    },
    tableRowsSelect: {
        "& div:focus": {
            backgroundColor: "transparent"
        }
    }
})

export default selectStyles