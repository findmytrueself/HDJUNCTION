export interface GetCheckSessionPramType {
  id: string;
}

export interface GetCheckSessionResponseType {
  code: string;
  message: string;
  payload: { id: number; text: string };
}
