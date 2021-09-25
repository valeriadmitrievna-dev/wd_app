import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: [
    {
      interlocutors: [
        {
          _id: '614689613026991288da9dc3',
          fullname: 'Sirena Paul',
          profile_photo:
            'https://images.unsplash.com/photo-1579119134757-5c38803f34fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBhbmQlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
          online: false,
        },
        {
          _id: '614689613026991288da9dc4',
          fullname: 'John Smith',
          profile_photo:
            'https://woodog.s3.us-east-1.amazonaws.com/woman_3.jpg',
          online: true,
        },
      ],
      messages: [
        {
          created: new Date('September 22, 2021 13:24:00'),
          owner: '6146896130269s91288da9dc3',
          _id: '614689613026991288da9dc4',
          content:
            'Hey, Alex! Nice to meet you! I’d like to hire a walker and you’re perfect one for me. Can you help me out?',
        },
        {
          created: new Date('September 23, 2021 13:26:00'),
          _id: '614689613026991288dfa9dc4',
          owner: '614689613026991288da9dc4',
          content:
            'Hi! That’s great! Let me give you a call and we’ll discuss all the details',
        },
        {
          created: new Date('September 24, 2021 13:46:00'),
          _id: '6146896130269912g88da9dc4',
          owner: '614689613026991288da9dc3',
          content: 'Okay, call me)',
        },
      ],
      checked: false,
      _id: '5345345345',
    },
    {
      interlocutors: [
        {
          _id: '614689613026991288da9dc3',
          fullname: 'Sirena Paul',
          profile_photo:
            'https://images.unsplash.com/photo-1579119134757-5c38803f34fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBhbmQlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
          online: true,
        },
        {
          _id: '614689613026991288da9dc4',
          fullname: 'John Smith',
          profile_photo:
            'https://woodog.s3.us-east-1.amazonaws.com/woman_3.jpg',
          online: true,
        },
      ],
      messages: [
        {
          created: new Date('September 24, 2021 13:24:00'),
          owner: '614689613026991288da9dc3',
          _id: '61468961302699e1288da9dc4',
          content:
            'Hey, Alex! Nice to meet you! I’d like to hire a walker and you’re perfect one for me. Can you help me out?',
        },
        {
          created: new Date('September 24, 2021 13:26:00'),
          owner: '614689613026991288da9dc4',
          _id: '6146896130269912838da9dc4',
          content:
            'Hi! That’s great! Let me give you a call and we’ll discuss all the details',
        },
      ],
      checked: true,
      _id: '5345345344',
    },
  ],
  reducers: {
    checkDialog: (state, {payload}) => {
      state = state.map(d => {
        if (d._id === payload) {
          d.checked = true;
        }
        return d;
      });
    },
    addMessage: (state, {payload}) => {
      console.log(payload);
      state = state.map(ds => {
        if (ds._id === payload.d_id) {
          ds.messages.push({
            created: new Date(),
            owner: payload.u_id,
            content: payload.content,
          });
        }
        return ds;
      });
    },
  },
});

const chatReducer = chatSlice.reducer;
export const {checkDialog, addMessage} = chatSlice.actions;
export default chatReducer;
