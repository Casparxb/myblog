<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>

    <button @click="deleteSingBlog">删除</button>
    <rotter-link :to="/edit/" + id>编辑</rotter-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(data => {
        // console.log(data)
        this.blog = data.body;
      });
  },
  methods: {
    deleteSingBlog() {
      this.$http
        .delete("https://jsonplaceholder.typicode.com/posts/" + this.id)
        .then(res => {
          this.$router.push({ path: "." });
        });
    }
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>