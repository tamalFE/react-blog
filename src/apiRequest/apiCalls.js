import axios from 'axios';

const BaseURL = 'https://basic-blog.teamrabbil.com/api';

export const postCategories = async () => {
  let res = await axios.get(`${BaseURL}/post-categories`);
  if (res.status === 200) {
    return res.data;
  } else {
    [];
  }
};

export const postNewest = async () => {
  let res = await axios.get(`${BaseURL}/post-newest`);
  if (res.status === 200) {
    return res.data;
  } else {
    [];
  }
};

export const postList = async (id) => {
  let res = await axios.get(`${BaseURL}/post-list/${id}`);
  if (res.status === 200) {
    return res.data;
  } else {
    [];
  }
};

export const postDetails = async (id) => {
  let res = await axios.get(`${BaseURL}/post-details/${id}`);
  if (res.status === 200) {
    return res.data;
  } else {
    [];
  }
};

export const createComment = async (list_id, author, comment) => {
  let res = await axios.post(`${BaseURL}/post-details/`, {
    list_id,
    author,
    comment,
  });

  if (res.status === 200) {
    return res.data;
  } else {
    [];
  }
};
