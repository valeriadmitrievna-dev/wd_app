import Realm from 'realm';
import {UserSchema} from './user.schema';

const RealmInstance = new Realm({schema: [UserSchema]});
export default RealmInstance;
