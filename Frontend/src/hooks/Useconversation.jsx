import {create} from 'zustand'

export const Useconversation=create((set)=>({
   selectedconversation:null,
   setselectedconversation:(selectedconversation)=>set({selectedconversation}),
   messages:[],
   setmessages:(messages)=>set({messages})
}))
