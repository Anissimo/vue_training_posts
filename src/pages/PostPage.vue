<template>
    <div>

        <h3>Page with posts</h3>
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

        <div v-intersection="loadMorePosts" class="observer"></div>

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
    async fetchPosts() {
    try {
        this.isPostsLoading = true;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            _page: this.page,
            _limit: this.limit,
        }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
    } catch (e) {
        alert('Error')
    } finally {
        this.isPostsLoading = false;
    }
    },
    async loadMorePosts() {
    try {
        this.page += 1;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            _page: this.page,
            _limit: this.limit,
        }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
    } catch (e) {
        alert('Error')
    } 
    },
},
computed: {
    sortedPosts() {
    return [...this.posts].sort((post1,post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    })
    },
    sortAndSearchedPosts() {
    return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
},
mounted() {
this.fetchPosts();
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
