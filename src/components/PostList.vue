<template>

    <div v-show="posts.length > 0">
        <h3>List of users</h3>
        <transition-group name="user-list">
            <post-item 
            v-for="post in posts" 
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>

    <h3 v-show="posts.length === 0" style="color: #616161">
        The list of users is empty
    </h3>
    
</template>


<script>
import PostItem from "@/components/PostItem.vue";
export default {
    // К слову, пропсы нельзя изменять(их надо менять в корне)
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,

        }
    }
}
</script>


<style scoped>
.post {
    color: #616161;
    padding: 15px;
    border: 2px solid black;
    margin-top: 15px;
    border-radius: 5px;
}
.user-list-item {
    display: inline-block;
    margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active {
    transition: all 0.8s ease;
}

.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.user-list-move {
    transition: transform 0.8s ease;
}
</style>

