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
      walker_info: {
        age: 30,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 8,
        rate: 4.7,
        reviews: [],
        verified: true,
        walks: 50,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 37,
      email: 'email@email.com',
      fullname: 'Katelyn Ballentine',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://api.time.com/wp-content/uploads/2015/04/dog-child.jpg',
      walker: true,
      walker_info: {
        age: 26,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 7,
        rate: 3.1,
        reviews: [],
        verified: false,
        walks: 268,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 31,
      email: 'email@email.com',
      fullname: 'Tisha Albert',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://www.almonature.com/wp-content/uploads/2015/05/Uomo-e-cane1-5.jpg',
      walker: true,
      walker_info: {
        age: 28,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 4,
        rate: 3.8,
        reviews: [],
        verified: false,
        walks: 270,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 36,
      email: 'email@email.com',
      fullname: 'Leisa Woodyard',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F11%2Fsmiles.jpg&q=85',
      walker: true,
      walker_info: {
        age: 25,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 4,
        rate: 5,
        reviews: [],
        verified: true,
        walks: 338,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 69,
      email: 'email@email.com',
      fullname: 'Olin Screen',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo: 'https://c.ndtvimg.com/dog_625x300_1529560762023.jpg',
      walker: true,
      walker_info: {
        age: 43,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 6,
        rate: 4.4,
        reviews: [],
        verified: true,
        walks: 290,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 5,
      email: 'email@email.com',
      fullname: 'Starla Dahlstrom',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://4.bp.blogspot.com/-bfQCM85pM2s/VEqa6Mno71I/AAAAAAAAAyw/irwbo6CoHH8/s1600/shutterstock_222493828_girldogpark.jpg',
      walker: true,
      walker_info: {
        age: 34,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 6,
        rate: 4.2,
        reviews: [],
        verified: true,
        walks: 434,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 4,
      email: 'email@email.com',
      fullname: 'Jennie Mcginley',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://www.nia.nih.gov/sites/default/files/inline-images/Woman-walking-dog.jpg',
      walker: true,
      walker_info: {
        age: 38,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 8,
        rate: 4.4,
        reviews: [],
        verified: true,
        walks: 324,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 17,
      email: 'email@email.com',
      fullname: 'Altha Aldana',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://m.economictimes.com/thumb/msid-62514137,width-1200,height-900,resizemode-4,imgsize-227613/human-dog-relationship.jpg',
      walker: true,
      walker_info: {
        age: 12,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 7,
        rate: 4.5,
        reviews: [],
        verified: false,
        walks: 306,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 57,
      email: 'email@email.com',
      fullname: 'Emile Crippen',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://www.verywellfit.com/thmb/6T2W7MpfsykCOPQa8K7Fx4JJUv0=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/iStock-619045316-5925aa853df78cbe7e0cece1.jpg',
      walker: true,
      walker_info: {
        age: 25,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 5,
        rate: 4.3,
        reviews: [],
        verified: false,
        walks: 236,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 2,
      email: 'email@email.com',
      fullname: 'Larae Eyman',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8e624944274099.580e210541084.jpg',
      walker: true,
      walker_info: {
        age: 22,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 4,
        rate: 3.3,
        reviews: [],
        verified: true,
        walks: 58,
      },
    },
    {
      created: new Date('2021-09-01'),
      distance: 50,
      email: 'email@email.com',
      fullname: 'John Smith',
      location: 'New York, USA',
      password: 'fsdfdssfsdfsdcfef',
      pets: [],
      profile_photo:
        'https://3milliondogs.com/blog-assets-two/2015/03/guydog2.jpg',
      walker: true,
      walker_info: {
        age: 27,
        description:
          'I have loved dogs since childhood. He is currently a veterinary student.',
        experience: '11 months',
        price: 8,
        rate: 4.4,
        reviews: [],
        verified: false,
        walks: 475,
      },
    },
  ],
  reducers: {
    
  },
});

const walkersReducer = walkersSlice.reducer;
export const {} = walkersSlice.actions;
export default walkersReducer;
