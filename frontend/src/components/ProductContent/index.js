import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Typography,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    DialogContent,
    DialogActions,
    IconButton,
    Dialog,
    TableRow,
    Snackbar,
    Backdrop,
} from '@mui/material';
import ModalClick from '../ModalClick';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import NoData from '../../utils/icon/no-data';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getListProduct, deleteProduct } from '../../actions/productActions.';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductContent() {
    const { getProductLoading, getProductData, deleteProductData, getProductErrorMessage, addProductData, addProductErrorMessage, updateProductData, updateProductErrorMessage } = useSelector((state) => state.ProductReducer)
    const dispatch = useDispatch();
    const [modalDelete, setModalDelete] = useState(false)
    const [modalClick, setModalClick] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [snackbarOpenError, setSnackbarOpenError] = useState(false)
    const [snackBarMessageError, setSnackBarMessageError] = useState("")
    const [productName, setProductName] = useState("")
    const [productId, setProductId] = useState(null);

    const [dataName, setDataName] = useState("")
    const [dataQty, setDataQty] = useState("")
    const [dataPicture, setDataPicture] = useState(null)
    const [dataExpiredAt, setDataExpiredAt] = useState(null)
    const [dataIsActive, setDataIsActive] = useState(true)

    const showFormattedDate = (date) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
        return new Date(date).toLocaleDateString("en-EN", options)
    }

    useEffect(() => {
        dispatch(getListProduct())
    }, [dispatch])

    useEffect(() => {
        if (getProductErrorMessage) {
            setSnackbarOpenError(true)
            setSnackBarMessageError("ERROR " + getProductErrorMessage.code + " " + getProductErrorMessage.message)
        }
    }, [getProductErrorMessage])

    useEffect(() => {

        if (addProductData) {
            setSnackbarOpen(true)
            setSnackBarMessage("Your data successfull ADDED")
            dispatch(getListProduct())
        }
        else if (addProductErrorMessage) {
            setSnackbarOpenError(true)
            console.log("EERROR NYA APAAN CUY", addProductErrorMessage);
            setSnackBarMessageError("ERROR " + addProductErrorMessage.code + " " + addProductErrorMessage.message)
            dispatch(getListProduct())
        }

    }, [addProductData, dispatch, addProductErrorMessage])

    useEffect(() => {

        if (updateProductData) {
            setSnackbarOpen(true)
            setSnackBarMessage("Your data successfull UPDATED")
            dispatch(getListProduct())
        }
        else if (updateProductErrorMessage) {
            setSnackbarOpenError(true)
            console.log("EERROR NYA APAAN CUY", updateProductErrorMessage);
            setSnackBarMessageError("ERROR " + updateProductErrorMessage.code + " " + updateProductErrorMessage.message)
            dispatch(getListProduct())
        }

    }, [updateProductData, dispatch, updateProductErrorMessage])

    useEffect(() => {

        if (deleteProductData) {
            setSnackbarOpen(true)
            setSnackBarMessage("Your data successfull DELETED")
            dispatch(getListProduct())
        }

    }, [deleteProductData, dispatch])

    return (
        <div>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: -1,
                    mb: 3
                }}
            >
                <Typography
                    sx={{ m: 1 }}
                    variant="h4"
                >
                    Products
                </Typography>
                <Box sx={{ m: 1 }}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => setModalClick(true)}
                    >
                        Add Product
                    </Button>
                </Box>
            </Box>
            <Card style={{
                overflowX: "auto"
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                No
                            </TableCell>
                            <TableCell>
                                Image
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Quantity
                            </TableCell>
                            <TableCell>
                                Expired At
                            </TableCell>
                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getProductData &&
                            getProductData.map((el, i) =>
                            (<TableRow
                                hover
                            >
                                <TableCell>
                                    {i + 1}
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Typography
                                            color="textPrimary"
                                            variant="body1"
                                        >
                                            {/* {el.picture} */}
                                            <img src={el.picture} width="80px" alt={el.name} />
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    {el.name}
                                </TableCell>
                                <TableCell>
                                    {el.qty}
                                </TableCell>
                                <TableCell>
                                    {showFormattedDate(el.expiredAt)}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        onClick={() => {
                                            setModalClick(true)
                                            setProductId(el.id)
                                            setDataName(el.name)
                                            setDataQty(el.qty)
                                            setDataExpiredAt(el.expiredAt)
                                            setDataPicture(el.picture)
                                        }}
                                    >
                                        <ModeEditOutlineOutlinedIcon color='secondary' />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => {
                                            setModalDelete(true)
                                            setProductName(el.name)
                                            setProductId(el.id)
                                        }}
                                    >
                                        <DeleteOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
                {
                    getProductData &&
                    getProductData.length === 0 && (<NoData />)
                }
            </Card>

            <ModalClick
                isEdit={productId !== null ? true : false}
                openModal={modalClick}
                setOpenModal={setModalClick}
                dataName={dataName}
                dataExpiredAt={dataExpiredAt}
                dataQty={dataQty}
                dataPicture={dataPicture}
                setDataExpiredAt={setDataExpiredAt}
                setDataName={setDataName}
                setDataPicture={setDataPicture}
                setDataQty={setDataQty}
                setProductId={setProductId}
                dataIsActive={dataIsActive}
                productId={productId}
            />

            {/* Modal Delete */}
            <BootstrapDialog
                onClose={() => setModalDelete(false)}
                aria-labelledby="customized-dialog-title"
                open={modalDelete}
            >
                <DialogContent style={{ textAlign: "center", padding: 45 }}>
                    <Typography gutterBottom>
                        Are you sure want to delete this product name <strong>'{productName}'</strong> ?
                    </Typography>
                </DialogContent>
                <DialogActions style={{ display: "flex", justifyContent: "center" }}>
                    <Button autoFocus onClick={() => setModalDelete(false)}>
                        Cancel
                    </Button>
                    <Button
                        color="error"
                        autoFocus
                        onClick={() => {
                            dispatch(deleteProduct(productId));
                            setModalDelete(false)
                        }}>
                        Delete
                    </Button>
                </DialogActions>
            </BootstrapDialog>

            {/* Information Error */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackbarOpenError}
                onClose={() => setSnackbarOpenError(false)}
            >
                <Alert
                    onClose={() => setSnackbarOpenError(false)}
                    severity="error" sx={{ width: '100%' }}>
                    {snackBarMessageError}
                </Alert>
            </Snackbar>

            {/* Information Sukses */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity="success" sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={getProductLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
