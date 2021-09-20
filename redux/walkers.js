import {createSlice} from '@reduxjs/toolkit';

const walkersSlice = createSlice({
  name: 'walkers',
  initialState: [
    {
      created: new Date('2021-09-01'),
      distance: 63,
      email: 'email@email.com',
      fullname: 'Rosana Norrell',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/12/12194337/Yellow-Lab-High-Five.jpg',
      walker: true,
      description:
        'I have loved dogs since childhood. He is currently a veterinary student. I love dogs because they are friendly and cute. They are also loyal to their owners. But most of all, they can be a great friend when I am lonely. Dogs are wonderful pets.',
      walker_info: {
        age: 30,
        experience: '11 months',
        price: 8,
        rate: 4.7,
        reviews: [
          {
            _id: 32130,
            owner: {
              fullname: 'Test User',
              profile_photo:
                'https://woodog.s3.us-east-1.amazonaws.com/man_1.jpg',
            },
            content:
              'This is a test review. I just need to type a lot of text so that looks natural. This is a test review. I just need to type a lot of text so that looks natural. This is a test review. I just need to type a lot of text so that looks natural.',
            rate: 3,
          },
          {
            _id: 32130,
            owner: {
              fullname: 'Test User',
              profile_photo:
                'https://woodog.s3.us-east-1.amazonaws.com/man_2.jpg',
            },
            content:
              'This is a test review. I just need to type a lot of text so that looks natural',
            rate: 4,
          },
          {
            _id: 32130,
            owner: {
              fullname: 'Test User',
              profile_photo:
                'https://woodog.s3.us-east-1.amazonaws.com/man_3.jpg',
            },
            content:
              'This is a test review. I just need to type a lot of text so that looks natural',
            rate: 4,
          },
          {
            _id: 32130,
            owner: {
              fullname: 'Test User',
              profile_photo:
                'https://woodog.s3.us-east-1.amazonaws.com/woman_1.jpg',
            },
            content:
              'This is a test review. I just need to type a lot of text so that looks natural',
            rate: 5,
          },
        ],
        verified: true,
        walks: 50,
      },
      favorites: [],
      available: true,
    },
  ],
  reducers: {},
});

const walkersReducer = walkersSlice.reducer;
export const {} = walkersSlice.actions;
export default walkersReducer;
