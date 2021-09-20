import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    user: {
      _id: '614689613026991288da9dc4',
      created: new Date('2021-09-19T00:44:21.177Z'),
      email: 'email@walker.com',
      favorites: [],
      fullname: 'John Smith',
      location: 'Tokyo, Japan',
      password: '$2b$10$5b94E2t4nmSFc7kl6kEjhuU5UjXKvGPpXbzXJSUehKYeamGRfs2tC',
      pets: [],
      profile_photo: 'https://woodog.s3.us-east-1.amazonaws.com/woman_3.jpg',
      walker: true,
      walker_info: {
        age: 14,
        description: '',
        experience: 'in 18 days',
        price: 3,
        reviews: [],
        verified: false,
      },
    },
    notifications: {
      checked: false,
      list: [
        {
          _id: 32130,
          owner: {
            fullname: 'Test User',
            profile_photo:
              'https://woodog.s3.us-east-1.amazonaws.com/man_1.jpg',
          },
          date: new Date('2021-09-19'),
          content: 'Check your messages to see the details of the offer.',
          title: 'This person wants to hire you!',
        },
        {
          _id: 32167,
          owner: {
            fullname: 'Test User',
            profile_photo:
              'https://woodog.s3.us-east-1.amazonaws.com/man_2.jpg',
          },
          date: new Date('2021-09-11'),
          content: 'Check your messages to see the details of the offer.',
          title: 'This person wants to hire you!',
        },
        {
          _id: 32131,
          date: new Date('2021-09-11'),
          content: 'Welcome in WooDog! 🦮',
          title: 'Thank you for your trust!',
        },
      ],
    },
    new_messages: 1,
  },
  reducers: {
    auth: state => {
      state.isAuth = true;
    },
    logout: state => {
      state.isAuth = false;
      state.user = null;
    },
    setUser: (state, {payload}) => {
      state.user = payload;
    },
    checkNotifications: state => {
      state.notifications.checked = true;
    },
  },
});

const userReducer = userSlice.reducer;
export const {auth, logout, setUser, checkNotifications} = userSlice.actions;
export default userReducer;
