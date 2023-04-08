<template>
  <div>
      <h1> {{store.state.post.limit}}</h1>
      <h1>{{ $store.state.isAuth ? "The user is logged in" : "Log in to use the service"}}</h1>
      <h1> {{ $store.state.likes }} </h1>
      <div>
        <my-button @click="$store.commit('decrementLikes')">Dislike</my-button>
        <my-button @click="$store.commit('incrementLikes')">Like</my-button>
      </div>
      <!-- <h3>Page with posts</h3>
      <my-input
      v-model="searchQuery"
      placeholder="search..."
      v-focus
      />
      <div class="app__btns">

      <my-button
      @click="showDialog"
      >
      Сreate a post
      </my-button>
      
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
      </div>
      
      <my-dialog v-model:show="dialogVisible">
      <post-form
      @create="createPost"
      />
      </my-dialog>

      <post-list
      :posts="sortAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
      />

      <div v-else >
      Downloading...
      </div>

      <div v-intersection="loadMorePosts" class="observer"></div> -->

  </div>
</template>


<script>  
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
components: {
  PostForm,
  PostList,
},

data() {
    return{
    posts: [],
    dialogVisible: false,
    isPostsLoading: false,
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPage: 0,
    sortOptions: [
        {value: 'title', name: 'By title'},
        {value: 'body', name: 'By body'},
    ]
    }
},

methods: {
  createPost(post) {
  this.posts.push(post);
  this.dialogVisible = false;
  },
  removePost(post) {
  this.posts = this.posts.filter(p => p.id !== post.id)
  },
  showDialog() {
  this.dialogVisible = true;
  },
},
mounted() {
  // this.fetchPosts();
},
}
</script>


<style>
.app__btns {
margin: 15px 0;
display: flex;
justify-content: space-between; /* кнопка напротив выпадающего списка */
}
.observer {
height: 30px;
}
</style>


