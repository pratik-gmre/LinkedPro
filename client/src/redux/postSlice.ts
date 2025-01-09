import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";




const initialState = { 
    post:[
        {
             owner: {} as User,
             img:[{
                public_id:"",
                url:"",
             }],
             description:"",
             likes:0,
             comments:0
        }
    ]
}





const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost : (state,action) =>{ 

            const {owner,public_id,url,desc} = action.payload
            console.log("this is action.payload",action.payload);
            
            state.post.push({owner,description:desc,img:[{public_id,url}],likes:0,comments:0})
            console.log("this is state.post", [...state.post]);            
            
        }
        
    },
});


export const { setPost } = postSlice.actions;
export default postSlice.reducer;