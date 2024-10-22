import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Hello",
    content: "Welcome to my bulletin board!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 10,
      wow: 0,
      heart: 5,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "About",
    content: "This is a simple bulletin board app built with React and Redux.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 2,
      wow: 0,
      heart: 18,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 3,
    title: "Contact",
    content: "You can reach me at myemail@example.com.",
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 5,
      rocket: 20,
      coffee: 7,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
