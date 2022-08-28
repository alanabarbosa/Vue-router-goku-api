export default {
    data() {
      return {
        api: null,
        loading: true,
      };
    },
    methods: {
      fetchData(url) {
        this.loading = true
        fetch(`http://localhost:3000${url}`)
          .then(response => response.json())
          .then(response => {
            setTimeout(() => {
              this.api = response
              this.loading = false
            },1000)
          })
      }
    },
    created() {
      this.fetchData()
    }
  }