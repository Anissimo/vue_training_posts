<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Title:</strong> {{post.title}}</div>
            <div><strong>Description:</strong> {{post.body}}</div>
        </div>
        <div class="post_btns">
            <my-button
            @click="$router.push(`/posts/${post.id}`)"
            >
            Open a post
            </my-button>
            <my-button
            @click="$emit('remove', post)"
            >
            Delete a post
            </my-button>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    methods: {},
    components: { MyButton }
}
</script>

<style scoped>
.post_btns {
    display: flex;
}
.post {
    color: #616161;
    padding: 15px;
    border: 2px solid black;
    margin-top: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>


