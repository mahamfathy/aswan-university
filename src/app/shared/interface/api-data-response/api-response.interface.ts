import { IUser } from '../user/IUserResponse';

export interface IApiResponse {
  success: boolean;
  message: string;
  data: IData;
}

export interface IData {
  users?: IUser[];
  // facilities?: IFacility[];
  // booking?: IBooking[];
  // rooms?: IRoom[];
  // user?: IUser;
  // room?: IRoom;
  // ads?: Ads[];
  // favoriteRooms?: IFavoriteRooms[];
  // totalCount: number;
  // token?: string;
  // roomReviews?: IGetRoomReview[];
}
