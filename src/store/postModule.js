
export const postModule = {
    state : () => ({
        likes: 0,
        isAuth: false,
        posts: [],
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
    }),
    getters: {
        doubleLikes(state) {
            return(state.likes * 2)
        },
        sortedPosts(state) {
            return [state.posts].sort((post1,post2) => {
            return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
    },
    mutations: {
        incrementLikes(state) {
            state.likes += 1
        },
        decrementLikes(state) {
            state.likes -= 1
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostsLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, setSelectedSort) {
            state.setSelectedSort = setSelectedSort
        },
        set(state, totalPage) {
            state.totalPage = totalPage                                
        },
        set(state, searchQuery) {
            state.searchQuery = searchQuery                          
        },

        
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setIsPostsLoading', true)
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _page: state.page,
                    _limit: state.limit,
                }
                })
                commit('totalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            } catch (e) {
                alert('Error')
            } finally {
                commit('setIsPostsLoading', false)
            }
            },

            async loadMorePosts({state, commit}) {
                try {
                    commit('setPage', state.page + 1) 
                    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    }
                    })
                    commit('totalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                    commit('posts', [...this.posts, ...response.data])
                } catch (e) {
                    alert('Error')
                } 
        },
    },
}