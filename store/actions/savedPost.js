export const SAVE_POST = "SAVE_POST";

export const SavePost = (post) => {
  return {
    type: SAVE_POST,
    post,
  };
};
