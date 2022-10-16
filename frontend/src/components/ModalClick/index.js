import React from 'react'
import { Box, Dialog, DialogActions, DialogTitle, DialogContent, TextField, Button } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../actions/productActions.';
import { format } from 'date-fns';

export default function ModalClick({ productId, dataIsActive, setProductId, isEdit, openModal, setOpenModal, dataName, dataExpiredAt, dataQty, dataPicture, setDataExpiredAt, setDataName, setDataPicture, setDataQty }) {

    const dispatch = useDispatch()

    return (
        <div>
            <Dialog
                open={openModal}
                fullWidth={true}
                onClose={() => {
                    setOpenModal(false)
                    setDataExpiredAt(null)
                    setDataName("")
                    setDataPicture(null)
                    setDataQty("")
                    setProductId(null)
                }}
            >
                <DialogTitle>{isEdit ? "Edit Product" : "Add Product"}</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Photo Product
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    let imageUpload = e.target.files[0];
                                    let reader = new FileReader();
                                    reader.readAsDataURL(imageUpload);
                                    reader.onload = () => {
                                        setDataPicture(reader.result)
                                    }
                                }}
                            />
                        </Button>
                        {
                            dataPicture !== null ? (
                                <>
                                    <img width="80px" src={dataPicture} alt="coba" />
                                </>
                            ) : null
                        }
                    </Box>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type='text'
                        value={dataName}
                        onChange={(e) => {
                            setDataName(e.target.value)
                        }}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        label="Quantity"
                        type="number"
                        value={dataQty}
                        onChange={(e) => {
                            setDataQty(e.target.value)
                        }}
                        fullWidth
                        variant="standard"
                        style={{
                            marginBottom: 10
                        }}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Expired At"
                            value={dataExpiredAt}
                            onChange={(newValue) => {
                                setDataExpiredAt(format(new Date(newValue), 'yyyy-MM-dd').toString())
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button
                        color='info'
                        onClick={() => {
                            setOpenModal(false)
                            setDataExpiredAt(null)
                            setDataName("")
                            setDataPicture(null)
                            setDataQty("")
                            setProductId(null)
                        }}
                    >
                        Cancel
                    </Button>
                    {
                        isEdit ?
                            (
                                <Button
                                    onClick={() => {
                                        dispatch(updateProduct({
                                            name: dataName,
                                            qty: dataQty,
                                            picture: dataPicture,
                                            expiredAt: dataExpiredAt,
                                            isActive: dataIsActive
                                        }, productId))
                                        setOpenModal(false)
                                    }}

                                    disabled={dataName !== "" && dataQty !== "" && dataPicture !== null && dataExpiredAt !== null ? false : true}
                                    color='warning'
                                >
                                    Edit Product
                                </Button>
                            )
                            :
                            (
                                <Button
                                    disabled={dataName !== "" && dataQty !== "" && dataPicture !== null && dataExpiredAt !== null ? false : true}
                                    onClick={() => {
                                        dispatch(addProduct({
                                            name: dataName,
                                            qty: dataQty,
                                            picture: dataPicture,
                                            expiredAt: dataExpiredAt,
                                            isActive: dataIsActive
                                        }))
                                        setOpenModal(false)
                                        setDataExpiredAt(null)
                                        setDataName("")
                                        setDataPicture(null)
                                        setDataQty("")
                                        setProductId(null)
                                    }}
                                    color='success'
                                >
                                    Add Product
                                </Button>
                            )
                    }
                </DialogActions>
            </Dialog>
        </div>
    )
}
