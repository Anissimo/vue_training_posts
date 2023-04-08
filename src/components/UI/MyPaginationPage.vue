<template>
    <div class="page__wrapper">
        <div 
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
            'current-page': page === pageNumber
            }"
        @click="changePage(pageNumber)"
        >
        {{ pageNumber }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-pagination-page',
    methods: {
        changePage(pageNumber) {
            this.page = pageNumber
            this.fetchPosts()
        },
    },
    props : {

    },
}
</script>

<style>
.page__wrapper {
  display: flex;
  margin-top: 15px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  line-height: 38px;
  min-width: 38px;
}
.page {
  min-width: 60px;
  margin-right: 5px;
  border: 2px solid #000;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 20px;
}
.current-page {
  color: #616161;
  border: 3px solid #000;
  background: #000;
}
</style>