import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    confirmModal: false,
    editModal: false
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleConfirmModal: (state, action) => {
            state.confirmModal = !state.confirmModal
        },
        toggleEditModal: (state, action) => {
            state.editModal = !state.editModal
        }
    }
})

export default modal.reducer

export const { toggleConfirmModal, toggleEditModal } = modal.actions