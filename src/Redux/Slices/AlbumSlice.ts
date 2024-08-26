// albumSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../API/API';
import { IAddalbumPayload } from '../../Types/Types';


interface AlbumState {
    loading: boolean;
    albums: IAddalbumPayload[];
    error: string | null;
}

const initialState: AlbumState = {
    loading: false,
    albums: [],
    error: null,
};

export const postAlbum = createAsyncThunk(
    'albums/postAlbum',
    async (albumData: IAddalbumPayload, { getState }) => {
        const { auth } = getState() as any;
        try{
        const response = await axios.post(API.baseUrl + API.addalbum, albumData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth.authToken ? `Bearer ${auth.authToken}` : '',
            }
        });
        return response.data;
    } catch(err)
    {
        console.log("Error in posting Album",err);
    }
}
);

export const getAlbumData = createAsyncThunk(
    'albums/getAlbumData',
    async (_,{ getState }) => {
        const { auth } = getState() as any;
        try{
        const response = await axios.get(API.baseUrl + API.getAllAlbums,  {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth.authToken ? `Bearer ${auth.authToken}` : '',
            }
        });
        console.log("Response",response);
        return response.data;
    } catch(err)
    {
        console.log("Error in posting Album",err);
    }
}
);

const albumSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postAlbum.pending, (state) => {
                state.loading = true;
            })
            .addCase(postAlbum.fulfilled, (state, action) => {
                state.loading = false;
                state.albums.push(action.payload)
            })
            .addCase(postAlbum.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to post album';
            })
            .addCase(getAlbumData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAlbumData.fulfilled, (state, action) => {
                state.loading = false;
                state.albums = action.payload; 
            })
            .addCase(getAlbumData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to Get All album';
            });
    },
});

export default albumSlice.reducer;
