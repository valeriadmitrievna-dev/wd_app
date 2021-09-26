import {createSlice} from '@reduxjs/toolkit';

const momentsSlice = createSlice({
  name: 'moments',
  initialState: [
    {
      _id: '23423423423',
      likes: 1275,
      created: new Date('2021-09-24'),
      owner: {
        fullname: 'Sara Polson',
        profile_photo:
          'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
      },
      image:
        'https://i.pinimg.com/originals/80/d3/64/80d364e09d31fcba8af274926d4332ff.jpg',
      comments: [
        {
          content: "She's so cute😍😍😍",
          created: new Date('2021-09-24'),
          owner: {
            fullname: 'Sara Polson',
            profile_photo:
              'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
          },
        },
      ],
      content:
        'My dog has always been there when I need him even if it is with a simple lick or nudge. Although, yes, he may not be able to respond I know he is someone I can count on to listen to each of my problems and secrets without judging me. I know he will love me no matter how much I have or lack, how bad my hair looks or even what kind of day I am having. When I come home, he is always glad to see me and follows me like a tail.This unconditional love that dogs have can also be connected to loyalty. A pet’s loyalty to its owner is usually unmatched. The greatest fear dogs know is the fear that you will not come back when you go out the door without them.',
    },
    {
      _id: '23423423424',
      likes: 1275,
      content: 'test',
      created: new Date('2021-09-24'),
      owner: {
        fullname: 'Sara Polson',
        profile_photo:
          'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
      },
      image:
        'https://doggiedesigner.com/wp-content/uploads/2020/07/Strong-pocket-bully.jpg',
      comments: [
        {
          content: 'strong💪',
          created: new Date('2021-09-24'),
          owner: {
            fullname: 'Sara Polson',
            profile_photo:
              'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
          },
        },
      ],
    },
    {
      _id: '23423423323',
      likes: 1275,
      content: 'test',
      created: new Date('2021-09-24'),
      owner: {
        fullname: 'Sara Polson',
        profile_photo:
          'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
      },
      image:
        'https://cdn.crello.com/api/media/medium/464202044/stock-photo-doberman-dogs-confident-woman-black',
      comments: [
        {
          content: '😍😍😍',
          created: new Date('2021-09-24'),
          owner: {
            fullname: 'Sara Polson',
            profile_photo:
              'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
          },
        },
      ],
    },
    {
      _id: '231235623423',
      likes: 1275,
      content: 'test',
      created: new Date('2021-09-24'),
      owner: {
        fullname: 'Sara Polson',
        profile_photo:
          'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
      },
      image: 'https://images-na.ssl-images-amazon.com/images/I/718vecXok+L.jpg',
      comments: [
        {
          content: "He's so cute😍😍😍",
          created: new Date('2021-09-24'),
          owner: {
            fullname: 'Sara Polson',
            profile_photo:
              'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
          },
        },
      ],
    },
    {
      _id: '23423123423',
      likes: 1275,
      content: 'test',
      created: new Date('2021-09-24'),
      owner: {
        fullname: 'Sara Polson',
        profile_photo:
          'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
      },
      image:
        'https://www.westend61.de/images/0001580223pw/portrait-happy-gay-male-couple-walking-dog-on-wet-autumn-road-CAIF31095.jpg',
      comments: [],
    },
    {
      _id: '23423429423',
      likes: 1275,
      content: 'test',
      created: new Date('2021-09-24'),
      owner: {
        fullname: 'Sara Polson',
        profile_photo:
          'https://i.pinimg.com/originals/c2/4b/25/c24b25dea574fb10d1d1c229fbd49015.jpg',
      },
      image: 'https://wallpapershome.ru/images/pages/pic_v/16641.jpg',
      comments: [],
    },
  ],
  reducers: {},
});

const momentsReducer = momentsSlice.reducer;
export const {} = momentsSlice.actions;
export default momentsReducer;
